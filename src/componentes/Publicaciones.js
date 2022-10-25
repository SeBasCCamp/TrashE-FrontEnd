import React from 'react'
import "../css/estilos-publi.css"
const Publicaciones = () => {
  return (
    <div>
      

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
                <p>Av. Javier Prado 298</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="btn-container">
        <div className="btn-float">
          <a className="btn" href="/">
            Publica!
          </a>
        </div>
      </div>
    </div>
  )
}

export default Publicaciones