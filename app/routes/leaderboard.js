const databaseManager = require('../database-manager')
const validator = require('express-joi-validation').createValidator({})

module.exports = function (app) {
    app.get('/leaderboard/:country/:start/:end', async (req, res) => {
        try {
            let startRank = parseInt(req.params.start) - 1;
            let endRank = parseInt(req.params.end) - 1;

            if (startRank < 0) {
                res.status(500).send('Invalid param');
                return
            }

            if (endRank < startRank) {
                res.status(500).send('Invalid param');
                return
            }

            const result = await databaseManager.getUsersByCountry(req.params.country, startRank, endRank)
            res.send(result)
        } catch (err) {
            res.status(500).send(err)
        }
    });

    app.get('/leaderboard/:start/:end', async (req, res) => {
        try {
            let startRank = parseInt(req.params.start) - 1;
            let endRank = parseInt(req.params.end) - 1;

            if (startRank < 0) {
                res.status(500).send('Invalid param');
                return
            }

            if (endRank < startRank) {
                res.status(500).send('Invalid param');
                return
            }

            const result = await databaseManager.getUsers(startRank, endRank)
            res.send(result)
        } catch (err) {
            res.status(500).send(err)
        }
    });

    app.get('/leaderboard/:country', async (req, res) => {
        try {
            const result = await databaseManager.getUsersByCountry(req.params.country)
            res.send(result)
        } catch (err) {
            res.status(500).send(err)
        }
    });

    app.get('/leaderboard', async (req, res) => {
        try {
            const result = await databaseManager.getUsers(); // sort by rank + pagination
            res.send(result)
        } catch (err) {
            res.status(500).send(err)
        }
    });
};