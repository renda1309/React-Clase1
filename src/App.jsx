import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductsCard from "/src/assets/components/ProductCard.jsx";

function App() {
  return (
    <>
      <h1>Productos</h1>
      <ProductsCard />
    </>
  );
}

export default App;
