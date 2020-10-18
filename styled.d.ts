// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      mainLightBlue: string;
      mainDarkBlue: string;
      neroBlack: string;
      offWhite: string;
    };
    fontWeight: {
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
    mediaQueries: {
      smallest: string;
      small: string;
      smallMedium: string;
      medium: string;
      large: string;
      largest: string;
    };
    mixins: {
      link: (borderColor?: string, section?: string) => string;
      selection: (backgroundColor?: string, color?: string) => string;
    };
  }
}
