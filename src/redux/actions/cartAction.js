import * as actionTypes from '../constants/cartConstants';

export const addToCart = (payload) => (dispatch, getState) => {
  dispatch({ type: actionTypes.ADD_TO_CART, payload });
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};
