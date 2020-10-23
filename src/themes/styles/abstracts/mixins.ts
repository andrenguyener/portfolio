import { css, FlattenSimpleInterpolation } from "styled-components";

export const fullDisplay = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    transition: all 0.5s;
`;

export const linkHeading = css`
    text-decoration: none;
    /* todo fix this color */
    color: white;
    font-size: 1.3rem;
`;

export const dash = css`
    position: absolute;
    width: 1rem;
    height: 3px;
    /* todo fix this color */
    background-color: white;
`;

// MEDIA QUERY MANAGER
/*
0 - 600px:      Phone
600 - 900px:    Tablet portrait
900 - 1200px:   Tablet landscape
[1200 - 1800] is where our normal styles apply
1800px + :      Big desktop

$breakpoint arguement choices:
- phone
- tab-port
- tab-land
- big-desktop

ORDER: Base + typography > general layout + grid > page layout > components

1em = 16px
*/

export const respond = (
    breakpoint: "phone" | "tab-port" | "tab-land" | "big-desktop",
    content: FlattenSimpleInterpolation
) => {
    switch (breakpoint) {
        case "phone":
            return css`
                @media only screen and (max-width: 37.5em) {
                    ${content};
                }
                /* 600px */
            `;
        case "tab-port":
            return css`
                @media only screen and (max-width: 56.25em) {
                    ${content};
                }
                /* 900px */
            `;
        case "tab-land":
            return css`
                @media only screen and (max-width: 75em) {
                    ${content};
                }
                /* 1200px */
            `;
        case "big-desktop":
            return css`
                @media only screen and (min-width: 112.5em) {
                    ${content};
                }
                /* 1800 */
            `;
        default:
    }
};

export default { dash, fullDisplay, linkHeading, respond };
