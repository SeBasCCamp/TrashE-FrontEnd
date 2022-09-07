import React from "react";
import "../css/estilos.css"
import "../css/bootstrap.css"

export default function NavFile() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
            <div className="container">
                <a className="navbar-brand logo-text page-scroll" href="index.html">
                    Trash - E
                </a>
                <div
                    className="navbar-collapse offcanvas-collapse"
                    id="navbarsExampleDefault"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#header">
                                Inicio <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#services">
                                Servicios
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#">
                                Inicia Sesión
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}