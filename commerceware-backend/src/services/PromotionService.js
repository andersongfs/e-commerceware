const Product = require('../models/Product')
const Promotion3por10 = require('../models/Promotion/Promotion3por10')
const PromotionBuy2Pay1 = require('../models/Promotion/PromotionBuy2Pay1')

class PromotionService {
  async getItemDiscount (product, quantity) {
    const purchaseProduct = await Product.findById(product)

    const promo3por10 = new Promotion3por10(purchaseProduct, quantity)
    const promoBuy2Pay1 = new PromotionBuy2Pay1(purchaseProduct, quantity)

    const discountValue = promoBuy2Pay1.getDiscount()
    const priceWithDiscount = promoBuy2Pay1.getPriceWithDiscount()

    return {
      discount: discountValue,
      priceWithDiscount: priceWithDiscount
    }
  }
}

module.exports = new PromotionService()
