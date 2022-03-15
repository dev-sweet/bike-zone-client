import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const item = action.payload;
      const existItem = state.cartItems?.find((bike) => bike._id === item._id);
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
          cartItems: [...state.cartItems, item],
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
    case actionTypes.LOAD_FROM_LOCAL_STORAGE: {
      return {
        ...state,
        cartItems: action.payload ? action.payload : [],
      };
    }
    default:
      return state;
  }
};
