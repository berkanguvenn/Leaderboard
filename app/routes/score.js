const databaseManager = require('../database-manager')
const validator = require('express-joi-validation').createValidator({})
const _ = require('lodash')
module.exports = function (app) {
    app.post('/score/submit', validator.body(require ("../validations/score-submit")), async (req, res) => {
        const uid =  req.body.user_id;
        const score_worth =  req.body.score_worth;

        const isUserExists = await databaseManager.getUser(uid);

        if (_.isEmpty(isUserExists)) {
            res.send({err:'User does not exists !'});
            return;
        }

        const result = await databaseManager.updateScore(uid, score_worth);

        if (result) {
            res.send({success:true})
        } else {
            res.status(500).send({err:'An error occured.'});
        }
    });
};