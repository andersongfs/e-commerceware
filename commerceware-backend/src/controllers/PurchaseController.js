const PromotionService = require('../services/PromotionService')

class PurchaseController {
  async getDiscount (req, res) {
    const product = req.params.id
    const quantity = req.params.qtt
    var discount

    try {
      discount = await PromotionService.getItemDiscount(product, quantity)
    } catch (err) {
      throw new Error(err)
    }

    return res.json(discount)
  }
}

module.exports = new PurchaseController()
