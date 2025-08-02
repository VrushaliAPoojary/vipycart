import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import Footer from './components/Footer.js';
import React, { useState } from 'react';

function App() {
  const initialProducts = [
    {
      price: 1000,
      name: "Product 1",
      quantity: 0
    },
    {
      price: 100,
      name: "Product 2",
      quantity: 0
    },
    {
      price: 10,
      name: "Product 3",
      quantity: 0
    }
  ];

  const [productList, setProductList] = useState(initialProducts);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity > 0 ? newProductList[index].quantity-- : (newProductList[index].quantity = 0);
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5"> 
        <ProductList 
          productList={productList} 
          incrementQuantity={incrementQuantity} 
          decrementQuantity={decrementQuantity}
        />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
