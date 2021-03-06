const Product = require('../models/Product')
const PromotionService = require('../services/PromotionService')
const PromotionType = require('../enums/promotionType')

class ProductController {
  async index (req, res) {
    const products = await Product.find()
    var nested = products.map(function (p) {
      return p.promotion
        ? { ...p._doc, promotion: PromotionType[p.promotion] }
        : { ...p._doc }
    })
    return res.json(nested)
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
        return res.status(400).json({ error: 'Invalid promotion' })
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
    try {
      const product = await Product.findById(req.params.id)
      if (product) {
        await product.remove()
        return res.status(204).send()
      }
    } catch (err) {
      return res.status(404).json({ error: 'Invalid product id' })
    }
  }
}
module.exports = new ProductController()
