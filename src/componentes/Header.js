import React from "react";
import "../css/estilos.css"
import "../css/bootstrap.css"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header id="header" className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h1 className="h1-large">Cuida el medio ambiente y tu ciudad</h1>
                            <Link className="btn-solid-lg page-scroll" to={"user/register"}>
                                Registrate
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}