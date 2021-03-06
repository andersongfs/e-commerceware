const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const validate = require('express-validation')
const Youch = require('youch')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'
    this.database()
    this.middlewares()
    this.routes()
    this.exception()
  }

  database () {
    if (process.env.NODE_ENV === 'test') {
      mongoose.connect(process.env.DATABASE_TEST_URI, {
        useCreateIndex: true,
        useNewUrlParser: true
      })
    } else {
      mongoose.connect(process.env.DATABASE_URI, {
        useCreateIndex: true,
        useNewUrlParser: true
      })
    }
  }
  middlewares () {
    this.express.use(cors())
    this.express.use(express.json())
  }

  routes () {
    this.express.use(require('./src/routes/routes'))
  }

  exception () {
    this.express.use(async (err, req, res, next) => {
      if (err instanceof validate.ValidationError) {
        return res.status(err.status).json(err)
      }

      if (process.env.NODE_ENV !== 'production') {
        const youch = new Youch(err)
        return res.json(await youch.toJSON())
      }

      return res
        .status(err.status || 500)
        .json({ error: 'Internal Server Error' })
    })
  }
}

module.exports = new App().express
