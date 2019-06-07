class Promotion3por10 {
  // Adding a method to the constructor
  getDiscount (product, quantity) {
    const totalPrice = product.price * quantity
    const priceWithDiscount = this.getPriceWithDiscount(product, quantity)

    return totalPrice - priceWithDiscount
  }

  getPriceWithDiscount (product, quantity) {
    const priceWithDiscount =
      (quantity % 3) * product.price + Math.floor(quantity / 3) * 10

    return priceWithDiscount
  }
}
module.exports = new Promotion3por10()
