const Joi = require('joi')

module.exports = {
  body: {
    title: Joi.string().required(),
    price: Joi.number()
      .greater(0)
      .required(),
    promotion: Joi.string().optional()
  }
}
