import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action) {
    case actionTypes.ADD_TO_CART: {
      const item = action.payload;
      const existItem = state.cartItems.find((bike) => bike._id === item._id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((bike) =>
            bike._id === existItem._id ? item : bike
          ),
        };
      } else {
        return {
          ...state,
          item,
        };
      }
    }
    case actionTypes.REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (bike) => bike._id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
