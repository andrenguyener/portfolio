import { css } from "styled-components";

import { Theme } from "./../../types";

export const typography = (theme: Theme) => {
    return css`
        body {
            color: ${theme.color.white};
            font-family: TradeGothic, Roboto, Arial, Helvetica, sans-serif;
        }

        /* todo */
        /* .section-heading {
      font-size: 1.3rem;
      margin-bottom: 3rem;
      letter-spacing: 0.5px;

      @include respond(tab-port) {
        margin-bottom: 5rem;
      }
    } */

        /* todo */
        /* .link-heading {
      text-decoration: none;
      color: var(--color-white);
      font-size: 1.3rem;
    } */

        p {
            font-size: 1.2rem;
            line-height: 1.6rem;
        }
    `;
};

export default typography;
