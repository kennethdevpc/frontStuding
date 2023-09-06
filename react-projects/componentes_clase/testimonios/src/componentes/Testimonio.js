import React from 'react'; //no es necesario usarlo pero  a versiones anteriores si ( si necesita hook y otras cosas si se usa)
import '../stylesSheets/Testimonio.css';
class Testimonio extends React.Component {
  render() {
    return (
      <div className="contenedor-testimonio">
        <img className="imagen-testimonio" src={require('../images/image1.jpg')} alt=" Foto1" />
        <img
          className="imagen-testimonio"
          src={require(`../images/testimonio-${this.props.imagen}.png`)}
          alt={`${this.props.imagen}`}
        />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">
            <strong>{this.props.nombre}</strong> en {this.props.pais}
          </p>
          <p className="cargo-testimonio">
            {this.props.cargo} en <strong>{this.props.empresa}</strong>
          </p>
          <p className="texto-testimonio">"{this.props.testimonio}"</p>
        </div>
      </div>
    );
  }
}

export { Testimonio };
