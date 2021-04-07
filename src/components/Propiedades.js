import React from 'react';
import PropTypes from 'prop-types';

export default function Propiedades(props){
	return(
		<div>
			<h2>{props.porDefecto}</h2>
			<ul>
				<li>{props.cadena}</li>
				<li>{props.numero}</li>
				<li>{props.booleano? "True": "False"}</li>
				<li>{props.arreglo.join(", ")}</li>
				<li>{props.objeto.nombre + ' - ' + props.objeto.mail}</li>
				<li>{props.elementoReact}</li>
				<li>{props.componenteReact}</li>
			</ul>
		</div>
	);
}

Propiedades.defaultProps = {
	porDefecto: "Las Props paps!"	
}

Propiedades.propTypes = {
	numero: PropTypes.number.isRequired
}