const Joi = require('joi')

module.exports = Joi.object ({
    user_id: Joi.string().required(),
    display_name: Joi.string().required(),
    points: Joi.number().required(),
    rank: Joi.number().required(),
    country: Joi.string()
}).required ();