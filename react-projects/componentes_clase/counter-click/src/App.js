import logo from './logo.svg';
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numClics: 0,
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic() {
    //setNumClics(numClics + 1);

    //forma1:
    // this.setState({
    //   numClics: this.state.numClics + 1,
    // });
    //forma2:
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  }
  reiniciarContador() {
    //setNumClics(0);
    this.setState({
      numClics: 0,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="freecodecamp-logo-contenedor">
          <img className="freecodecamp-logo" src={freeCodeCampLogo} alt="Logo de freeCodeCamp" />
        </div>

        <div className="contenedor-principal">
          <Contador numClics={this.state.numClics} />

          <Boton texto="Clic" esBotonDeClic={true} manejarClic={this.manejarClic} />
          <Boton texto="Reiniciar" esBotonDeClic={false} manejarClic={this.reiniciarContador} />
        </div>
      </div>
    );
  }
}

export default App;
