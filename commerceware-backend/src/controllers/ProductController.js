const Product = require('../models/Product')
const PromotionService = require('../services/PromotionService')

class ProductController {
  async index (req, res) {
    const product = await Product.find()
    return res.json(product)
  }

  async show (req, res) {
    const product = await Product.findById(req.params.id)

    if (product) {
      return res.status(200).json(product)
    }
    return res.status(404).json()
  }

  async store (req, res) {
    const { promotion } = req.body

    // if (await Product.findOne({ title })) {
    //   return res.status(400).json({ error: 'Product already exists' })
    // }
    if (promotion) {
      if (!PromotionService.isValidPromotion(promotion)) {
        return res.status(400).json({ error: 'invalid promotion' })
      }
    }
    const product = await Product.create(req.body)
    return res.status(201).json(product)
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
