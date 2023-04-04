import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      <h2>***테스트 타이틀***</h2>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}
