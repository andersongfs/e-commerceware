const INITIAL_STATE = {
  products: {
    "5d0110f5da5b163860cc6cbaXXX": {
      _id: "5d0110f5da5b163860cc6cbaXXX",
      title: "title",
      price: 10,
      promotion: "THREE_BY_10",
      quantity: 1
    },
    "5d01110bda5b163860cc6cbb": {
      _id: "5d01110bda5b163860cc6cbb",
      title: "title2",
      price: 50,
      promotion: "THREE_BY_10",
      quantity: 3
    }
  }
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_CART_ITEM":
      const productId = action.payload.product._id;
      let findProduct = state.products[productId];
      let productCopy;

      if (findProduct) {
        productCopy = { ...findProduct, quantity: findProduct.quantity + 1 };
      } else {
        productCopy = { ...action.payload.product, quantity: 1 };
      }

      const productScope = { ...state.products };
      productScope[productId] = productCopy;
      return { ...state, products: productScope };

    case "REMOVE_CART_ITEM":
      const idToRemove = action.payload.product._id;
      delete state.products[idToRemove];
      return { ...state };

    default:
      return state;
  }
}
