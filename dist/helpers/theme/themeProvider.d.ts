import React, { ReactElement } from 'react';
import { Color } from '../colors/colorForClass';
import { Theme } from './theme';
export declare function computeStyle(obj: Theme, path?: string, style?: {}): {};
export interface ControlledTheme extends Theme {
    changeTheme: (theme: Theme, setAsDefault?: boolean) => void;
    colorForClass: (cls: string) => Color;
}
export declare const ThemeContext: React.Context<ControlledTheme | null>;
export interface ThemeProviderProps {
    children: ReactElement;
    theme: Theme;
}
export declare function getDefaultTheme(): ControlledTheme;
export declare function setupDefaultTheme(theme: Theme): void;
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export default ThemeProvider;
