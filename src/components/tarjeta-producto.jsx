import { useState, useEffect } from "react";

function TarjetaProducto() {
    const [enCarrito, setEnCarrito] = useState(false);
    const [productos, setProductos] = useState(null);
    const [valor, setValor] = useState("ditto");

    const handleChange = (e) => {
      setValor(e.target.value.toLowerCase());
    }

    const capitalizar = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${valor}` )
        .then(res => res.json())
        .then(data => setProductos(data))
        .catch(() => setProductos(null));
    }, [valor]);

    return (
      <div className="container mt-4">
          <h1 className="text-center">Lista de Pokémon</h1>
          
          <div className="card p-4 shadow">
              <input 
                  type="text" 
                  className="form-control mb-3"
                  placeholder="Escribe el nombre de un Pokémon..." 
                  value={valor} 
                  onChange={handleChange} 
              />
              {productos ? (
                  <>
                      {productos.forms?.[0]?.name && (
                          <h3>Nombre: {capitalizar(productos.forms[0].name)}</h3>
                      )}
                      <h4 className="text-primary">Habilidad: {capitalizar(productos.abilities[0].ability.name)}</h4>
                    
                      {productos.sprites?.versions?.["generation-iii"]?.["emerald"]?.front_default && (
                          <img 
                            src={productos.sprites.versions["generation-iii"]["emerald"].front_default} 
                            alt="Pokemon" 
                            className="img-fluid mx-auto d-block mt-3"
                            style={{ width: "120px", height: "120px", objectFit: "contain" }} 
                          />
                      )}
                      <h6>Experiencia Base: {productos.base_experience}</h6>
                  </>
              ) : (
                  <p className="text-danger">Cargando o Pokémon no encontrado...</p>
              )}
          </div>
      </div>
  );
}

export default TarjetaProducto;