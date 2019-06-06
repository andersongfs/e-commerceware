const express = require('express')

const routes = express.Router()

const controllers = require('../controllers')

/**
 * Product routes
 */
routes.get('/products', controllers.ProductController.index)
routes.get('/products/:id', controllers.ProductController.show)
routes.post('/products', controllers.ProductController.store)
routes.put('/products/:id', controllers.ProductController.update)
routes.delete('/products/:id', controllers.ProductController.destroy)

module.exports = routes
