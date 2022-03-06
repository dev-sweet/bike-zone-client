import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';
import './CartProduct.css';
const CartProduct = ({ product }) => {
  const { name, price, img } = product;
  return (
    <div className="cart-product">
      <div className="cart-product-info">
        <div className="cart-img">
          <img src={img} alt="" />
        </div>
        <div className="cart-desc">
          <p className="cart-name">{name}</p>
          <OverlayTrigger
            key="top"
            placement="right"
            overlay={<Tooltip id="tooltip-right">Remove from cart</Tooltip>}
          >
            <button className="cart-delete">
              <AiOutlineDelete />
            </button>
          </OverlayTrigger>
        </div>
      </div>
      <div className="cart-price">
        <p>${price}</p>
      </div>
      <div className="cart-quantity">
        <button>
          <AiOutlineMinus />
        </button>
        <input type="text" value="1" />
        <button>
          <AiOutlinePlus />
        </button>
      </div>
      <div className="total">
        <p>${price}</p>
      </div>
    </div>
  );
};

export default CartProduct;
