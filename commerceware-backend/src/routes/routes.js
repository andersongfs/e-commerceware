const express = require('express')

const routes = express.Router()

const controllers = require('../controllers')

/**
 * Product routes
 */
routes.post('/products', controllers.ProductController.store)

module.exports = routes
