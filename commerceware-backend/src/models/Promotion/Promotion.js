class Promotion {
  constructor (product, quantity) {
    this._product = product
    this._quantity = quantity
  }
  getDiscount () {
    const totalPrice = this._product.price * this._quantity
    const priceWithDiscount = this.getPriceWithDiscount()

    return totalPrice - priceWithDiscount
  }

  getPriceWithDiscount () {
    return this._doGetPriceWithDiscount()
  }
}

module.exports = Promotion
