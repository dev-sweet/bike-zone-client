import * as actionTypes from '../constants/favoriteConstants';
import axios from 'axios';
export const addToFavoriteList = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:5000/bikes/${id}`);
  dispatch({
    type: actionTypes.ADD_TO_FAVORITE_LIST,
    payload: data,
  });
  localStorage.setItem(
    'favorites',
    JSON.stringify(getState().favorites.favoriteItems)
  );
};
export const removeFromFavoriteList = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADD_TO_FAVORITE_LIST,
    payload: id,
  });
  localStorage.setItem(
    'favorites',
    JSON.stringify(getState().favorites.favoriteItems)
  );
};
export const loadFavoritesFromLocalStorage = () => (dispatch) => {
  const favoriteItems = JSON.parse(localStorage.getItem('favorites'));
  dispatch({
    type: actionTypes.LOAD_FAVORITE_LIST_FROM_LOCAL_STORAGE,
    payload: favoriteItems,
  });
};
