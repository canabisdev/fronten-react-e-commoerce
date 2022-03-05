import { CART_ADD_ITEM, 
         CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartRedcuer  = (state = {cartItems: []}, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            // compare current item avec id (action.payload) par id de cartItems (product: data._id)
            const existItem = state.cartItems.find((x) => x.product === item.product);

            // if cartItem existe replace this to item
            if (existItem) {
                return {
                  ...state,
                  error: '',
                  cartItems: state.cartItems.map((x) =>
                    x.product === existItem.product ? item : x
                  ),
                };
              } else {
                // ...state.cartItems add in cartItem
                // new item add cartItem
                return { ...state, error: '', cartItems: [...state.cartItems, item] };
              }
        case CART_REMOVE_ITEM:
            return {
              ...state,
                error: '',
                // manala element aty tableau ny cartItems
                cartItems: state.cartItems.filter((x) => x.product !== action.payload),
            };
        default:
            return state
    }
}