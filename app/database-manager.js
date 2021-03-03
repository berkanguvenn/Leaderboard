const databaseConnection = require('./database.js');
const _ = require('lodash');

// TODO: PIPELINE + MULTI AND ZUNION ?

const self = {
    updateScore: async (uid, score, country) => {
        try {
            if (country) {
                await databaseConnection
                    .multi()
                    .zincrby('scores', score, uid)
                    .zincrby('country:' + country, score, uid)
                    .exec();
            } else {
                await databaseConnection.zincrby('scores', score, uid);

                const country = await self.getUserCountry(uid);
                await databaseConnection.zincrby('country:'+country, score, uid);
            }
        } catch (err) {
            return false;
        }

        return true;
    },

    getScore: async (uid) => {
        const result = await databaseConnection.zscore('scores', uid)
        return parseFloat(result);
    },

    getRank: async (uid) => {
        return (await databaseConnection.zrevrank('scores', uid)) + 1;
    },

    getUsers: async (start, end) => {
        let ids;

        if (!_.isNil(start) && !_.isNil(end)) {
            ids = await databaseConnection.zrevrange('scores', start, end, 'WITHSCORES');
        } else {
            ids = await databaseConnection.zrevrange('scores', 0, -1, 'WITHSCORES');
        }

        const promArr = [];

        let i = 0;

        while (i < ids.length) {
            let userId = ids[i];
            let score = ids[i+1];
            promArr.push(self.getUser(userId, parseFloat(score)));
            i+=2;
        }

         return await Promise.all(promArr);
    },

    getUserCountry: async (uid) => {
        const results = await databaseConnection.hget('users:' + uid, 'country')

        if(_.isEmpty(results)) {
            return 'unk';
        }

        return results;
    },

    getUser: async (uid, score) => {
        const results = await databaseConnection.hgetall('users:' + uid)

        if (!_.isEmpty(results)) {
            if (score) {
                results.points = score;
                results.rank = await self.getRank(uid);
            } else {
                await Promise.all([self.getRank(uid), self.getScore(uid)]).then((values) => {
                    results.points = values[1];
                    results.rank = values[0];
                });
            }
            results.user_id = uid;
        }

        return results;
    },

    insertUser: async (user) => {
        try {
            const transform = {display_name: user.display_name, country: user.country}
            const res = await Promise.all([self.updateScore(user.user_id, user.points, user.country), databaseConnection.hset('users:' + user.user_id, transform)])
        } catch (err) {
            return false;
        }

        return true;
    },

    getUsersByCountry: async (cntry, start, end) => {
        let ids;

        if (!_.isNil(start) && !_.isNil(end)) {
            ids = await databaseConnection.zrevrange('country:' + cntry, start, end, 'WITHSCORES');
        } else {
            ids = await databaseConnection.zrevrange('country:' + cntry, 0, -1, 'WITHSCORES');
        }

        const promArr = [];

        let i = 0;

        while (i < ids.length) {
            let userId = ids[i];
            let score = ids[i+1];
            promArr.push(self.getUser(userId, parseFloat(score)));
            i+=2;
        }

        return await Promise.all(promArr);
    },
};

module.exports = self;