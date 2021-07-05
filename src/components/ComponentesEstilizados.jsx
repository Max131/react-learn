import React from 'react';
import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from 'styled-components';

export default function ComponentesEstilizados(){
	let mainColor = "#db7093",
			mainColorAlpha = "#db709380";

	const setTransitionTime = (time) => `all ${time} ease-in-out`;

	const fadeIn = keyframes`
		0%{
			opacity: 0;
		}
		100%{
			opacity: 1;
		}
	`;

	const MyH3 = styled.h3`
		font-size: 2.5rem;
		margin-top: 1.5rem;
		padding: 2rem;
		text-align: center;
		color: ${({color}) => color || "gold"}; {/*Se desestructuran las props para obtener color */}
		background-color: ${mainColor};
		transition: ${setTransitionTime('0.25s')}; {/*Se llama a una función que regresa los valores por defecto*/}

		animation: ${fadeIn} 2s ease-out; 
		${({isButton}) => isButton && 
			css`
				margin: auto;
				max-width: 50%;
				border-radius: 0.5rem;
				cursor: pointer;
			`}

		&:hover{
			background-color: ${mainColorAlpha};
		}
	`;

	const light = {
		color: '#222',
		bgColor: '#DDD'
	}

	const dark = {
		color: '#DDD',
		bgColor: '#222'
	}

	const Box = styled.div`
		font-size: 1rem;
		line-height: 1.6;
		padding: 1rem;
		margin: 1rem;
		color: ${({theme}) => theme.color};
		background-color: ${({theme}) => theme.bgColor};
		user-select: none;
	`;

	const BoxRounded = styled(Box)`
		border-radius: 0.5rem;
	`;

	const GlobalStyle = createGlobalStyle` //globalStyles Aplica estilos a TODA la página
		h2{
			padding: 2rem;
			background-color: #fff;
			color: #61dafb;
			text-transform: uppercase;
		}
		a{
			color: orangered;
			letter-spacing: 4px;
		}
	`;

	return(
		<>
			<GlobalStyle />
			<h2>Styled Component</h2>
			<MyH3>Componente estilizado</MyH3>
			<MyH3 color="cyan">Componente estilizado 2</MyH3>
			<MyH3 isButton>Maded as button</MyH3>

			<ThemeProvider theme={light}>
				<Box>Lighted Box</Box>
				<BoxRounded>Rounded Box</BoxRounded>
			</ThemeProvider>
			<ThemeProvider theme={dark}>
				<Box>Darked Box</Box>
				<BoxRounded>Rounded Box</BoxRounded>
			</ThemeProvider>
		</>
	);
}