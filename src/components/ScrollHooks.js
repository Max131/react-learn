// import React from 'react';
import React, {useState, useEffect} from 'react';

export default function ScrollHook(){

	const [scrollY, setScrollY] = React.useState(0);

	React.useEffect(() => {
		console.log("Moviendo el scroll");

		const detectarScroll = () => setScrollY(window.pageYOffset);

		window.addEventListener('scroll', detectarScroll);

		return() => window.removeEventListener('scroll', detectarScroll);
	}, [scrollY]); // <==actualización del componente

	React.useEffect(() => {
		console.log('Fase de Montaje');
	}, []); //<==montaje del componente

	React.useEffect(() => {
		console.log('Fase de desmontaje');

		return() => { //<==desmontaje del componente
			console.log('Desmontando componente');
		};
	});

	return(
			<>
				<h2>Hooks - useEffect y ciclo de vida</h2>
				<p>Scroll Y del Navegador {scrollY}px</p>
			</>
		);
}