import { FC } from 'react';
import { ControlledTheme } from './themeProvider';
export interface ThemedComponentProps {
    theme: ControlledTheme;
}
export declare function withThemeProvider<T>(Component: FC<T & ThemedComponentProps>): FC<T>;
export default withThemeProvider;
