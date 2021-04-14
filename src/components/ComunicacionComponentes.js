import React from 'react';

export default class padre extends React.Component{
	state = {
		contador: 0
	}

	incrementarContador = e =>{
		this.setState({
					contador: ++this.state.contador
				})
	}

	render(){
		return(
			<>
				<h2>Comunicación entre Componentes</h2>
				<p>Contador: <b>{this.state.contador}</b></p>
				<Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo 1" />
				<Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo 2" />
			</>
			);
	}
}

function Hijo(props){
	return (
		<>
			<h3>{props.mensaje}</h3>
			<button onClick={props.incrementarContador}>+</button>
		</>
		);
}