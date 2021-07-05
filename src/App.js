import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente.js';
import Card from './components/Card.js';
import Propiedades from './components/Propiedades.js';
import Estado from './components/Estado.js'; //X
import RenderizadoCondicional from './components/RenderizadoCondicional.js';
import RenderizadoElementos from './components/RenderizadoElementos.js';
import {EventosES6, EventosES7} from './components/Eventos.js';
import ComunicacionComponentes from './components/ComunicacionComponentes.js';
import CicloVida from './components/CicloVida.js';
import AjaxApis from './components/AjaxApis.js'; //X
import ContadorHooks from './components/ContadorHooks.js';
import ScrollHooks from './components/ScrollHooks.js';
import RelojHooks from './components/RelojHooks.js'
import AjaxHooks from './components/AjaxHooks.js';
import ComponentesEstilizados from './components/ComponentesEstilizados.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Componente msg="Hello Props" />
        <hr />
        <Card />
        <hr/>
        <Propiedades 
          cadena="Un string" 
          numero={13} 
          booleano={true} 
          arreglo={[1, 2, 3]} 
          objeto={{nombre: "John Doe", mail: "doe@john.com"}}
          elementoReact={<i>Elemento React</i>} 
          componenteReact={
            <Componente msg="desde otro compontente" />
          }
        />
        <hr />
        <Estado />
        <hr />
        <hr />
        <RenderizadoCondicional />
        <hr />
        <RenderizadoElementos />
        <hr />
        <EventosES6 />
        <hr />
        <EventosES7 />
        <hr />
        <ComunicacionComponentes />
        <hr />
        <CicloVida />
        <hr />
        <hr />
        <ContadorHooks titulo="Followers" />
        <hr />
        <ScrollHooks />
        <hr />
        <RelojHooks />
        <hr />
        <AjaxHooks />
        <hr />
        <ComponentesEstilizados />
      </header>
    </div>
  );
}

export default App;
