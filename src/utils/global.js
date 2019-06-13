import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
		outline: none;
	}

	html {
		font-size: 62.5%;
		color: white;
		scroll-behavior: smooth;
		overflow-x: hidden;
	}

	body {
		font-size: 1rem;
		--primaryLight: ${props => props.theme.colors.mainLightBlue};
		--primaryDark: ${props => props.theme.colors.mainDarkBlue};
		--customBlack: ${props => props.theme.colors.neroBlack};
		--customWhite: ${props => props.theme.colors.offWhite};
		--regular: ${props => props.theme.fontWeight.regular};
		--medium: ${props => props.theme.fontWeight.medium};
		--semiBold: ${props => props.theme.fontWeight.semiBold};
		--bold: ${props => props.theme.fontWeight.bold};
	}

	button {
		cursor: pointer;
		outline: none;
	}
`;
