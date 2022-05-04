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
      <Carousel />
      <Main itemCount={itemCount} setCount={setCount} itemPrice={itemPrice} />
    </>
  );
};

export default App;
