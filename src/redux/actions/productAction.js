import * as actionTypes from '../constants/productConstants';
import axious from 'axios/';
export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUST });
    const { data } = await axious.get(`http://localhost:5000/bikes`);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_REQUST });
    const { data } = await axious.get(`http://localhost:5000/bikes/${id}`);

    dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
