import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import Footer from './components/Footer.js'
function App() {
  const productList = [
    {
      price: 99999,
      name: "Product 1",
      quantity: 0
    },
    {
      price: 9999,
      name: "Product 2",
      quantity: 0
    },
    {
      price: 999,
      name: "Product 3",
      quantity: 0
    }
    
  ]
  return (
    <>
    <Navbar />
    <ProductList productList={productList}/>
   {/* <Footer />*/}
    </>
  );
}

export default App;
