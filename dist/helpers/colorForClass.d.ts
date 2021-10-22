export declare class Color {
    a: number;
    b: number;
    g: number;
    r: number;
    constructor(r: number, g: number, b: number, a: number);
    hexValue(alpha?: boolean): string;
    rgb(): string;
    rgba(): string;
}
export declare const colorForClass: (cls: string) => Color;
