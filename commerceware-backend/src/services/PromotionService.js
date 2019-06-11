const Product = require('../models/Product')
const Promotion3itemsBy10 = require('../models/Promotion/Promotion3itemsBy10')
const PromotionBuy2Pay1 = require('../models/Promotion/PromotionBuy2Pay1')
const promotionType = require('../enums/promotionType')

class PromotionService {
  async getItemDiscount (product, quantity) {
    const purchaseProduct = await Product.findById(product)

    const promo = this.createPromotion(
      purchaseProduct,
      quantity,
      purchaseProduct.promotion
    )

    const discountValue = promo.getDiscount()
    const priceWithDiscount = promo.getPriceWithDiscount()

    return {
      discount: discountValue,
      priceWithDiscount: priceWithDiscount
    }
  }

  createPromotion (product, quantity, promotion) {
    switch (promotion) {
      case promotionType.THREE_BY_10.id:
        return new Promotion3itemsBy10(product, quantity)
      case promotionType.BUY_2_PAY_1.id:
        return new PromotionBuy2Pay1(product, quantity)
    }
  }

  isValidPromotion (promotion) {
    if (promotionType[promotion]) {
      return true
    }
    return false
  }
}

module.exports = new PromotionService()
