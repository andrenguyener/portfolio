import styled, { css } from "styled-components";

type Props = {
    type: "vertical" | "horizontal" | "both";
};

const Bars: React.FC<React.PropsWithChildren<Props>> = ({ type }) => {
    return (
        <BarsContainer>
            {type === "vertical" && (
                <>
                    <BarVerticalBefore id="bars_vertical-before">&nbsp;</BarVerticalBefore>
                    <BarVertical id="bars_vertical">&nbsp;</BarVertical>
                    <BarVerticalAfter id="bars_vertical-after">&nbsp;</BarVerticalAfter>
                </>
            )}
            {type === "horizontal" && (
                <>
                    <BarHorizontalBefore id="bars_horizontal-before">&nbsp;</BarHorizontalBefore>
                    <BarHorizontal id="bars_horizontal">&nbsp;</BarHorizontal>
                    <BarHorizontalAfter id="bars_horizontal-after">&nbsp;</BarHorizontalAfter>
                </>
            )}
            {type === "both" && (
                <>
                    <BarVerticalBefore id="bars_vertical-before">&nbsp;</BarVerticalBefore>
                    <BarVertical id="bars_vertical">&nbsp;</BarVertical>
                    <BarVerticalAfter id="bars_vertical-after">&nbsp;</BarVerticalAfter>
                    <BarHorizontalBefore id="bars_horizontal-before">&nbsp;</BarHorizontalBefore>
                    <BarHorizontal id="bars_horizontal">&nbsp;</BarHorizontal>
                    <BarHorizontalAfter id="bars_horizontal-after">&nbsp;</BarHorizontalAfter>
                </>
            )}
        </BarsContainer>
    );
};

const BarsContainer = styled.div`
    position: relative;
    max-width: 1000px;
`;

const verticalCss = css`
    position: fixed;
    width: 1px;
    height: 100%;
    /* background-color: ${(props) => props.theme.color.primary.base}; */
    background-color: ${(props) => props.theme.color.gray.light_1};
    top: 0;
    z-index: -1;
`;

const horizontalCss = css`
    position: fixed;

    width: 100%;
    height: 1px;
    /* background-color: ${(props) => props.theme.color.primary.base}; */
    background-color: ${(props) => props.theme.color.gray.light_1};
    left: 0;
    z-index: -1;
    opacity: 1;
`;

export const BarVerticalBefore = styled.span`
    ${verticalCss}
    left: calc(25vw);

    ${({ theme }) =>
        theme.mixins.respond(
            "tab-port",
            css`
                left: calc(10vw);
            `
        )}
`;

export const BarVerticalAfter = styled.span`
    ${verticalCss}
    left: calc(75vw);

    ${({ theme }) =>
        theme.mixins.respond(
            "tab-port",
            css`
                left: calc(90vw);
            `
        )}
`;

export const BarVertical = styled.span`
    ${verticalCss}

    left: calc(50vw);
`;

export const BarHorizontalBefore = styled.span`
    ${horizontalCss}

    top: calc(25vh);
`;

export const BarHorizontalAfter = styled.span`
    ${horizontalCss}

    top: calc(75vh);
`;

export const BarHorizontal = styled.span`
    ${horizontalCss}

    top: calc(50vh);
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
