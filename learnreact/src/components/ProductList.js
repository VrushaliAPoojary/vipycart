import React from 'react';
import Product from './Product.js';

export default function ProductList({ productList, incrementQuantity ,decrementQuantity}) {
  return (
    <>
      {productList.map((product, i) => (
        <Product
          key={i}
          product={product}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          index={i}
          
        />
      ))}
    </>
  );
}
