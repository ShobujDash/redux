import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Products.module.css';
import {fetchAsync} from './productsSlice';

export function Products() {
  const dispatch = useDispatch();


  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(fetchAsync())}
        >
          fetch Products
        </button>
        <div class="card">
          <img src="jeans3.jpg" alt="Denim Jeans" style="width:100%" />
          <h1>Tailored Jeans</h1>
          <p class="price">$19.99</p>
          <p>Some text about the jeans..</p>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
}
