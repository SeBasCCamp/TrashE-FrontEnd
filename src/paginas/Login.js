import React from "react";
import "../css/estiloLoginRegister.css";
import ImagenLogin from '../img/signinNuevo.jpg'

export default function Login() {
    return (
        <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure>
                            <img src={ImagenLogin} alt="imagenLogin" />
                        </figure>
                    </div>
                    <div className="signin-form">
                        <h2 className="form-title">Ingresa</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="your_name">
                                    <i className="fa-solid fa-user" />
                                </label>
                                <input
                                    type="text"
                                    name="your_name"
                                    id="your_name"
                                    placeholder="Tu Nombre"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass">
                                    <i className="fa-solid fa-lock" />
                                </label>
                                <input
                                    type="password"
                                    name="your_pass"
                                    id="your_pass"
                                    placeholder="Contraseña"
                                />
                            </div>
                            <div className="form-group form-button">
                                <input
                                    type="submit"
                                    name="signin"
                                    id="signin"
                                    className="form-submit"
                                    defaultValue="Ingresar"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}