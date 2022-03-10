import React, { useEffect } from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import CartProduct from '../CartProduct/CartProduct';
import {
  addToCart,
  loadFromLocalStorage,
  removeFromCart,
} from '../../../redux/actions/cartAction';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css';
const Cart = () => {
  const dispatch = useDispatch();

  // get cart from store
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // handle delete
  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  // handle update cart
  const handleUpdateCart = (id, qty) => {
    dispatch(addToCart(id, qty));
  };
  // load data from local storage
  useEffect(() => {
    dispatch(loadFromLocalStorage());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="cart py-5">
        <div className="container">
          <div className="cart-products">
            <div className="cart-product-head">
              <h6 className="product">product</h6>
              <h6 className="price">price</h6>
              <h6 className="quantity">quantity</h6>
              <h6 className="total">total</h6>
            </div>
            {cartItems?.map((cartProduct) => (
              <CartProduct
                product={cartProduct}
                handleDelete={handleDelete}
                handleUpdateCart={handleUpdateCart}
                key={cartProduct._id + 'acb'}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
