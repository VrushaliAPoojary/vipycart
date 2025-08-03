import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import Footer from './components/Footer.js';
import React, { useState } from 'react';

function App() {
  const initialProducts = [
    { price: 1000, name: "Product 1", quantity: 0 },
    { price: 100, name: "Product 2", quantity: 0 },
    { price: 10, name: "Product 3", quantity: 0 }
  ];

  const [productList, setProductList] = useState(initialProducts);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products)=>{
      products.quantity = 0
      setProductList(newProductList);
      setTotalAmount(0)
    })
    
  }

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
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
