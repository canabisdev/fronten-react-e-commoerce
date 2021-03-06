import Axios  from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

// addTocart avait 2 parametre 
export const addToCart = (productId, qty) =>  async (dispatch, getState) => {
    const {data} = await Axios.get(`${process.env.REACT_APP_API}/api/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.product.name,
            image: data.product.image,
            price: data.product.price,
            countInStock: data.product.countInStock,
            product: data.product._id,
            qty,
        }
    })
    localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
    );
}

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};