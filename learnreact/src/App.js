import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import Footer from './components/Footer.js';
import React, { useState } from 'react';
import AddItem from './components/AddItem.js';

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
  const removeIndex = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount)

  }
  const addItem = (name,Price) => {
    let newProductList = [...productList];
    newProductList.push({
      price:Price,
      name:name,
      quantity:0
    })
    setProductList(newProductList);

  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem  addItem={ addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeIndex={removeIndex}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
