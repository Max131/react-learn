import React, {Component} from 'react';

function EstadoAHijo(props){
	return(
		<div>
			<h3>Hijo: {props.contadorHijo}</h3>
		</div>
	)
}

export default class Estado extends Component{
	constructor(props){
		super(props);
		this.state = {
			contador: 0
		};

		setInterval(() => {
			this.setState({
				contador: this.state.contador +1
			});
		}, 1000)

	}
	render(){
			return <div>
					<h2>El estado</h2>
					<p>Padre: {this.state.contador}</p>
					<EstadoAHijo contadorHijo={this.state.contador}></EstadoAHijo>
			</div>;
	}
}

