import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddToCart from "./components/AddToCart";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { useContextCustom } from "./context/StateProvider";
const App = () => {
  const { state } = useContextCustom();
  // console.log(state);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/addtocart" element={<AddToCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
