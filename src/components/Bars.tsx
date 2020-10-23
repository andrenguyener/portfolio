import styled, { css } from "styled-components";

import { mixins } from "./../themes/styles/abstracts";

type Props = {
    type: "vertical" | "horizontal" | "both";
};

const Bars: React.FC<Props> = ({ type }) => {
    return (
        <BarsContainer>
            <Bar type={type !== "both" ? type : undefined}>&nbsp;</Bar>
            {type === "both" && <BarVertical isActive={type === "both"}>&nbsp;</BarVertical>}
            {type === "both" && <BarHorizontal isActive={type === "both"}>&nbsp;</BarHorizontal>}
        </BarsContainer>
    );
};

const BarsContainer = styled.div`
    position: relative;
`;

const verticalCss = css`
    position: fixed;
    left: calc(50vw);

    &,
    &::before,
    &::after {
        width: 1px;
        height: 100%;
        background-color: ${(props) => props.theme.color.gray.light_1};
        top: 0;
        z-index: -1;
        transition: all 0.7s ease-in-out;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
    }

    &::before {
        left: calc(25vw);
        transition-delay: 0.3s;
    }

    &::after {
        left: calc(-25vw);
        transition-delay: 0.4s;
    }

    ${mixins.respond(
        "tab-port",
        css`
            & {
                width: 0px;
            }
        `
    )}
`;

const horizontalCss = css`
    position: fixed;
    top: calc(50vh);

    &,
    &::before,
    &::after {
        transition: all 0.7s ease-in-out;
        width: 100%;
        height: 1px;
        background-color: ${(props) => props.theme.color.gray.light_1};
        left: 0;
        z-index: -1;
        opacity: 1;
    }

    &::before {
        transition-delay: 0.3s;
    }

    &::after {
        transition-delay: 0.5s;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
    }

    &::before {
        top: calc(25vh);
    }

    &::after {
        top: calc(-25vh);
    }
`;

export const Bar = styled.span<{ type?: "vertical" | "horizontal" }>`
    ${(props) => {
        const s = [];
        if (props.type === "vertical") {
            s.push(verticalCss);
        }
        if (props.type === "horizontal") {
            s.push(horizontalCss);
        }
        return s;
    }}
`;

export const BarVertical = styled.span<{ isActive: boolean }>`
    ${(props) => {
        const s = [];
        if (props.isActive) {
            s.push(verticalCss);
        }
        return s;
    }}
`;

export const BarHorizontal = styled.span<{ isActive: boolean }>`
    ${(props) => {
        const s = [];
        if (props.isActive) {
            s.push(horizontalCss);
        }
        return s;
    }}
`;

export const ModalBarsEnter = css`
    opacity: 0;

    ${BarHorizontal} {
        &,
        &::before,
        &::after {
            width: 0;
            opacity: 0;
        }
    }

    ${BarVertical} {
        &,
        &::before,
        &::after {
            height: 0;
            opacity: 0;
        }
    }
`;

export const ModalBarsEnterActive = css`
    opacity: 1;
`;

export const ModalBarsExit = css`
    opacity: 1;

    ${BarVertical} {
        transform: translateY(-100%);
        opacity: 0;
    }

    ${BarHorizontal} {
        transform: translateX(100%);
        opacity: 0;
    }
`;

export const ModalBarsExitActive = css`
    transition: all 0.5s;
    opacity: 0;
`;

export default Bars;
