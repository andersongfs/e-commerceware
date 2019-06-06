const Product = require('../models/Product')

class ProductController {
  async store (req, res) {
    const { title } = req.body

    if (await Product.findOne({ title })) {
      return res.status(400).json({ error: 'Product already exists' })
    }

    const product = await Product.create(req.body)
    return res.json(product)
  }
}
module.exports = new ProductController()
