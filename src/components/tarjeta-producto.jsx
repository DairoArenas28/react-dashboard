import { useState, useEffect } from "react";

function TarjetaProducto() {
    const [enCarrito, setEnCarrito] = useState(false);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProductos(data));
    }, []);

    return (
        <div>
          <h1>Lista de Productos 🛍️</h1>
          {productos.length === 0 ? (
            <p>Cargando productos...</p>
          ) : (
            productos.map(prod => (
              <div key={prod.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
                <h2>{prod.title}</h2>
                <p>Precio: ${prod.price}</p>
                <img src={prod.image} alt={prod.title} width="100" />
                <hr />
                <p>{prod.description}</p>
              </div>
            ))
          )}
        </div>
    );
}

export default TarjetaProducto;