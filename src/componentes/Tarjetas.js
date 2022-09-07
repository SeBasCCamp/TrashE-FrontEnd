import React from "react";
import "../css/estilos.css"
import "../css/bootstrap.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecycle, faTree, faTruck } from '@fortawesome/free-solid-svg-icons'

export default function Tarjetas() {
    return (
        <div id="services" className="basic-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="h2-heading">¿Qué es lo que puedes hacer?</h2>
                        <p className="p-heading">
                            Ayuda a tu comunidad para que cada vez haya menos basura en la calle
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="text-box">
                      
                        <FontAwesomeIcon icon={faRecycle} size="5x"/>
                       
                            <h4>RECICLAJE</h4>
                            <p>
                                Mira y acércate a los puntos de reciclaje, colabora a que exista
                                menos basura
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="text-box">
                        <FontAwesomeIcon icon={faTree} size="5x"/>
                            <h4>AREAS VERDES</h4>
                            <p>
                                Colabora en el crecimiento de areas verdes y en el cuidado del  medio ambiente
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="text-box">
                        <FontAwesomeIcon icon={faTruck} size="5x"/>
                            <h4>RECOGO</h4>
                            <p>
                                Reporta zonas de alta contaminación, para tomar medidas en el
                                recogo de estas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}