import { Route, Routes } from "react-router-dom";
import Login from "../componentes/Login";
import Register from "../componentes/Register";


function UsuarioLayout() {
    return (
        <>
            <Routes>
                <Route path="user-login" element={<Login />} />
                <Route path="user-register" element={<Register />} />
                
            </Routes>
        </>
    );
}

export default UsuarioLayout;