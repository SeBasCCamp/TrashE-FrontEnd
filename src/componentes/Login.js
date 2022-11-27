import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css'
import axios from "axios";
import {useState} from 'react';
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

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
          .then(function(response) {
            localStorage.setItem("Token_provisional",JSON.stringify(response.data.Token_provisional).replace(/['"]+/g, ''));
            console.log(JSON.stringify(response.data));
            console.log(jwtDecode(response.data.Token_provisional))
                var token_decode = jwtDecode(response.data.Token_provisional) 
                //token_decode = JSON.parse(token_decode)
                if(token_decode.id === undefined){
                    alert("Error de inicio de Sesión, verificar su correo y/o contraseña")
                } 
                else{
                    alert("Login Aceptado")
                }
         })
          .catch(function (error) {
            console.log(error);
          });
        }
    /*
    function validacion() {
        var token_decode = localStorage.getItem("Token_provisional")
                //token_decode = JSON.parse(token_decode)
                if(token_decode.id == undefined){
                    alert("Error de inicio de Sesión, verificar su correo y/o contraseña")
                } 
                else{
                    alert("Login Aceptado")
                }
    }*/

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
<<<<<<< HEAD

                                    <button onClick={SendDataLogin} className="btn btn-lg btn-success btn-login fw-bold text-uppercase">
=======
                                    <button onClick={ () => SendDataLogin()} className="btn btn-lg btn-success btn-login fw-bold text-uppercase">
>>>>>>> ca98dba88dce93a983251924e8007b773582aaaa
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