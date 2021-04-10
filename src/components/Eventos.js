import React, {Component} from 'react';

export class EventosES6 extends Component{
	constructor(props){
		super(props);

		this.state = {
			contador: 0
		}

		this.sumar = this.sumar.bind(this);
		this.restar = this.restar.bind(this);
	}

	sumar(e){
		// console.log('Addition');
		this.setState({
			contador: ++this.state.contador
		})
	}

	restar(e){
		// console.log('Substraction');
		this.setState({
			contador: --this.state.contador
		})
	}

	render(){
		return(
				<div>
					<h2>Eventos en componentes de clase ES6</h2>
					<h3>{this.state.contador}</h3>
					<nav>
						<button onClick={this.sumar}>+</button>
						<button onClick={this.restar}>-</button>
					</nav>
				</div>	
			);
	}
}
//Propertie initializer
export class EventosES7 extends Component{
	state = {
		contador: 0
	}
	//Arrow functions
	sumar = (e) => {
		// console.log('Addition');
		this.setState({
			contador: ++this.state.contador
		})
	}

	restar = (e) => {
		// console.log('Substraction');
		this.setState({
			contador: --this.state.contador
		})
	}

	render(){
		return(
				<div>
					<h2>Eventos en componentes de clase ES7</h2>
					<h3>{this.state.contador}</h3>
					<nav>
						<button onClick={this.sumar}>+</button>
						<button onClick={this.restar}>-</button>
					</nav>
				</div>	
			);
	}
}