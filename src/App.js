import './App.css';
import React, { useState, useEffect } from 'react';
import Products from './components/Products';
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div className="App">
      

     
    </div>
  );
}

export default App;
