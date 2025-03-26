import { Link } from "react-router-dom";

const productos = [
  { id: 1, nombre: "Bicicleta Montaña", precio: 500 },
  { id: 2, nombre: "Bicicleta Urbana", precio: 400 },
  { id: 3, nombre: "Bicicleta BMX", precio: 350 },
];

function Productos() {
  return (
    <div>
      <h1>🚴 Productos</h1>
      {productos.map(prod => (
        <div key={prod.id}>
          <Link to={`/productos/${prod.id}`}>
            <h2>{prod.nombre}</h2>
          </Link>
          <p>Precio: ${prod.precio}</p>
        </div>
      ))}
    </div>
  );
}

export default Productos;