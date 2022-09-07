import {Helmet} from "react-helmet";
import './App.css';
import "./css/estilos.css"
import Principal from './paginas/Principal';


function App() {
  return (
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Trash - E</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Icon and Title" />
      </Helmet>
      <Principal />
    </div>
  );
}

export default App;
