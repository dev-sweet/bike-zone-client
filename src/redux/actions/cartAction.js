import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:5000/bikes/${id}`);
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      _id: data._id,
      name: data.name,
      img: data.img,
      price: data.price,
      qty,
    },
  });
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};
export const loadFromLocalStorage = () => (dispatch) => {
  const cartItems = JSON.parse(localStorage.getItem('cart'));
  dispatch({
    type: actionTypes.LOAD_FROM_LOCAL_STORAGE,
    payload: cartItems,
  });
};
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};
