export interface Theme {
  type: string
  surface?: string
  background?: {
    application?: string
  }
  button?: {
    default: string
    disabled: string
  }
  snackbar: {
    light?: string
    main?: string
    dark?: string
    text?: string
  }
  primary: {
    light?: string
    main: string
    dark?: string
    text?: string
  }
  secondary: {
    light?: string
    main: string
    dark?: string
    text?: string
  }
  info?: {
    light: string
    main: string
    dark: string
    text: string
  }
  success?: {
    light: string
    main: string
    dark: string
    text: string
  }
  warning?: {
    light: string
    main: string
    dark: string
    text: string
  }
  error?: {
    light: string
    main: string
    dark: string
    text: string
  }
  text?: {
    primary: string
    secondary: string
    disabled: string
    default: string
    tertiary: string
  }
  divider?: string
  typography?: {
    fontFamily: string
    fontSize: string
    fontWeightThin: number
    fontWeightLight: number
    fontWeightRegular: number
    fontWeightMedium: number
    fontWeightBold: number
    fontWeightDark: number
    h1?: {
      fontFamily?: string
      fontWeight?: number
      fontSize?: string
      lineHeight?: number
      letterSpacing?: string
    }
    h2?: {
      fontFamily?: string
      fontWeight?: number
      fontSize?: string
      lineHeight?: number
      letterSpacing?: string
    }
    h3?: {
      fontFamily?: string
      fontWeight?: number
      fontSize?: string
      lineHeight?: number
      letterSpacing?: string
    }
    h4?: {
      fontFamily?: string
      fontWeight?: number
      fontSize?: string
      lineHeight?: number
      letterSpacing?: string
    }
    h5?: {
      fontFamily?: string
      fontWeight?: number
      fontSize?: string
      lineHeight?: number
      letterSpacing?: string
    }
    h6?: {
      fontFamily?: string
      fontWeight?: number
      fontSize?: string
      lineHeight?: number
      letterSpacing?: string
    }
    subtitle1?: {
      fontFamily?: string
      fontWeight?: number
      fontSize?: string
      lineHeight?: number
      letterSpacing?: string
    }
    subtitle2?: {
      fontFamily?: string
      fontWeight?: number
      fontSize?: string
      lineHeight?: number
      letterSpacing?: string
    }
    body1?: {
      fontFamily?: string
      fontWeight?: number
      fontSize?: string
      lineHeight?: number
      letterSpacing?: string
    }
    body2?: {
      fontFamily?: string
      fontWeight?: number
      fontSize?: string
      lineHeight?: number
      letterSpacing?: string
    }
    button?: {
      fontFamily?: string
      fontWeight?: number
      fontSize?: string
      lineHeight?: number
      letterSpacing?: string
    }
    caption?: {
      fontFamily?: string
      fontWeight?: number
      fontSize?: string
      lineHeight?: number
      letterSpacing?: string
    }
    overline?: {
      fontFamily?: string
      fontWeight?: number
      fontSize?: string
      lineHeight?: number
      letterSpacing?: string
    }
  }
}
