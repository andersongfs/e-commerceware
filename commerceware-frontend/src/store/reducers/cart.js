const INITIAL_STATE = {
  products: {}
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
        productCopy = {
          ...action.payload.product,
          quantity: 1,
          discount: 0,
          priceWithDiscount: action.payload.product.price
        };
      }

      const productScope = { ...state.products };
      productScope[productId] = productCopy;
      return { ...state, products: productScope };

    case "REMOVE_CART_ITEM":
      const idToRemove = action.payload.product._id;
      delete state.products[idToRemove];
      return { ...state };

    case "DECREASE_CART_ITEM":
      const id = action.payload.product._id;
      let product = state.products[id];

      if (product.quantity < 2) {
        delete state.products[id];
        return { ...state };
      }

      const productAUX = { ...product, quantity: product.quantity - 1 };
      const productsScp = { ...state.products };
      productsScp[id] = productAUX;
      return { ...state, products: productsScp };

    case "FINISH_ORDER":
      return INITIAL_STATE;

    case "GET_DISCOUNT_SUCCESS":
      const pid = action.payload.productDiscount._id;
      const p = state.products[pid];
      const paux = {
        ...p,
        discount: action.payload.productDiscount.discount,
        priceWithDiscount: action.payload.productDiscount.priceWithDiscount
      };

      const pscp = { ...state.products };
      pscp[pid] = paux;

      return { ...state, products: pscp };
    default:
      return state;
  }
}
