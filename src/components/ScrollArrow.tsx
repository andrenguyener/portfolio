import { gsap } from "gsap/dist/gsap";
import React, { useContext } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

import { NavigationContext } from "./../utils";
import { animationsRefs } from "./ScrollArrow.animations";

const { elRefs, scrollArrowEntry, scrollArrowAway, arrowIn } = animationsRefs();

const spinnerSize = 300;

export const ScrollArrow = () => {
    const { isActive } = useContext(NavigationContext);
    const [isReady, setIsReady] = React.useState(false);

    React.useEffect(() => {
        const timeline = gsap.timeline();
        if (isReady) {
            if (isActive) {
                timeline.add(scrollArrowAway(spinnerSize)).play();
            } else {
                timeline.add(arrowIn(spinnerSize)).play();
            }
        }
    }, [isActive]);

    React.useEffect(() => {
        const timeline = gsap.timeline({ delay: 2 });
        timeline.add(scrollArrowEntry(spinnerSize)).play();
        setIsReady(true);
    }, []);

    return (
        <>
            <ScrollArrowContainer>
                <Link to="projects" smooth={true} duration={450} href="#">
                    <CircleSVG id="circleSvg" viewBox="0 0 300 300">
                        <circle
                            id={"circleCircle"}
                            ref={elRefs.circle}
                            r={148}
                            cx={spinnerSize / 2}
                            cy={spinnerSize / 2}
                        />
                    </CircleSVG>
                    <Arrow>
                        <svg ref={elRefs.arrow} id="svg-arrow-bottom" viewBox="0 0 20 24">
                            <polygon points="10.4,22.7 19.2,14 18.5,13.3 10.5,21.2 10.5,0.9 9.5,0.9 9.5,21.2 1.5,13.3 0.8,14 9.6,22.7 10,23.1 10,23.1 10,23.1" />
                        </svg>
                    </Arrow>
                </Link>
            </ScrollArrowContainer>
        </>
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

        ${({ theme }) => theme.mixins.initialHidden};
    }
`;

const CircleSVG = styled.svg`
    overflow: visible;
    height: 100%;
    width: 100%;

    circle {
        fill: none;
        stroke: #fff;
        stroke-width: 1px;
        stroke-linecap: round;
        stroke-dasharray: calc(3.14 * ${spinnerSize});
        transform-origin: calc(0.5px * ${spinnerSize}) calc(0.5px * ${spinnerSize}) 0;
        ${({ theme }) => theme.mixins.initialHidden};
    }
`;

const ScrollArrowContainer = styled.div`
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
    overflow: visible;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &:hover {
        cursor: pointer;
    }
`;

export default ScrollArrow;
