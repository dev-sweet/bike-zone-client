import React from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';
import './CartProduct.css';

const CartProduct = ({ product, handleDelete, handleUpdateCart }) => {
  const { _id, name, price, img, qty } = product;

  // handle increment quantity
  const handleIncrement = () => {
    if (qty < 5) {
      handleUpdateCart(_id, qty + 1);
    }
  };
  // handle decrement quantity
  const handleDecrement = () => {
    if (qty > 1) {
      handleUpdateCart(_id, qty - 1);
    }
  };
  return (
    <div className="cart-product">
      <div className="cart-product-info">
        <div className="cart-img">
          <Link to={`/bikes/${_id}`}>
            <img src={img} alt="" />
          </Link>
        </div>
        <div className="cart-desc">
          <Link className="cart-name" to={`/bikes/${_id}`}>
            {name}
          </Link>
          <OverlayTrigger
            key="top"
            placement="right"
            overlay={<Tooltip id="tooltip-right">Remove from cart</Tooltip>}
          >
            <button onClick={() => handleDelete(_id)} className="cart-delete">
              <AiOutlineDelete />
            </button>
          </OverlayTrigger>
        </div>
      </div>
      <div className="cart-price">
        <p>${price}</p>
      </div>
      <div className="cart-quantity">
        <button onClick={handleDecrement}>
          <AiOutlineMinus />
        </button>
        <input type="text" value={qty} disabled />
        <button onClick={handleIncrement}>
          <AiOutlinePlus />
        </button>
      </div>
      <div className="total">
        <p>${qty * price}</p>
      </div>
    </div>
  );
};

export default CartProduct;
