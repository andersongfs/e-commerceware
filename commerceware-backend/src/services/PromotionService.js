const Product = require('../models/Product')

class PromotionService {
  async getItemDiscount (product, quantity) {
    const purchaseProduct = await Product.findById(product)

    const priceWithDiscount =
      (quantity % 3) * purchaseProduct.price + Math.floor(quantity / 3) * 10

    const discountValue = purchaseProduct.price * quantity - priceWithDiscount

    return {
      discount: discountValue,
      priceWithDiscount: priceWithDiscount
    }
  }
}

module.exports = new PromotionService()
