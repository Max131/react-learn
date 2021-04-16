import React from 'react';

class Reloj extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return <h3>{this.props.hora}</h3>
	}

	componentWillUnmount(){
		console.log(3, "El componenten ha sido eliminado del DOM");
	}
}

export default class CicloVida extends React.Component{
	constructor(props){
		super(props);
		// console.clear();
		console.log(0, "El componente se inicializa, aún no está en el DOM");

		this.state = {
			hora: new Date().toLocaleTimeString(),
			visible: false
		}

		this.temporizador = null;

	}

	componentDidMount(){
		console.log(1, "El componente ya se encuentra en el DOM");
	}

	componentDidUpdate(prevProps, prevState){
		console.log(2, "El estado o las props han cambiado");
		console.log(prevProps);
		console.log(prevState);
	}

	iniciar = () =>{
		this.tictac();
		this.setState({
			visible: true
		})
	}

	detener = () =>{
		clearInterval(this.temporizador);
		this.setState({
			visible: false
		})
	}

	tictac = () =>{
		this.temporizador = setInterval(() => {
			this.setState({
				hora: new Date().toLocaleTimeString()
			})
		}, 1000);
	}

	render(){
		console.log(4, "El componente se dibuja o redibuja");
		return(
			<>
				<h2>Ciclo de vida de los componentes</h2>
				{this.state.visible && <Reloj hora={this.state.hora} />}
				<button onClick={this.iniciar}>Iniciar</button>
				<button onClick={this.detener}>Detener</button>
			</>
		)
	}
}