import { animations, mixins } from "./styles/abstracts";

export type CSSColor = string;

export type FontFamily = string;

export type FontSize = string;

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
    font: {
        sans: FontFamily;
        sansBold: FontFamily;
        mono: FontFamily;
    };
    fontSize: {
        xxs: FontSize;
        xs: FontSize;
        sm: FontSize;
        md: FontSize;
        lg: FontSize;
        xl: FontSize;
        xxl: FontSize;
        heading: FontSize;
    };
    borderRadius: string;
    color: {
        ink: CSSColor;
        fill: CSSColor;
        black: CSSColor;
        white: CSSColor;
        gray: Grayscale;
        primary: PrimaryColors;
        secondary: SecondaryColors;
    };
    transition: string;
    modal: {
        color: CSSColor;
    };
    mixins: typeof mixins;
    animations: typeof animations;
}
