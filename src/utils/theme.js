const theme = {
  colors: {
    mainLightBlue: '#00B6FF',
    mainDarkBlue: '#2D74E5',
    neroBlack: '#181616',
    offWhite: '#F4F4F4',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  mediaQueries: {
    smallest: 'only screen and (min-width: 25em)',
    small: 'only screen and (min-width: 37.5em)',
    smallMedium: 'only screen and (min-width: 46em)',
    medium: 'only screen and (min-width: 56.25em)',
    large: 'only screen and (min-width: 80em)',
    largest: 'only screen and (min-width: 90em)',
  },
  mixins: {
    link: borderColor =>
      `text-decoration: none; border-bottom: 1px solid ${borderColor}; color: #404d5b; padding: 0.2rem 0.1rem; transition: border-color 0.3s ease, background-color 0.3s ease; &:hover {
        border-bottom: 0.1rem solid rgba(52, 73, 94, 0);
        background-color: rgba(52, 73, 94, 0.1);
      } `,
    selection: (backgroundColor = 'grey', color = 'inherit') => `
        &::selection {
          background-color: ${backgroundColor};
          color: ${color}
        }
      `,
  },
};

export default theme;
