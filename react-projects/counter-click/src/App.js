import logo from './logo.svg';
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';

function App() {
  const manejarClic = () => {
    console.log('cliiiii');
  };

  const reiniciarContador = () => {
    console.log('cloooooo');
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={freeCodeCampLogo} alt="Logo de freeCodeCamp" />
      </div>

      <div className="contenedor-principal">
        <Contador numClics="6" />

        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton texto="Reiniciar" esBotonDeClic={false} manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
