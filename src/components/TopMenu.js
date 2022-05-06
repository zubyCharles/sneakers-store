import React, { useState } from 'react';
import '../sass/_topMenu.scss';
import SideBar from './SideBar';
import Cart from './Cart';
import images from '../assets/images';

const TopMenu = ({ itemCount, setCount, itemPrice }) => {
  const [showSideBar, setSideBar] = useState(false);
  const [showCart, setCart] = useState(false);

  const revealSideBar = () => {
    setSideBar(true);

    if (typeof window !== 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
  };

  const hideSideBar = () => {
    setSideBar(false);

    if (typeof window !== 'undefined' && window.document) {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <>
      <div className={showSideBar || showCart ? 'overlay' : null}></div>
      <SideBar sideBar={showSideBar} hideSideBar={hideSideBar} />
      {showCart && (
        <Cart
          itemCount={itemCount}
          setCount={setCount}
          itemPrice={itemPrice}
          setCart={setCart}
        />
      )}
      <div className="menu">
        <div className="menu-container">
          <div className="menuIcon-title">
            <img onClick={revealSideBar} src={images.MenuIcon} alt="" />
            <p>sneakers</p>
          </div>
          <div className="cartIcon-avatar">
            <div className="cart-icon" onClick={() => setCart(!showCart)}>
              <span>{itemCount > 0 ? itemCount : null}</span>
              <img src={images.CartIcon} alt="" />
            </div>
            <img className="avatar" src={images.AvatarImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopMenu;
