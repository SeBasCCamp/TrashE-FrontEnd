import React from 'react'
import "../css/estilos2.css"
import { Link } from "react-router-dom";

const FromReportes = () => {
    return (
        <div>
            <form className="form">
                <div className="form__title">Ayudanos con tu reporte</div>
                <p className="form__desc">
                    Con tu reporte estas ayudando a mejorar el medio ambiente.
                </p>
                <div className="form__item">
                    <label htmlFor="direction" className="form__label">
                        Dirección
                    </label>
                    <input
                        type="text"
                        className="form__input"
                        name="direction"
                        id="direction"
                        placeholder="Ingresa la dirección"
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
                        placeholder="Ingresa una pequeña Descripción"
                        defaultValue={""}
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="image" className="form__label">
                        Añade una imagen
                    </label>
                    <input type="file" className="form__input" name="image" id="image" />
                </div>
                <div className="form__item">
                    <Link to={"/"}>
                    <button className="form__btn" type="submit">
                        Publica
                    </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default FromReportes