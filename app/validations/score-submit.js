const Joi = require('joi')

module.exports = Joi.object ({
    user_id: Joi.string().required(),
    timestamp: Joi.number().required(),
    score_worth: Joi.number().required(),
}).required ();