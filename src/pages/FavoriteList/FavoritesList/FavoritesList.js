import React from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsSuitHeart } from 'react-icons/bs';
import Product from '../../Home/Product/Product';
import './FavoriteList.css';
const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites);
  const { favoriteItems } = favorites;
  console.log(favoriteItems);
  return (
    <>
      <Header />
      {favoriteItems.length === 0 ? (
        <div className="empty-list">
          <div className="empty-icon">
            <BsSuitHeart />
          </div>
          <h4>FAVORITE LIST IS EMPTY.</h4>
          <p>
            You don't have any products in the favorite list yet. <br />
            You will find a lot of interesting products on our "Bike" page.
          </p>
          <Link className="banner-btn" to="/bikes">
            RETURN TO SHOP
          </Link>
        </div>
      ) : (
        <div className="favorite-items py-5">
          <div className="container">
            <div className="favorite-container">
              {favoriteItems.map((product) => (
                <Product key={`favorite${product._id}`} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default FavoritesList;
