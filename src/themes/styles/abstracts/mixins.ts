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

export const absoluteCenter = css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const linkHeading = css`
    text-decoration: none;
    color: ${(props) => props.theme.color.white};
    font-size: 1.3rem;
`;

export const dash = css`
    position: absolute;
    width: 1rem;
    height: 3px;
    background-color: ${(props) => props.theme.color.white};
    z-index: 1750;
`;

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const flexBetween = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const button = css`
    display: block;
    margin-left: auto;
    margin-right: 2rem;
    padding: 1rem 1rem 0 1rem;
    font-family: inherit;
    font-size: 1.3rem;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.color.gray.base};
    background-color: transparent;
    border: none;
    transform: translateZ(0);
    transition: color 0.3s;

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${(props) => props.theme.color.primary.base};
        transform: scaleX(0);
        transform-origin: 0 50%;
        transition-property: transform;
        transition: all 0.3s ease-out;
    }

    &::after {
        content: "";
        display: block;
        position: relative;
        border-top: 1px solid grey;
        width: 50%;
        margin-top: 0.6rem;
        margin-left: -1rem;
        transition: all 0.3s ease-out;
    }

    &:hover {
        color: ${(props) => props.theme.color.white};
        cursor: pointer;

        &::before {
            transform: scaleX(1);
        }

        &::after {
            width: 100%;
            border-top: ${(props) => ` 1px solid  ${props.theme.color.primary.base}`};
        }
    }
`;

export const hollowBorder = css`
    &:before {
        content: "";
        position: absolute;
        border: ${(props) => `1px solid ${props.theme.color.gray.base}`};
        border-radius: 2px;
        height: 100%;
        width: 100%;

        bottom: -12px;
        left: -12px;

        transition: ${({ theme }) => theme.transition};
    }
`;

export const hollowBorderHover = css`
    &:before {
        opacity: 0.5;
        bottom: -8px;
        left: -8px;
    }
`;

export const initialHidden = css`
    visibility: hidden;
`;

export const initialOpacity = css`
    opacity: 0;
`;

export const initialZIndex = css`
    z-index: -1;
`;

// MEDIA QUERY MANAGER
/*
0 - 480px:       Phone
481-600px:       Phone-landscape
481px — 768px:   Tablet-portrait
769px - 992px:   Tablet-landscape
993px — 1200px:  Small screens
1201px - 1800px: Common - is where our normal styles apply
1801px + :       Big desktop

600 - 900px:    Tablet portrait
900 - 1200px:   Tablet landscape
[1200 - 1800] is where our normal styles apply

$breakpoint arguement choices:
- phone
- phone-land
- tab-port
- tab-land
- small-screen
- big-desktop

ORDER: Base + typography > general layout + grid > page layout > components

1em = 16px
*/

export const respond = (
    breakpoint: "phone" | "phone-land" | "tab-port" | "tab-land" | "small-screen" | "big-desktop",
    content: FlattenSimpleInterpolation
) => {
    switch (breakpoint) {
        case "phone":
            return css`
                @media only screen and (max-width: 480px) {
                    ${content};
                }
            `;
        case "phone-land":
            return css`
                @media only screen and (max-width: 600px) {
                    ${content};
                }
            `;
        case "tab-port":
            return css`
                @media only screen and (max-width: 768px) {
                    ${content};
                }
            `;
        case "tab-land":
            return css`
                @media only screen and (max-width: 1024px) {
                    ${content};
                }
            `;
        case "small-screen":
            return css`
                @media only screen and (max-width: 1200px) {
                    ${content};
                }
            `;
        case "big-desktop":
            return css`
                @media only screen and (min-width: 1800px) {
                    ${content};
                }
            `;
        default:
    }
};

export default {
    dash,
    fullDisplay,
    absoluteCenter,
    linkHeading,
    flexCenter,
    flexBetween,
    respond,
    button,
    hollowBorder,
    hollowBorderHover,
    initialHidden,
    initialOpacity,
    initialZIndex,
};
