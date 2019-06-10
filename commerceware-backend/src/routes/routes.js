const express = require('express')
const handle = require('express-async-handler')

const routes = express.Router()

const controllers = require('../controllers')

/**
 * Product routes
 */
routes.get('/products', handle(controllers.ProductController.index))
routes.get('/products/:id', handle(controllers.ProductController.show))
routes.post('/products', handle(controllers.ProductController.store))
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
