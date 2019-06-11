const Joi = require('joi')

module.exports = {
  body: {
    title: Joi.string().optional(),
    price: Joi.number()
      .greater(0)
      .optional(),
    promotion: Joi.string()
      .allow(null)
      .optional()
  }
}
