import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";


function App() {

  const [addItem, setAddItem] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Homepage addItem={addItem} setAddItem={setAddItem} />} />
      <Route path="/products/:id" element={<Product addItem={addItem} setAddItem={setAddItem} />} />


    </Routes>
  )
}

export default App
