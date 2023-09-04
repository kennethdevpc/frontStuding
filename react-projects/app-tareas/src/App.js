import './App.css';
import Tarea from './componentes/Tarea';
import TareaFormulario from './componentes/TareaFormulario';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img src={freeCodeCampLogo} className="freecodecamp-logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <TareaFormulario />
      </div>
    </div>
  );
}

export default App;
