import React from 'react'; //no es necesario usarlo pero  a versiones anteriores si ( si necesita hook y otras cosas si se usa)
import '../stylesSheets/Testimonio.css';

export function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require('../images/image1.jpg')} alt=" Foto1" />
      <img className="imagen-testimonio" src={require(`../images/testimonio-${props.imagen}.png`)} alt={`${props.imagen}`} />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}
