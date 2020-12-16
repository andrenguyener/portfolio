import { gsap } from "gsap";
import React from "react";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

import { tweens } from "./../themes/styles/abstracts";
import { useIsTopInView } from "./../utils";

const elRefs = {
    logo: React.createRef<HTMLDivElement>(),
};

const Logo: React.FC = () => {
    const isTop = useIsTopInView();

    const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        scroll.scrollToTop();
    };

    React.useEffect(() => {
        const timeline = gsap.timeline();
        timeline.set(elRefs.logo.current, { visibility: "visible" });
        timeline.add(tweens.fadeIn(elRefs.logo.current, {}, { duration: 3 }));
    }, []);

    return (
        <LogoContainer ref={elRefs.logo} isTop={isTop}>
            <a href="/" onClick={onClick}>
                <Image xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.13 46.9">
                    <Polygon points="61.13 2.23 46.56 2.23 37.74 22.02 44.87 46.9 61.13 2.23" />
                    <Path d="M44.91,46.86H30.17l-1.48-4.78h-13l4.74-11.6h4.7l-1.35-4.36L16.33.09H31.5ZM31.33,45.29H42.82L30.32,1.66H18.41l6.88,24,2,6.38H21.49L18,40.51H29.85Z" />
                    <Polygon points="16.77 0 0 46.08 14.75 46.08 16.86 40.92 21.28 30.11 23.7 24.19 16.77 0" />
                </Image>
            </a>
        </LogoContainer>
    );
};

const Image = styled.svg`
    position: relative;
    height: 100%;
    width: 100%;
    transition: fill 0.2s, opacity 0.5s;
    fill: ${(props) => props.theme.color.white};
    overflow: visible;
`;

const Polygon = styled.polygon`
    transition: all 0.2s;
`;

const Path = styled.path`
    transition: all 0.2s;
`;

const LogoContainer = styled.div<{ isTop: boolean }>`
    position: fixed;
    height: auto;
    width: 6rem;
    top: 3rem;
    left: 3rem;
    z-index: 1;

    ${({ theme }) => theme.mixins.initialHidden};

    ${Image} {
        opacity: ${(props) => (props.isTop ? "0.3" : "1")};
    }

    &:hover {
        ${Polygon} {
            fill: ${(props) => props.theme.color.primary.base};

            &:first-child {
                transform: translateX(5px) translateY(-5px);
            }

            &:last-child {
                transform: translateX(-6px) translateY(5px);
            }
        }
    }
`;

export default Logo;
