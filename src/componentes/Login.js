import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css'
import axios from "axios";
import {useState} from 'react';


export default function Login() {

    const [correo, setCorreo] = useState('');
    const [contra, setContra] = useState('');
    //Tomar email
    const cogerCorreo = event => {
        setCorreo(event.target.value);
    
        console.log('Email es:', event.target.value);
    };
    //Tomar contraseña
    const cogerContra = event => {
        setContra(event.target.value);

        console.log('Contraseña es:', event.target.value);
    };
    function SendDataLogin() {
        var config = {
            method: 'post',
            url: `http://157.245.136.111:5000/Auth/logearse?Correo=${correo}&Contrasena=${contra}`,
            headers: { }
          };
          console.log(config.url)
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
        }
    
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
                        
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInputUsername"
                                        placeholder="myusername"
                                        required=""
                                        
                                        onChange={cogerCorreo}
                                        value={correo}
                                    />
                                    <label htmlFor="floatingInputUsername">Ingrese su correo</label>
                                </div>
                                <hr />
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        onChange={cogerContra}
                                        value={contra}
                                    />
                                    <label htmlFor="floatingPassword">Contraseña</label>
                                </div>

                                <div className="d-grid mb-2">
                                    <button onClick={SendDataLogin}
                                        className="btn btn-lg btn-success btn-login fw-bold text-uppercase"
                                    >
                                        Iniciar Sesión
                                    </button>
                                </div>

                                <hr className="my-4" />

                        
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}