
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import "./css/estilos.css"
import Principal from './paginas/Principal';
import UserLayout from "./paginas/UserLayout";



function App() {

  return (

    <div className="App">
      <Router>
        <Routes>
          <Route  path="/" element={<Principal/>}></Route>
          <Route path="user/*" element={<UserLayout />}></Route>
          
        </Routes>
      </Router>
    </div>

  );
}

export default App;
