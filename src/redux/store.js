import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/cartReducer';
import { favoriteReducer } from './reducers/favoriteReducer';
import {
  getProductsReducer,
  getProductReducer,
} from './reducers/productReducer';
const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoriteReducer,
  getProducts: getProductsReducer,
  getProduct: getProductReducer,
});
const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
