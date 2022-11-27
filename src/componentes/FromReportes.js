import React from 'react'
import "../css/estilos2.css"
import "../css/estilonavMap.css"
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
//import jwtDecode from 'jwt-decode';

const FromReportes = () => {
    const [direccion, setDirec] = useState('');
    const [descripcion, setDesc] = useState('');
    //Tomar direccion
    const cogerDireccion = event => {
        setDirec(event.target.value);
    
        console.log('Direccion es:', event.target.value);
    };
    //Tomar descripción
    const cogerDescripcion = event => {
        setDesc(event.target.value);

        console.log('Descripción es:', event.target.value);
    };

    function sendDataReporte() {
        var x = localStorage.getItem("Token_provisional");
        var config = {
            method: 'post',
            url: `http://157.245.136.111:5000/PointOfTrash?título=${direccion}&descripción=${descripcion}`,
            headers: { 
                'Authorization' : "Bearer" + " " + x
            }
          };
          console.log(config.url)
          axios(config)
          .then(function(response) {
            /*
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
            */
         })
          .catch(function (error) {
            console.log(error);
          });
        }
    return (
        <div>
            <nav>

                <h2>Trash - E</h2>

                <ul>
                    <li>
                        <NavLink to={"/user/map"}>Mapa</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/user/publicaciones"}>Reportes</NavLink>
                    </li>
                </ul>
            </nav>
            
                <div className="form__title">Ayudanos con tu reporte</div>
                <p className="form__desc">
                    Con tu reporte estas ayudando a mejorar el medio ambiente.
                </p>
                <div className="form__item">
                    <label htmlFor="direction"  className="form__label">
                        Dirección
                    </label>
                    <input
                        type="text"
                        className="form__input"
                        name="direction"
                        id="direction"
                        placeholder="Ingresa la dirección"
                        onChange={cogerDireccion}
                        value={direccion}
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="description" className="form__label">
                        Descripción
                    </label>
                    <textarea
                        maxLength={500}
                        className="form__input"
                        name="description"
                        id="description"
                        placeholder="Ingresa una pequeña descripción(500)"
                        onChange={cogerDescripcion}
                        value={descripcion}
                    />
                </div>
                <div className="form__item">
                        <button onClick={sendDataReporte} className="form__btn" >
                            Publica
                        </button>
                </div>
           
        </div>
    )
}

export default FromReportes