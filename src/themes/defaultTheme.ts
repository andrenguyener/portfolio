import { rgba } from "polished";

import { animations, mixins } from "./styles/abstracts";
import { Theme } from "./types";

// Todo make component theme easily configurable
export const defaultTheme: Theme = {
    font: {
        sans: "TradeGothic, Roboto, Arial, Helvetica, sans-serif",
        sansBold: "TradeGothic-Bold, Roboto-Bold",
        mono: "SFMonoRegularWoff",
    },
    borderRadius: "2px",
    fontSize: {
        xxs: "12px",
        xs: "13px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        xxl: "22px",
        heading: "32px",
    },
    color: {
        ink: "#303030",
        fill: "#fff",
        black: "#000000",
        white: "#fff",
        primary: {
            lighter: "#eb2f64",
            base: "#eb2f64",
            darker: "#eb2f64",
        },
        secondary: {
            base: "#55c57a",
        },
        gray: {
            base: "#808080",
            dark: "#161616",
            light_1: "#303030",
            light_2: "#28282f",
            light_3: "#e8e8e8",
        },
    },
    transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
    modal: {
        color: rgba("#161616", 0.95),
    },
    mixins,
    animations,
};

export default defaultTheme;
