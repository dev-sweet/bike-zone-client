import React, { useState, useEffect } from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import CartProduct from '../CartProduct/CartProduct';
import './Cart.css';
const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/bikes')
      .then((res) => res.json())
      .then((data) => setCartProducts(data));
  }, []);

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
            {cartProducts?.map((cartProduct) => (
              <CartProduct product={cartProduct} Key={cartProduct._id} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
