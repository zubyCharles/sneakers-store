import React from 'react';
import '../sass/_main.scss';
import images from '../assets/images';

const Main = ({ itemCount, setCount, itemPrice }) => {
  return (
    <main>
      <div className="main-container">
        <div className="main-header">
          <p>SNEAKER COMPANY</p>
          <h2>Fall Limited Edition Sneakers</h2>
        </div>
        <div className="main-text">
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className="price-section">
          <div className="new-price">
            <h2>{`$${itemPrice}.00`}</h2>
            <p className="discount">50%</p>
          </div>
          <p className="old-price">$250.00</p>
        </div>
        <div className="buttons">
          <div className="minus-add">
            <button
              className="minus"
              onClick={() => {
                setCount(itemCount - 1);
              }}
              disabled={itemCount < 1}
            >
              <img src={images.MinusIcon} alt="" />
            </button>
            <p>{itemCount < 1 ? null : itemCount}</p>
            <button
              className="add"
              onClick={() => {
                setCount(itemCount + 1);
              }}
              disabled={null}
            >
              <img src={images.PlusIcon} alt="" />
            </button>
          </div>
          <div className="cart-button">
            <button onClick={() => setCount(itemCount < 1 ? 1 : itemCount)}>
              <span>
                <img src={images.CartIcon} alt="" /> &nbsp; Add to cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
