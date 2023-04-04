import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
       <h2>*** 상품 목록 ***</h2>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>상품목록 {showProducts ? "닫기" : "보기"}</button>
    </div>
  );
}
