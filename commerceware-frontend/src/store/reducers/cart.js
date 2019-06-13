const INITIAL_STATE=[
  {
    product: {_id:'5d0110f5da5b163860cc6cbaXXX', title:"title", price: 10, promotion:"THREE_BY_10"},
    quantity: 1
  },
  {
    product: {_id:'5d01110bda5b163860cc6cbb', title:"title2", price: 50, promotion:"THREE_BY_10"},
    quantity: 3
  }

]


export default function cart(state = INITIAL_STATE, action){
  switch(action.type){
    case 'ADD_CART_ITEM':
      let alreadyExists = false;
      state.forEach(function(item, index, array) {
          if(item.product._id === action.payload.product._id){
            item.quantity += 1;
            alreadyExists = true;
            return state;
          }
        });
      if(!alreadyExists){
        return [...state, {product: action.payload.product, quantity: 1}]
      }

    default:
      return state;
  }
}
