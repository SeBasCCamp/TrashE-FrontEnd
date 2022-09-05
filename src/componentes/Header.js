import React from "react";
import "../css/estilos.css";
import Background from "../img/fondo.jpg"



const Header = (_) => {
  return (
    <div
      className="bgded overlay padtop"
      style={{ backgroundImage: `url("${Background}")` }}
    >
      <header id="header" className="hoc clear">
        <div id="logo" className="fl_left">
          <h1>
            <a href="index.html">Trash - E</a>
          </h1>
        </div>
        <nav id="mainav" className="fl_right">
          <ul className="clear">
            <li>
              <a href="#">Inicia Sesión</a>
            </li>
          </ul>
        </nav>
      </header>
      <div id="pageintro" className="hoc clear">
        <article>
          <h3 className="heading">Cuida tu Ciudad!</h3>
          <p>Ayudanos a identificar los puntos de mayor desecho, y colabora!</p>
          <footer>
            <ul className="nospace inline pushright">
              <li>
                <a className="btn" href="#">
                  Registrate
                </a>
              </li>
            </ul>
          </footer>
        </article>
      </div>
    </div>
  )
}

export default Header;