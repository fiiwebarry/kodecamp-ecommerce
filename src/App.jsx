
import { Route, Routes } from "react-router-dom";
import './App.css'
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";


function App() {


  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products/:id" element={<Product />} />


    </Routes>
  )
}

export default App
