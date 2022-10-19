import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/register.css'
import {useState} from 'react';
import axios from "axios";



const Register = (_) => {
    const [usuario, setUsuario] = useState('');
    const [contra, setContra] = useState('');
    function SendDataRegistro() {
        var config = {
            method: 'post',
            url: `http://157.245.136.111:5000/Auth/CrearCuenta?Nombre=${usuario}&Correo=hoea@unicom.ai&Contrasena=${contra}&DNI=76208176&Apellidos=meza`,
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    //Tomar usuario
    const cogerUsuario = event => {
      setUsuario(event.target.value);
  
      console.log('Usuario es:', event.target.value);
    };
    
    //Tomar contraseña
    const cogerContra = event => {
      setContra(event.target.value);
  
      console.log('Contraseña es:', event.target.value);
    };
    return (
        <div className="containeres">
            <div className="row">
                <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                        <div className="card-img-left d-none d-md-flex">

                        </div>
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-light fs-5">
                                Registrate
                            </h5>
                            
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInputUsername"
                                        placeholder="myusername"
                                        required=""
                                        autofocus=""
                                        onChange={cogerUsuario}
                                        value={usuario}
                                    />
                                    <label htmlFor="floatingInputUsername">Usuario</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                    
                                        className="form-control"
                                        id="floatingInputEmail"
                                        placeholder="name@example.com"
                                    />
                                    <label htmlFor="floatingInputEmail">Correo</label>
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
                                    <button onClick={SendDataRegistro}
                                        className="btn btn-lg btn-success btn-login fw-bold text-uppercase"
                                       
                                    >
                                        Register
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

export default Register;