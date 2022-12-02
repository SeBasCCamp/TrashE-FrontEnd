import React from 'react'
import { Link } from 'react-router-dom'
import "../css/estilos-publi.css"
import { NavLink } from "react-router-dom";
import "../css/estilonavMap.css"
import axios from 'axios';

const Publicaciones = () => {
  
function cargarPuntosReciclaje() {
  
  var Token_provisional = localStorage.getItem("Token_provisional")
  var config = {
    method: 'get',
    url: 'http://157.245.136.111:5000/PointOfTrash',
    headers: { 
      'Authorization': `Bearer ${Token_provisional}`
    }
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    const results = response.data
    console.log(results);
    console.log(results[8]);    
    const resultadoIterados =results.map(function(resultados){
      return resultados.Id
    });

  })
  .catch(function (error) {
    console.log(error);
  });

}
function cerrarSesion() {
  let token = localStorage.getItem('Token_provisional');
  if (token === undefined) {
    alert("No ha iniciado sesión")
    window.location.href = 'http://localhost:3000/user/login'
  } else {
   // Código cuando Storage NO es compatible
   alert("Se ha cerrado sesión correctamente");
    localStorage.removeItem('Token_provisional');
    window.location.href = 'http://localhost:3000/'
  }
  console.log(token)
}
  

  function extraccionArray(indice){
    var Token_provisional = localStorage.getItem("Token_provisional")
    var config = {
      method: 'get',
      url: 'http://157.245.136.111:5000/PointOfTrash',
      headers: { 
        'Authorization': `Bearer ${Token_provisional}`
      }
    };
  
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      const results = response.data
      console.log(results[indice]);
      return results[indice] 
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

cargarPuntosReciclaje();
extraccionArray(8);

  return ( 
    <div>
      <nav>     
                <h2><a href='/'> Trash - E</a></h2>
                <ul>
                    <li>
                        <NavLink to={"/user/map"}>Mapa</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/user/publicaciones"}>Reportes</NavLink>
                    </li>
                  <button onClick={cerrarSesion}>
                    Cerrar sesión
                  </button>
                </ul>
            </nav>
            <iframe id="inlineFrameExample" 
    title="Inline Frame Example"
    width="300"
    height="200"
    src="http://facebook.com">
</iframe>
      
      <div className="btn-container">
        <div className="btn-float">
          <Link className="btn" to={"/user/reportes"}>
            Publica!
          </Link> 
        </div>
      </div>
    </div>
    
  )
}

export default Publicaciones