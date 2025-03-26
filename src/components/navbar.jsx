import { Link } from "react-router-dom";
import { CarritoContext } from "../context/contextcarrito";
import { useContext } from "react";

export default function NavBar() {
    const { carrito } = useContext(CarritoContext);
    return (
        <>
            <div className="w-100  fixed-buttom" style={{ marginLeft: "280px" }}>
                <nav className=" ">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/" className="nav-link active">Inicio</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/productos" className="nav-link">Productos</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto">
                                <li class="nav-item text-end">
                                    🛒 <strong>Carrito ({carrito.length})</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
