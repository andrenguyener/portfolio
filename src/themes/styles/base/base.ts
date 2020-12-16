import { css } from "styled-components";

import { Theme } from "./../../types";

export const base = (theme: Theme) => {
    return css`
        *,
        *::after,
        *::before {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
        }

        ::-webkit-scrollbar {
            /* remove scrollbar space */
            width: 2px;
            /* width: 0px;  */
            background: transparent; /* optional: just make scrollbar invisible */
        }

        ::-webkit-scrollbar-track {
            /* width: 10px; */
            /* background: #eb2f64; */
        }

        ::-webkit-scrollbar-thumb {
            /* background-color: ${theme.color.white}; */
            /* border-radius: 3px; */
        }

        html,
        body {
            min-height: 100%;
        }

        /* Todo decide if this should be used for UX */
        /* cursor: none; */

        html {
            /* This defines what 1rem is */
            /* font-size: 62.5%; 1 rem = 10px; 10px/16px = 62.5% */
            overflow: scroll;
            overflow-x: hidden;

            &.modal_open {
                overflow: hidden;
            }
        }

        body {
            background-color: ${theme.color.gray.dark};
            box-sizing: border-box;
            background-image: linear-gradient(
                to bottom,
                ${theme.color.gray.dark},
                ${theme.color.gray.dark} 100vh,
                ${theme.color.gray.light_2}
            );
            /* background-color: ${theme.color.gray.dark}; */
            background-size: cover;
            background-repeat: no-repeat;
        }

        ::selection {
            background-color: ${theme.color.primary.base};
            color: ${theme.color.white};
        }
    `;
};

export default base;
