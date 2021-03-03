const Joi = require('joi')

module.exports = Joi.object ({
    count: Joi.number().required()
}).required ();