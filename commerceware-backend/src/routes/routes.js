const express = require('express')
const validate = require('express-validation')
const handle = require('express-async-handler')

const routes = express.Router()

const controllers = require('../controllers')
const productValidator = require('../validators/Product')

/**
 * Product routes
 */
routes.get('/products', handle(controllers.ProductController.index))
routes.get('/products/:id', handle(controllers.ProductController.show))
routes.post(
  '/products',
  validate(productValidator),
  handle(controllers.ProductController.store)
)
routes.put('/products/:id', handle(controllers.ProductController.update))
routes.delete('/products/:id', handle(controllers.ProductController.destroy))

/**
 * Purchase routes
 */
routes.get(
  '/purchasediscount',
  handle(controllers.PurchaseController.getDiscount)
)
module.exports = routes
