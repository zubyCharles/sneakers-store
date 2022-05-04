import React from 'react';
import '../sass/_cart.scss';
import images from '../assets/images';

const Cart = ({ itemCount, setCount, itemPrice }) => {
  return (
    <div className="cart">
      <div className="header">
        <p>Cart</p>
      </div>
      <hr />

      {itemCount > 0 ? (
        <>
          <div className="cart-body">
            <div className="thumbnail">
              <img src={images.Product1} alt="" />
            </div>
            <div className="info-price">
              <p>Autumn Limited Edition...</p>
              <p>
                ${itemPrice}.00 x {itemCount} &nbsp;{' '}
                <span>${itemPrice * itemCount}.00</span>
              </p>
            </div>
            <div className="delete">
              <img
                src={images.DeleteIcon}
                alt=""
                onClick={() => setCount(!itemCount)}
              />
            </div>
          </div>
          <div className="checkout">
            <button onClick={() => setCount(!itemCount)}>Checkout</button>
          </div>
        </>
      ) : (
        <div className="empty">
          <p>Your cart is empty.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
