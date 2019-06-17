const PromotionType = require('../enums/promotionType')
const PromotionService = require('../services/PromotionService')

class PromotionController {
  async index (req, res) {
    return res.json(PromotionType)
  }

  async getDiscount (req, res) {
    const productId = req.params.id
    const quantity = req.params.qtt
    var discount

    try {
      discount = await PromotionService.getItemDiscount(productId, quantity)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }

    return res.json(discount)
  }
}
module.exports = new PromotionController()
