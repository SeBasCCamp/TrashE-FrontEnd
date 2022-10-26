import { Route, Routes } from "react-router-dom";
import Login from "../componentes/Login";
import Register from "../componentes/Register";
import Mapa from "../componentes/Mapa";
import Publicaciones from "../componentes/Publicaciones"
import FromReportes from "../componentes/FromReportes";


function UserLayout() {
    return (
        <>  
            
            <Routes>
                <Route  path="login" element={<Login />} />
                <Route  path="register" element={<Register />} />
                <Route  path="map" element={<Mapa />} />
                <Route  path="publicaciones" element={<Publicaciones />} />
                <Route  path="reportes" element={<FromReportes />} />
            </Routes>
        </>
    );
}

export default UserLayout;