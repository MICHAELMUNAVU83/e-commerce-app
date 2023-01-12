import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import EachProduct from "./pages/EachProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  const [products, setProducts] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (!filterQuery) {
          setProducts(data);
        } else {
          setProducts(
            data.filter((product) =>
              product.title.toLowerCase().includes(filterQuery.toLowerCase())
            )
          );
        }
      });
  }, [filterQuery]);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              filterQuery={filterQuery}
              setFilterQuery={setFilterQuery}
            />
          }
        />
        <Route path="/product/:id" element={<EachProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
