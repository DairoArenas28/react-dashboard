import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Componentes
import Saludo from './components/saludo';
import TarjetaProducto from './components/tarjeta-producto';

function App() {

  const productos = [
    {nombre: "Bicicleta Montaña", precio: 500},
    {nombre: "Bicicleta Urbana", precio: 250},
    {nombre: "Bicicleta BMX", precio: 400},
  ]

  return (
    <>
      <Saludo nombre = "Tienda de Dairo"/>

      <div>
        <TarjetaProducto/>
      </div>
    </>
  )
}

export default App
