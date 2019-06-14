export const addCartItem = product => ({ 
  type: 'ADD_CART_ITEM', 
  payload: {product},
});

export const removeCartItem = product => ({ 
  type: 'REMOVE_CART_ITEM', 
  payload: {product},
});

export const decreaseCartItem = product => ({ 
  type: 'DECREASE_CART_ITEM', 
  payload: {product},
});