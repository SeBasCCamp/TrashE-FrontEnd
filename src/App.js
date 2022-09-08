
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import "./css/estilos.css"
import Principal from './paginas/Principal';


function App() {

  return (

    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Principal/>}></Route>
          
        </Routes>
      </Router>
    </div>

  );
}

export default App;
