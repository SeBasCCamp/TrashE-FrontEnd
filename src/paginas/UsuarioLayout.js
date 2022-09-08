import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";


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