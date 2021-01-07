import { gsap } from "gsap";
import dynamic from "next/dynamic";
import { rgba as _rgba } from "polished";
import React from "react";
import styled, { css } from "styled-components";

import { Logo, ScrollLink, ScrollProgress } from "./../../components";
import Navigation from "./Navigation";

// import SmoothScroll from "./../../vendors/SmoothScroll";

const AnimatedCursor = dynamic(() => import("./../../vendors/AnimatedCursor"), {
    ssr: false,
});

export const Page: React.FC = ({ children }) => {
    const [, setIsReady] = React.useState(false);

    React.useEffect(() => {
        const timeline = gsap.timeline();
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        if (mediaQuery.matches) {
            timeline
                .fromTo(
                    ["#block-1", "#block-4"],
                    { width: "calc(10% - 1px)", zIndex: -5 },
                    { width: 0, ease: "power4.inOut", duration: 1, stagger: 0.4 }
                )
                .fromTo(
                    ["#block-2", "#block-3"],
                    { width: "calc(40% - 1px)" },
                    { width: 0, ease: "power4.inOut", duration: 1, stagger: 0.1, zIndex: -5 },
                    "-=1.1"
                )
                .to("#blocks", { zIndex: -5, opacity: 0, duration: 0 })
                .play();
        } else {
            timeline
                .fromTo(
                    ["#block-1", "#block-2", "#block-3", "#block-4"],
                    { width: "calc(25% - 1px)", zIndex: -5 },
                    { width: 0, ease: "power4.inOut", duration: 1, stagger: 0.1, zIndex: -5 }
                )
                .to("#blocks", { zIndex: -5, opacity: 0, duration: 0 })
                .play();
        }
        setIsReady(true);
        // SmoothScroll(document, 50, 10);
    }, []);

    return (
        <PageContainer className="wow">
            <Logo />
            <Navigation />
            <ScrollProgress />
            <AnimatedCursor
                innerSize={8}
                outerSize={8}
                color="193, 11, 111"
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
            />

            {children}
            <Blocks id="blocks">
                <Block id="block-1" />
                <Block id="block-2" />
                <Block id="block-3" />
                <Block id="block-4" />
            </Blocks>
            <FadeTop />
            <FadeBottom />
            <ScrollLink />
        </PageContainer>
    );
};

const Block = styled.div`
    position: absolute;
    height: 100%;
    background-color: ${(props) => props.theme.color.gray.dark};
    /* background-color: ${(props) => props.theme.color.primary.base}; */
    opacity: 0.2;
    width: calc(25% - 1px);
    top: 0;

    &#block-1 {
        left: calc(0);
        width: calc(25% - 0px);
    }

    &#block-2 {
        left: calc(25% + 1px);
    }

    &#block-3 {
        left: calc(50% + 1px);
    }

    &#block-4 {
        left: calc(75% + 1px);
    }

    ${({ theme }) =>
        theme.mixins.respond(
            "tab-port",
            css`
                &#block-1 {
                    left: calc(0);
                    width: calc(10% - 0px);
                }

                &#block-2 {
                    left: calc(10% + 1px);
                    width: calc(40% - 1px);
                }

                &#block-3 {
                    left: calc(50% + 1px);
                    width: calc(40% - 1px);
                }

                &#block-4 {
                    left: calc(90% + 1px);
                }
            `
        )}
`;

const Blocks = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    z-index: 500000;
`;

const Fade = styled.div`
    content: "";
    display: block;
    height: 10vh;
    width: 100%;
    position: fixed;
    z-index: 0;
    left: 0;
    transition: all 0.8s;
`;

const FadeTop = styled(Fade)`
    opacity: 1;
    top: 0;
    ${({ theme }) => {
        const _css = [];
        _css.push(css`
            background: linear-gradient(
                to bottom,
                ${_rgba(theme.color.gray.dark, 0.8)} 0%,
                ${_rgba(theme.color.gray.dark, 0.4)} 40%,
                ${_rgba(theme.color.gray.dark, 0.1)} 80%,
                ${_rgba(theme.color.gray.dark, 0)} 100%
            );
        `);
        return _css;
    }}
`;

const FadeBottom = styled(Fade)`
    bottom: 0;
    ${({ theme }) => {
        const _css = [];
        _css.push(css`
            background: linear-gradient(
                to top,
                ${_rgba(theme.color.gray.dark, 0.8)} 0%,
                ${_rgba(theme.color.gray.dark, 0.4)} 40%,
                ${_rgba(theme.color.gray.dark, 0.1)} 80%,
                ${_rgba(theme.color.gray.dark, 0)} 100%
            );
        `);
        return _css;
    }}
`;

const PageContainer = styled.div`
    position: relative;
    overflow-x: hidden;
`;

export default Page;
