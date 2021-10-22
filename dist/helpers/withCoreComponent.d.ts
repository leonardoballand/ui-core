import * as React from 'react';
export interface CoreComponentProps {
    fgcolor?: string;
    bgcolor?: string;
    elevation?: number;
}
export declare const CoreComponentPropTypes: {
    fgcolor: import("prop-types").Requireable<string>;
    bgcolor: import("prop-types").Requireable<string>;
    elevation: import("prop-types").Requireable<number>;
};
export declare const CoreComponentDefaultProps: {
    fgcolor: string;
    bgcolor: undefined;
    elevation: undefined;
};
export declare const withCoreComponent: <P extends object>(Component: React.ComponentType<P & CoreComponentProps>) => React.FC<P & React.HTMLAttributes<HTMLElement> & CoreComponentProps>;
