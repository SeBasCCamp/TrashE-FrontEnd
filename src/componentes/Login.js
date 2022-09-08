import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css'


export default function Login() {
    return (
        <div className="containeres">
            <div className="row">
                <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                        <div className="card-img-left d-none d-md-flex">

                        </div>
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-light fs-5">
                                Bienvenido de vuelta!
                            </h5>
                            <form>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInputUsername"
                                        placeholder="myusername"
                                        required=""
                                        autofocus=""
                                    />
                                    <label htmlFor="floatingInputUsername">Ingrese su usuario</label>
                                </div>
                                <hr />
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                    />
                                    <label htmlFor="floatingPassword">Contraseña</label>
                                </div>

                                <div className="d-grid mb-2">
                                    <button
                                        className="btn btn-lg btn-success btn-login fw-bold text-uppercase"
                                        type="submit"
                                    >
                                        Iniciar Sesión
                                    </button>
                                </div>

                                <hr className="my-4" />


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}