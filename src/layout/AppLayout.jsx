import Sidebar from "../components/sidebar";
import NavBar from "../components/navbar";

export default function AppLayout ({ children }) {
    return (
        <div className="d-flex layout">
            
            <Sidebar />

            {/* Contenido principal */}
            <main className="content">
                {children}
            </main>
        </div>
    );
};