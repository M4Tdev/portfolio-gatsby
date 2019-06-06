import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
		outline: none;
		color: white;
	}

	html {
		font-size: 62.5%;
	}

	body {
		font-size: 1rem;
		--primaryLight: ${props => props.theme.colors.mainLightBlue};
		--primaryDark: ${props => props.theme.colors.mainDarkBlue};
	}

	button {
		cursor: pointer;
		outline: none;
	}
`;
