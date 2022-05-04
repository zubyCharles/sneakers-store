import React from 'react';
import '../sass/_cart.scss';
import images from '../assets/images';

const Cart = ({ itemCount, setCount, itemPrice, setCart }) => {
  return (
    <div className="cart">
      <div className="header">
        <p>Cart</p>
        <img src={images.CloseIcon} alt="" onClick={() => setCart(false)} />
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
              <img src={images.DeleteIcon} alt="" onClick={() => setCount(0)} />
            </div>
          </div>
          <div className="checkout">
            <button onClick={() => setCount(0)}>Checkout</button>
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
