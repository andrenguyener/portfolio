import { rgba } from "polished";

import { Theme } from "./types";

// Todo make component theme easily configurable
export const defaultTheme: Theme = {
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
            light_2: "#35353f",
            light_3: "#e8e8e8",
        },
    },
    modal: {
        color: rgba("#161616", 0.95),
    },
};

export default defaultTheme;
