import { Theme } from './theme'

export const lightTheme: Theme = {
  surface: '#ffffff',
  background: {
    application: '#fafafa',
  },
  button: {
    default: '#bbb',
    disabled: '#ddd',
  },
  snackbar: {
    light: '#ffffff',
    main: '#333333',
    dark: '#38A3E0',
    text: '#FFFFFF',
  },
  type: 'light',
  primary: {
    light: '#c4d600',
    main: '#86BB24',
    dark: '#036a37',
    text: '#FFFFFF',
  },
  secondary: {
    light: '#61b4e4',
    main: '#00a3e0',
    dark: '#0076a7',
    text: '#FFFFFF',
  },
  info: {
    light: '#62efff',
    main: '#00bcd4',
    dark: '#008ba3',
    text: '#FFFFFF',
  },
  success: {
    light: '#b9ee5a',
    main: '#86bb24',
    dark: '#548b00',
    text: '#FFFFFF',
  },
  error: {
    light: '#ff7961',
    main: '#f44336',
    dark: '#ba000d',
    text: '#FFFFFF',
  },
  warning: {
    light: '#ffc947',
    main: '#F39100',
    dark: '#c66900',
    text: '#FFFFFF',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    tertiary: 'rgba(255, 255, 255, 0.40)',
    disabled: 'rgba(0, 0, 0, 0.28)',
    default: 'rgba(0, 0, 0, 1)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  typography: {
    fontFamily: "'Open sans', sans-serif",
    fontSize: '14px',
    fontWeightThin: 100,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    fontWeightDark: 900,
    h1: {
      fontSize: '6rem',
      fontWeight: 300,
    },
    h2: {
      fontSize: '3.75rem',
      fontWeight: 300,
    },
    h3: {
      fontSize: '3rem',
      fontWeight: 400,
    },
    h4: {
      fontSize: '2.125rem',
      fontWeight: 400,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },
    overline: {
      fontSize: '0.625rem',
      fontWeight: 400,
    },
  },
}

export default lightTheme
