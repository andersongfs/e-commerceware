const Promotion = require('./Promotion')

class Promotion3por10 extends Promotion {
  _doGetPriceWithDiscount () {
    const priceWithDiscount =
      (this._quantity % 3) * this._product.price +
      Math.floor(this._quantity / 3) * 10

    return priceWithDiscount
  }
}
module.exports = Promotion3por10
