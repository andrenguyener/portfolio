export type CSSColor = string;

export interface PrimaryColors {
    lighter: CSSColor;
    base: CSSColor;
    darker: CSSColor;
}

export interface SecondaryColors {
    base: CSSColor;
}

export interface Grayscale {
    base: CSSColor;
    dark: CSSColor;
    light_1: CSSColor;
    light_2: CSSColor;
    light_3: CSSColor;
}

export interface Theme {
    color: {
        ink: CSSColor;
        fill: CSSColor;
        black: CSSColor;
        white: CSSColor;
        gray: Grayscale;
        primary: PrimaryColors;
        secondary: SecondaryColors;
    };
    modal: {
        color: CSSColor;
    };
}
