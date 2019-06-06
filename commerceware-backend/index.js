require('dotenv').config()

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.send('Server is up!')
})

const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`Commerceware API is listening on port ${port}!`)
})
