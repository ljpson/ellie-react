import React, { useState } from 'react';
import useProducts from '../../hooks/use-products';

export default function Products() {

  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({salesOnly: checked});
  const handleChange = () => setChecked((prev) => !prev);


  if(loading) return <p>Loading...</p>;

  if(error) return <p>{error}</p>
  return (
    <>
      <input name="checkBox" type="checkbox" checked={checked && checked} onChange={handleChange}/>
      <label htmlFor='checkBox'>Show Only 🔥 Sale</label>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
