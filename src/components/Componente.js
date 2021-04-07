import React, {Component} from 'react';

// Componente con clases
// class Componente extends Component{
// 	render(){
// 		return <h2>{this.props.msg}</h2>;
// 	}

// }

// Componente con funciones
function Componente(props){
	return <h2>{props.msg}</h2>;
}

export default Componente;