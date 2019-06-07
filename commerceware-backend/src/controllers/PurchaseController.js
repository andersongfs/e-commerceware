const Product = require('../models/Product')

class PurchaseController {
  async getDiscount (req, res) {
    const { product, qtt } = req.body // incluir promotion

    const purchaseProduct = await Product.findById(product)

    const priceWithDiscount =
      (qtt % 3) * purchaseProduct.price + Math.floor(qtt / 3) * 10
    const discountValue = purchaseProduct.price * qtt - priceWithDiscount

    return res.json({
      discount: discountValue,
      priceWithDiscount: priceWithDiscount
    })
  }
}

module.exports = new PurchaseController()
