import React from 'react';
import Product from './Product.js';

export default function ProductList({ productList, incrementQuantity ,decrementQuantity, removeIndex}) {
  return (
    <>
    <h1>Product List</h1>
    {productList.length > 0 ?
      (productList.map((product, i) => (
        <Product
          key={i}
          product={product}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeIndex={removeIndex}

          index={i}
          
        />
      )) ): <h1>No products in the list..Please add product</h1>}
    </>
  );
}
