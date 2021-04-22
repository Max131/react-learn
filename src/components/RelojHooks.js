import React from 'react';
//import React, {useState, useEffect} from 'react';

function Reloj({hora}){
	return <h3>{hora}</h3>
};

export default function RelojHook(){
	const [hora, setHora] = React.useState(new Date().toLocaleTimeString());
	const [visible, setVisible] = React.useState(false);

	React.useEffect(() => {
		let temporizador;

		if(visible){
			temporizador = setInterval(() => {
				setHora(new Date().toLocaleTimeString());
			}, 1000);
		}
		else{
			clearInterval(temporizador);
 		}

 		return () => {
				console.log('El componente Reloj fue desmontado');
				clearInterval(temporizador);
			}

	},[visible]); //Si hay variable declarada, se actualiza el componente en cada cambio

	return(
			<>
				<h2>Reloj con Hooks</h2>
				{visible&&<Reloj hora={hora} />}
				<button onClick={() => setVisible(true)}>Iniciar</button>
				<button onClick={() => setVisible(false)}>Detener</button>
			</>
		);
}