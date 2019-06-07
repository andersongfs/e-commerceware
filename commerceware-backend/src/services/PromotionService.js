const Product = require('../models/Product')
const Promotion3por10 = require('../models/Promotion/Promotion3por10')

class PromotionService {
  async getItemDiscount (product, quantity) {
    const purchaseProduct = await Product.findById(product)

    const discountValue = Promotion3por10.getDiscount(purchaseProduct, quantity)

    const priceWithDiscount = Promotion3por10.getPriceWithDiscount(
      purchaseProduct,
      quantity
    )

    return {
      discount: discountValue,
      priceWithDiscount: priceWithDiscount
    }
  }
}

module.exports = new PromotionService()
