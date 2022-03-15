import * as actionTypes from '../constants/favoriteConstants';
export const favoriteReducer = (state = { favoriteItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_FAVORITE_LIST: {
      return {
        ...state,
        favoriteItems: [...state.favoriteItems, action.payload],
      };
    }
    case actionTypes.REMOVE_FROM_FAVORITE_LIST: {
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    }
    case actionTypes.LOAD_FAVORITE_LIST_FROM_LOCAL_STORAGE: {
      return {
        ...state,
        favoriteItems: action.payload ? action.payload : [],
      };
    }
    default:
      return state;
  }
};
