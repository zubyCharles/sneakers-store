import React from 'react';
import '../sass/_sideBar.scss';
import images from '../assets/images';

const SideBar = ({ sideBar, hideSideBar }) => {
  return (
    <div className={`side-bar ${sideBar ? 'active' : null}`}>
      <div className="side-bar-container">
        <div className="close-icon">
          <img onClick={hideSideBar} src={images.CloseIcon} alt="" />
        </div>
        <div className="list">
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
