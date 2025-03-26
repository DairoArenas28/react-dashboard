import { Link } from "react-router-dom";
import { CarritoContext } from "../context/contextcarrito";
import { useContext } from "react";

export default function Sidebar() {
  return (
    <div className="d-flex">
      {/* Sidebar fija */}
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark position-fixed top-0 start-0 vh-100"
        style={{ width: "280px" }}
      >
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4">Sidebar</span>
        </Link>
        <hr />

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li>
            <Link to="/productos" className="nav-link text-white">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/orders" className="nav-link text-white">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link text-white">
              Products
            </Link>
          </li>
          <li>
            <Link to="/customers" className="nav-link text-white">
              Customers
            </Link>
          </li>
        </ul>

        <hr />

        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="User Avatar" width="32" height="32" className="rounded-circle me-2" />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>

      {/* Contenido principal con margen a la derecha de la sidebar */}
      <main className="flex-grow-1 ms-5" style={{ marginLeft: "280px", padding: "20px" }}>
        <h1>Contenido Principal</h1>
        <p>Aquí va el contenido de la página...</p>
      </main>
    </div>
  );
}
