import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/register.css'
import {useState} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";






const Register = (_) => {
   
    const [usuario, setUsuario] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState('');
    const [correo, setCorreo] = useState('');
    const [contra, setContra] = useState('');
    function SendDataRegistro() {
        console.log("el usuario enviado a la api: " + usuario )
        console.log("el usuario enviado a la api: " + apellido )
        console.log("el usuario enviado a la api: " + dni )
        console.log("el usuario enviado a la api: " + correo )
        console.log("el usuario enviado a la api: " + contra )
        var config = {
            method: 'post',
            url: `http://157.245.136.111:5000/Auth/CrearCuenta?Nombre=${usuario}&Apellidos=${apellido}&DNI=${dni}&Correo=${correo}&Contrasena=${contra}`,
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
    //Tomar Usuario
    const cogerUsuario = event => {
      setUsuario(event.target.value);
  
      console.log('Usuario es:', event.target.value);
    };
     //Tomar Apellido
     const cogerApellido = event => {
        setApellido(event.target.value);

        console.log('Apellido es:', event.target.value);
    };
     //Tomar DNI
     const cogerDni = event => {
        setDni(event.target.value);
    
        console.log('DNI es:', event.target.value);
    };
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
                                        id="floatingInputName"
                                        placeholder="name"
                                        required=""
                                        autofocus=""
                                        onChange={cogerUsuario}
                                        value={usuario}
                                    />
                                    <label htmlFor="floatingInputName">Nombre</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInputApellido"
                                        placeholder="apellido"
                                        required=""
                                        autofocus=""
                                        onChange={cogerApellido}
                                        value={apellido}
                                        
                                    />
                                    <label htmlFor="floatingInputName">Apellido</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInputDNI"
                                        placeholder="dni"
                                        required=""
                                        autofocus=""
                                        onChange={cogerDni}
                                        value={dni}
                                        
                                    />
                                    <label htmlFor="floatingInputName">DNI</label>
                                </div>
                            
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                    
                                        className="form-control"
                                        id="floatingInputEmail"
                                        placeholder="name@example.com"
                                        onChange={cogerCorreo}
                                        value={correo}
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
                                    <Link to={"/"}>
                                    <button onClick={SendDataRegistro} 
                                        className="btn btn-lg btn-success btn-login fw-bold text-uppercase"
                                       
                                    >
                                        Registrate
                                    </button>
                                    </Link>
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