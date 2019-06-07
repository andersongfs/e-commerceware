const express = require('express')
const mongoose = require('mongoose')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.database()
    this.middlewares()
    this.routes()
  }

  database () {
    mongoose.connect(process.env.DATABASE_URI, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  }
  middlewares () {
    this.express.use(express.json())
  }

  routes () {
    this.express.use(require('./src/routes/routes'))
  }
}

module.exports = new App().express
