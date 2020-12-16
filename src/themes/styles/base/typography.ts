import { css } from "styled-components";

import { Theme } from "./../../types";

export const typography = (theme: Theme) => {
    return css`
        body {
            color: ${theme.color.white};
            font-family: ${theme.font.sans};
        }

        p {
            font-size: ${theme.fontSize.sm};
            line-height: 1.3;
            letter-spacing: 0.08em;
        }
    `;
};

export default typography;
