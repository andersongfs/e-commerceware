const Product = require('../models/Product')

class ProductController {
  async index (req, res) {
    const product = await Product.find()
    return res.json(product)
  }

  async show (req, res) {
    const product = await Product.findById(req.params.id)
    return res.json(product)
  }

  async store (req, res) {
    // const { title } = req.body

    // if (await Product.findOne({ title })) {
    //   return res.status(400).json({ error: 'Product already exists' })
    // }

    const product = await Product.create(req.body)
    return res.json(product)
  }

  async update (req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.json(product)
  }

  async destroy (req, res) {
    await Product.findByIdAndDelete(req.params.id)
    return res.send()
  }
}
module.exports = new ProductController()
