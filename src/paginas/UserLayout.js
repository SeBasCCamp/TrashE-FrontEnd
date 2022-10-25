import { Route, Routes } from "react-router-dom";
import Login from "../componentes/Login";
import Register from "../componentes/Register";
import Mapa from "../componentes/Mapa";
import Publicaciones from "../componentes/Publicaciones"
import FromReportes from "../componentes/FromReportes";

function UsuarioLayout() {
    return (
        <>
            <Routes>
                <Route path="user-login" element={<Login />} />
                <Route path="user-register" element={<Register />} />
                <Route exact path="user-map" element={<Mapa />} />
                <Route exact path="/user-publicaciones" element={<Publicaciones />} />
                <Route exact path="/user-reportes" element={<FromReportes />} />
            </Routes>
        </>
    );
}

export default UsuarioLayout;