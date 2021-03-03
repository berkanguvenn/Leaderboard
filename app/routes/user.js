const databaseManager = require('../database-manager')
const validator = require('express-joi-validation').createValidator({})
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');

module.exports = function (app) {
    app.get('/user/profile/:user_id', async (req, res) => {
        try {
            const result = await databaseManager.getUser(req.params.user_id.toLowerCase());
            res.send(result)
        } catch (err) {
            res.send(err)
        }
    });

    app.post('/user/create', validator.body(require ("../validations/user-create")), async (req, res) => {
        let userCountry = req.body.country;

        if (!userCountry) {
            userCountry = 'unk'
        }

        const user = {
            user_id: req.body.user_id,
            display_name: req.body.display_name,
            points: req.body.points,
            rank: req.body.rank,
            country: userCountry.toLowerCase()
        }

        const isUserExists = await databaseManager.getUser(user.user_id);

        if (!_.isEmpty(isUserExists)) {
            res.send({err:'User already exists !'});
            return;
        }

        const insertResult = await databaseManager.insertUser(user);

        if (insertResult) {
            res.send({success:true})
        } else {
            res.status(500).send();
        }
    })

    app.post('/user/test', validator.body(require ("../validations/user-test")), async (req, res) => {
        const count = req.body.count;

        let i = 0;

        while (i < count) {
            let uid = uuidv4();
            const country = Math.floor(Math.random() * 2) + 1 === 1 ? 'tr' : 'en'

            const user = {
                user_id: uid,
                display_name: uid.substring(6),
                points: Math.floor(Math.random() * 99999) + 1,
                rank: Math.floor(Math.random() * 99999) + 1,
                country: country
            }

            const isUserExists = await databaseManager.getUser(user.user_id);

            if (!_.isEmpty(isUserExists)) {
                continue;
            }

            const insertResult = await databaseManager.insertUser(user);

            if (!insertResult) {
                res.status(500).send();
            }

            ++i;
        }

        res.send({success:true})

    });

    app.get('/user/profile/:user_id', async (req, res) => {
        try {
            const result = await databaseManager.getUser(req.params.user_id);
            res.send(result)
        } catch (err) {
            res.send(err)
        }
    });
};