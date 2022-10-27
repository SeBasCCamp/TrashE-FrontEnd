import React, { useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import "../css/estilosMapa.css"
import "../css/estilonavMap.css"
import { NavLink } from "react-router-dom";
//Funcion enviar punto de reciclaje


const defaultCenter = [-12.029289, -77.0350];
const marc1 = [-12.029289, -77.0357];
const marc2 = [-12.029289, -77.0347];
const marc3 = [-12.029289, -77.0353];
const defaultZoom = 20;

//Añadiendo iconos
const reciclajeIcon = new L.icon({
    iconUrl: require('../img/punto-de-reciclaje.png'),
    iconSize: [40, 45],
    shadowSize: [50, 64],

})
const basuraIcon = new L.icon({
    iconUrl: require('../img/papelera-de-reciclaje.png'),
    iconSize: [40, 45],
    shadowSize: [50, 64],

})
const cuidadoIcon = new L.icon({
    iconUrl: require('../img/peligro.png'),
    iconSize: [27, 32],
    shadowSize: [50, 64],

})

export default function Mapa() {

    const MapContainerRef = useRef();
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

            <div className='app-mapa'>
                <MapContainer ref={MapContainerRef} center={defaultCenter} zoom={defaultZoom}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
                    <Marker position={defaultCenter}>
                        <Tooltip direction='top' opacity={1}><span>Marcador del ejemplo</span></Tooltip>
                        <Popup><span>Popud del marcador de ejemplo</span></Popup>
                    </Marker>

                    <Marker position={marc1} icon={reciclajeIcon}>
                        <Tooltip direction='top' opacity={1}><span>Punto de reciclaje</span></Tooltip>
                        <Popup><span>Esta zona es una zona con puntos de reciclaje</span></Popup>
                    </Marker>

                    <Marker position={marc2} icon={basuraIcon}>
                        <Tooltip direction='top' opacity={1}><span>Punto de basura</span></Tooltip>
                        <Popup><span>Esta zona es una zona tachos</span></Popup>
                    </Marker>

                    <Marker position={marc3} icon={cuidadoIcon}>
                        <Tooltip direction='top' opacity={1}><span>Punto de cuidado</span></Tooltip>
                        <Popup><span>Esta zona es una zona de cuidado</span></Popup>
                    </Marker>
                </MapContainer>
                <div className="sidebar">
                    <h2>Puntos que te pueden ayudar:</h2>
                </div>
            </div>

        </div>

    )
}


