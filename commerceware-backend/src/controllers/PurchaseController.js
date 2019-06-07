const PromotionService = require('../services/PromotionService')

class PurchaseController {
  async getDiscount (req, res) {
    const { product, quantity } = req.body
    var discount

    try {
      discount = await PromotionService.getItemDiscount(product, quantity)
    } catch (err) {
      console.error(err)
    }

    return res.json(discount)
  }
}

module.exports = new PurchaseController()
