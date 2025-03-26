import { Routes, Route} from "react-router-dom";
import { useState, useContext } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//Componentes
import Saludo from './components/saludo';
import TarjetaProducto from './components/tarjeta-producto';
import NavBar from "./components/navbar";
import Sidebar from "./components/sidebar";

//Paginas
import Home from "./pages/home";
import Productos from "./pages/productos";
import ProductoDetalle from "./pages/productodetalle";

function App() {
  
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/productos" element={<Productos />}></Route>
        <Route path="/productos/:id" element={<ProductoDetalle />}></Route>
      </Routes>
    
      
    </>
  )
}

export default App
