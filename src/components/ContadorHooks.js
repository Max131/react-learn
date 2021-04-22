import React from 'react';
//import React, {useState} from 'react';

export default function ContadorHooks(props){
	// console.log(React.useState());
	const [contador, setContador] = React.useState(0);

	const sumar = () => setContador(contador + 1);

	const restart = () => setContador( contador - 1);

	return(
			<>
				<h2>Hooks - useState</h2>
				<nav>
					<button onClick={sumar}>+</button>
					<button onClick={restart}>-</button>
				</nav>
				<p>Contador de {props.titulo}</p>
				<h3>{contador}</h3>
			</>
		);
}

ContadorHooks.defaultProps = {
	titulo: 'Clicks'
}