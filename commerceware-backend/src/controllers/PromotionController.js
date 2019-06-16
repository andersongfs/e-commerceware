const PromotionType = require('../enums/promotionType')

class PromotionController {
  async index (req, res) {
    return res.json(PromotionType)
  }
}
module.exports = new PromotionController()
