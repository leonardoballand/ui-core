export declare class Color {
    a: number;
    b: number;
    g: number;
    r: number;
    constructor(r: number, g: number, b: number, a: number);
    hexValue(withAlpha?: boolean, alpha?: number): string;
    rgb(): string;
    rgba(alpha?: number): string;
    luminanceColor(lightColor?: string, darkColor?: string): Color;
}
export declare const colorForClass: (cls: string, ref?: HTMLElement | null | undefined) => Color;
export declare function parseColor(color: string | null): Color;
