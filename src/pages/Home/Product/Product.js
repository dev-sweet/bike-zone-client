import React from 'react';
import './Product.css';
import { useNavigate } from 'react-router-dom';
const Product = ({ product }) => {
  const { img, name, price, _id } = product;
  const navigate = useNavigate();
  const handleClick = (id) => {
    const url = `/bikes/${id}`;
    navigate(url);
  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xsm-12">
      <div className="single-product">
        <div className="product-img">
          <img className="w-100" src={img} alt="" />
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
