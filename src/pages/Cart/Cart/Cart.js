import React, { useEffect } from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import CartProduct from '../CartProduct/CartProduct';
import { AiOutlineWarning, AiOutlineShopping } from 'react-icons/ai';
import {
  addToCart,
  loadFromLocalStorage,
  removeFromCart,
} from '../../../redux/actions/cartAction';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  // handle form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // navigate to checkout page
  const onSubmit = (data) => {
    if (data.acceptTerms) {
      navigate('/checkout');
    }
  };

  // calculate subtotal
  let subTotal = 0;
  cartItems?.map((item) => (subTotal = subTotal + item.qty * item.price));

  // load data from local storage
  useEffect(() => {
    dispatch(loadFromLocalStorage());
  }, [dispatch]);

  return (
    <>
      <Header />

      {cartItems.length === 0 ? (
        <div className="empty-list">
          <div className="empty-icon">
            <AiOutlineShopping />
          </div>
          <h4>WISHLIST IS EMPTY.</h4>
          <p>
            Before proceed to checkout you must add some products to your
            shopping cart. <br />
            You will find a lot of interesting products on our "Shop" page.
          </p>
          <Link className="banner-btn" to="/bikes">
            RETURN TO SHOP
          </Link>
        </div>
      ) : (
        <div className="cart py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8 col-md-7">
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
              <div className="col-lg-4 col-md-5 pt-md-4">
                <div className="cart-subtotal">
                  <h4>
                    Subtotal : <span> ${subTotal}</span>
                  </h4>
                  <p>
                    Taxes, shipping and discounts codes calculated at checkout
                  </p>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="terms-checkbox"
                  >
                    <label className="checkbox-container">
                      <input
                        name="acceptTerms"
                        type="checkbox"
                        {...register('acceptTerms', {
                          required: true,
                        })}
                        id="acceptTerms"
                      />
                      Accept terms & conditions
                      <span className="checkmark"></span>
                    </label>
                    {errors.acceptTerms && (
                      <p className="checkbox-error">
                        <AiOutlineWarning /> You must agree with the terms and
                        conditions
                      </p>
                    )}
                    <div className="text-center pt-2">
                      <button className="banner-btn w-75 mx-auto">
                        CHECK OUT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Cart;
