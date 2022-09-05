import React from "react";
import ImagenRegister from '../img/signupnuevo.jpg'
import '../css/estiloLoginRegister.css'

const Register = (_) => {
    return (
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Unete al cambio</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name">
                                    <i className="fa-solid fa-user" />
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Tu Nombre"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    <i className="fa-solid fa-envelope" />
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Tu email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass">
                                    <i className="fa-solid fa-lock" />
                                </label>
                                <input
                                    type="password"
                                    name="pass"
                                    id="pass"
                                    placeholder="Contraseña"
                                />
                            </div>
                            <div className="form-group form-button">
                                <input
                                    type="submit"
                                    name="signup"
                                    id="signup"
                                    className="form-submit"
                                    defaultValue="Registrate"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure>
                            <img src={ImagenRegister} alt="sing up image" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;