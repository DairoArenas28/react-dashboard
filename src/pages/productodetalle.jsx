import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/contextcarrito";

const productos = [
  { id: 1, nombre: "Bicicleta Montaña", precio: 500, descripcion: "Para aventuras extremas." },
  { id: 2, nombre: "Bicicleta Urbana", precio: 400, descripcion: "Ideal para la ciudad." },
  { id: 3, nombre: "Bicicleta BMX", precio: 350, descripcion: "Perfecta para trucos y piruetas." },
];

function ProductoDetalle() {
  const { id } = useParams();
  const { agregarAlCarrito } =  useContext(CarritoContext);
  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) return <h1>Producto no encontrado 😢</h1>;

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>Precio: ${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <button onClick={() => agregarAlCarrito(producto)} > Agregar al carrito</button>
    </div>
  );
}

export default ProductoDetalle;
