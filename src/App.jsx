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
import AppLayout from "./layout/applayout";

//Paginas
import Home from "./pages/home";
import Productos from "./pages/productos";
import ProductoDetalle from "./pages/productodetalle";
import Table from "./pages/table";

function App() {
  
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </AppLayout>
  )
}

export default App
