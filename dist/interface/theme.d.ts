export interface Theme {
    type: string;
    surface?: string;
    primary: {
        light?: string;
        main: string;
        dark?: string;
        text?: string;
    };
    secondary: {
        light?: string;
        main: string;
        dark?: string;
        text?: string;
    };
    info?: {
        light: string;
        main: string;
        dark: string;
        text: string;
    };
    success?: {
        light: string;
        main: string;
        dark: string;
        text: string;
    };
    warning?: {
        light: string;
        main: string;
        dark: string;
        text: string;
    };
    error?: {
        light: string;
        main: string;
        dark: string;
        text: string;
    };
    text?: {
        primary: string;
        secondary: string;
        disabled: string;
    };
    divider?: string;
    typography?: {
        fontFamily: string;
        fontSize: string;
        fontWeightThin: number;
        fontWeightLight: number;
        fontWeightRegular: number;
        fontWeightMedium: number;
        fontWeightBold: number;
        fontWeightDark: number;
    };
}
