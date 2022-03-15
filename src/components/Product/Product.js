import React from 'react';
import './Product.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { FaCartPlus } from 'react-icons/fa';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavoriteList } from '../../../redux/actions/favoriteAction';
import { addToCart } from '../../../redux/actions/cartAction';

const Product = ({ product }) => {
  const { img, name, price, _id } = product;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // get current path
  const location = useLocation();
  const path = location.pathname;

  // handle navigation
  const handleClick = (id) => {
    const url = `/bikes/${id}`;
    navigate(url);
  };

  // get cart from redux
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const existCartItems = cartItems.find((item) => item._id === _id);

  // get all favorites from redux
  const favorites = useSelector((state) => state.favorites);
  const { favoriteItems } = favorites;
  const existFavoriteList = favoriteItems.find((item) => item._id === _id);

  // handle add to cart
  const handleAddToCart = () => {
    if (existCartItems) {
      const qty = existCartItems.qty + 1;
      dispatch(addToCart(_id, qty));
    } else {
      dispatch(addToCart(_id, 1));
    }
  };
  return (
    <div
      className={
        (path === '/' || path === '/bikes') &&
        'col-lg-3 col-md-4 col-sm-6 col-xsm-12'
      }
    >
      <div className="single-product">
        <div className="product-img">
          <img className="w-100" src={img} alt="" />
          <div className="add-to-fav-and-cart">
            <div className="add-to-fav">
              {/* when path is favorites */}
              {path === '/favorites' && (
                <OverlayTrigger
                  key="left"
                  placement="left"
                  overlay={
                    <Tooltip id="tooltip-left">Remove from favorites</Tooltip>
                  }
                >
                  <button onClick={() => dispatch(addToFavoriteList(_id))}>
                    <BsSuitHeart />
                  </button>
                </OverlayTrigger>
              )}

              {/* when path is '/' or '/bikes' and exit favorite items */}
              {(path === '/' || path === '/bikes') && existFavoriteList && (
                <OverlayTrigger
                  key="left"
                  placement="left"
                  overlay={
                    <Tooltip id="tooltip-left">Browse Favorites</Tooltip>
                  }
                >
                  <button
                    className="favorite-exist exist-item"
                    onClick={() => navigate('/favorites')}
                  >
                    <BsSuitHeartFill />
                  </button>
                </OverlayTrigger>
              )}

              {/* when path is '/' or '/bikes' and not exit favorite items */}
              {(path === '/' || path === '/bikes') && !existFavoriteList && (
                <OverlayTrigger
                  key="left"
                  placement="left"
                  overlay={<Tooltip id="tooltip-left">Add to favorite</Tooltip>}
                >
                  <button onClick={() => dispatch(addToFavoriteList(_id))}>
                    <BsSuitHeart />
                  </button>
                </OverlayTrigger>
              )}
            </div>
            <div className="add-to-cart">
              <OverlayTrigger
                key="left"
                placement="left"
                overlay={<Tooltip id="tooltip-left">Add to cart</Tooltip>}
              >
                <button onClick={handleAddToCart}>
                  <FaCartPlus />
                </button>
              </OverlayTrigger>
            </div>
          </div>
        </div>
        <div className="product-info">
          <div>
            <h5>{name}</h5>
            <p className="pt-0">${price}</p>
          </div>
          <button onClick={() => handleClick(_id)} className="buy-btn">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
