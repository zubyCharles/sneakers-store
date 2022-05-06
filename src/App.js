import React, { useState } from 'react';
import TopMenu from './components/TopMenu';
import Carousel from './components/Carousel';
import Main from './components/Main';
import './App.scss';

const App = () => {
  const [itemCount, setCount] = useState(0);
  const [itemPrice] = useState(125);
  return (
    <>
      <TopMenu
        itemCount={itemCount}
        setCount={setCount}
        itemPrice={itemPrice}
      />
      <div className="carousel-main">
        <Carousel />
        <Main itemCount={itemCount} setCount={setCount} itemPrice={itemPrice} />
      </div>
    </>
  );
};

export default App;
