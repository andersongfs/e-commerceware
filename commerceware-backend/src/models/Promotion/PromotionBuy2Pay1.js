const Promotion = require('./Promotion')

class PromotionBuy2Pay1 extends Promotion {
  _doGetPriceWithDiscount () {
    const priceWithDiscount =
      (this._quantity % 2) * this._product.price +
      Math.floor(this._quantity / 2) * this._product.price

    return priceWithDiscount
  }
}
module.exports = PromotionBuy2Pay1
