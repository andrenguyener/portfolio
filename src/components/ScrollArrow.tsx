import { Link } from "react-scroll";
import styled from "styled-components";

import { animations } from "./../themes/styles/abstracts";
import { constants } from "./../utils";

const spinnerSize = 286;

export const ScrollArrow = () => {
    return (
        <ScrollArrowContainer>
            <Link to="projects" smooth={true} duration={450} href="#">
                <CircleSVG>
                    <circle r={spinnerSize / 2 - 1} cx={spinnerSize / 2} cy={spinnerSize / 2} />
                </CircleSVG>
                <Arrow>
                    <svg id="svg-arrow-bottom" viewBox="0 0 20 24">
                        <polygon points="10.4,22.7 19.2,14 18.5,13.3 10.5,21.2 10.5,0.9 9.5,0.9 9.5,21.2 1.5,13.3 0.8,14 9.6,22.7 10,23.1 10,23.1 10,23.1" />
                    </svg>
                </Arrow>
            </Link>
        </ScrollArrowContainer>
    );
};

const Arrow = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    svg {
        display: block;
        margin: 0 auto;
        width: 2rem;
        height: 2rem;
        fill: #fff;
        stroke: #fff;
        stroke-width: 0;
        animation: ${animations.slideInDown} 1s forwards ${constants.LOADING_TIME + 200 + "ms"},
            ${animations.fadeIn} 1s linear ${constants.LOADING_TIME + 200 + "ms"} backwards;
    }
`;

const CircleSVG = styled.svg`
    width: ${spinnerSize + "px"};
    height: 286px;
    view-box: 0 0 286 286;

    circle {
        fill: none;
        stroke: #fff;
        stroke-width: 1;
        stroke-linecap: round;
        stroke-dasharray: calc(3.14 * ${spinnerSize});
        transform-origin: calc(0.5px * ${spinnerSize}) calc(0.5px * ${spinnerSize}) 0;
        transform: rotate(-90deg);
        animation: ${animations.spinner(spinnerSize)} 2s linear
                ${constants.LOADING_TIME + 700 + "ms"} 1 backwards,
            ${animations.fadeIn} 1s linear ${constants.LOADING_TIME + 200 + "ms"} backwards;
    }
`;

const ScrollArrowContainer = styled.div`
    /* position: absolute; */
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    /* right: calc(25% - 2px); */
    /* bottom: 25%; */
    transform: translate(50%, 115%);

    &:hover {
        cursor: pointer;
    }
`;

export default ScrollArrow;
