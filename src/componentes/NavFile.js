import React from "react";
import "../css/estilos.css"
import "../css/bootstrap.css"
import { Link } from "react-router-dom";





export default function NavFile() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
            <div className="container">
                <a className="navbar-brand logo-text page-scroll" href="/">
                    Trash - E
                </a>
                <div
                    className="navbar-collapse offcanvas-collapse"
                    id="navbarsExampleDefault"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link page-scroll" to={"user/user-login"}>
                                Inicia Sesión
                            </Link>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      
    )
}