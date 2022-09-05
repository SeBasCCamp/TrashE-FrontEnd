import React from "react";
import "../css/estilos.css"

const Main_Tarjetas = (_) => {
    return (
        <div className="wrapper row3">
            <main className="hoc container clear">
                <section id="services">
                    <div className="sectiontitle">
                        <p className="nospace font-xs">¿Qué es lo que puedes hacer?</p>
                        <h6 className="heading">Ayuda a tu comunidad</h6>
                    </div>
                    <ul className="nospace group grid-3">
                        <li className="one_third">
                            <article>
                                <a href="#">
                                    <i className="fa-recycle fa-fw fas" />
                                </a>
                                <h6 className="heading">Reciclaje</h6>
                                <p>Mira y acércate a los puntos de reciclaje, colabora a que exista menos basura.</p>
                            </article>
                        </li>
                        <li className="one_third">
                            <article>
                                <a href="#">
                                    <i className="fa-tree fa-fw fas" />
                                </a>
                                <h6 className="heading">Áreas verdes</h6>
                                <p>Colabora en el crecimiento de areas verdes.</p>
                            </article>
                        </li>
                        <li className="one_third">
                            <article>
                                <a href="#">
                                    <i className="fa-truck fa-fw fas" />
                                </a>
                                <h6 className="heading">Recogo</h6>
                                <p>Reporta zonas de alta contaminación, para tomar medidas.</p>
                            </article>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    )
}

export default Main_Tarjetas;