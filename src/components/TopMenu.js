import React, { useState } from 'react';
import '../sass/_topMenu.scss';
import images from '../assets/images';
import SideBar from './SideBar';
import Cart from './Cart';

const TopMenu = ({ itemCount, setCount, itemPrice }) => {
  const [showSideBar, setSideBar] = useState(false);
  const [showCart, setCart] = useState(false);

  return (
    <>
      <SideBar sideBar={showSideBar} toggleSideBar={setSideBar} />
      {showCart && (
        <Cart itemCount={itemCount} setCount={setCount} itemPrice={itemPrice} />
      )}
      <div className="menu">
        <div className="menu-container">
          <div className="menuIcon-title">
            <img
              onClick={() => {
                setSideBar(!showSideBar);
              }}
              src={images.MenuIcon}
              alt=""
            />
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
