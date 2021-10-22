import * as React from 'react';
import { CoreComponentProps } from './withCoreComponent';
import { Theme } from '../interface';
export declare function changeRootValues(obj: Theme, path?: string): void;
export declare const ThemeContext: React.Context<Theme>;
export interface ThemeProviderProps extends CoreComponentProps {
    theme: Theme;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
declare const _default: React.FC<ThemeProviderProps & React.HTMLAttributes<HTMLElement> & CoreComponentProps>;
export default _default;
