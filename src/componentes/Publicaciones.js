import React from 'react'
import { Link } from 'react-router-dom'
import "../css/estilos-publi.css"
import { NavLink } from "react-router-dom";
import "../css/estilonavMap.css"
import axios from 'axios';

const Publicaciones = () => {
  //Funcion enviar punto de reciclaje
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

    const results = JSON.stringify(response.data);
    console.log(results);
    const obj = [JSON.parse(results)];
    console.log(obj);
    /*for (const employee of response.data) {
      results.push(
        <div key={employee.Id}>
          <h2>name: {employee.Título}</h2>
          
  
          <hr />
        </div>,
      );


      }*/
    
  })
  .catch(function (error) {
    console.log(error);
  });
}
cargarPuntosReciclaje()
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
      
      <div className="main">
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img alt='a' src="https://e.rpp-noticias.io/normal/2015/12/22/002600_50069.jpg" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Hay mucho desmonte</h2>
                <p className="card_text">
                  Se ve mucha basura enviar a alguien porfacvor
                </p>
                <p className='card_direction'>Av. Javier Prado 298</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
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