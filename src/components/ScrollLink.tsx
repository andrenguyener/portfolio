import { gsap } from "gsap";
import React from "react";
import { animateScroll } from "react-scroll";
import styled from "styled-components";

import { useIsBottomInView } from "./../utils";

export const ScrollLink: React.FC = () => {
    const [isReady, setIsReady] = React.useState(false);
    const [isFirstRender, setIsFirstRender] = React.useState(true);
    const isBottom = useIsBottomInView();

    React.useEffect(() => {
        const timeline = gsap.timeline({ delay: 2.5 });
        const label = "together";

        timeline.add(
            gsap.fromTo(
                "#scroll_underline",
                {
                    visibility: "visible",
                    translateY: "100%",
                    opacity: 0,
                },
                {
                    opacity: 1,
                    translateY: "-50%",
                    duration: 0.75,
                    ease: "none",
                }
            ),
            label + "+=1"
        );
        timeline.play();
        setIsReady(true);
    }, []);

    React.useEffect(() => {
        const timeline = gsap.timeline();
        const label = "scroll";
        if (isReady) {
            timeline.set(["#forward", "#backward"], {
                visibility: "visible",
            });
            if (isFirstRender) {
                timeline.delay(2.5);
                if (isBottom === true) {
                    timeline.set(["#forward"], {
                        translateY: "-100%",
                        opacity: 0,
                    });
                    timeline
                        .fromTo(
                            "#backward",
                            {
                                translateY: "100%",
                                opacity: 0,
                            },
                            {
                                translateY: "0",
                                opacity: 1,
                            },
                            label
                        )
                        .play();
                } else if (isBottom === false) {
                    timeline.set(["#backward"], {
                        translateY: "-100%",
                        opacity: 0,
                    });
                    timeline.fromTo(
                        "#forward",
                        {
                            translateY: "100%",
                            opacity: 0,
                        },
                        {
                            translateY: "0%",
                            opacity: 1,
                        },
                        label
                    );
                }
                setIsFirstRender(false);
            } else {
                if (isBottom === true) {
                    timeline
                        .fromTo(
                            "#forward",
                            {
                                translateY: "0%",
                                opacity: 1,
                            },
                            {
                                translateY: "-100%",
                                opacity: 0,
                            },
                            label
                        )
                        .fromTo(
                            "#backward",
                            {
                                translateY: "100%",
                                opacity: 0,
                            },
                            {
                                translateY: "0",
                                opacity: 1,
                            },
                            label
                        )
                        .play();
                } else if (isBottom === false) {
                    timeline
                        .fromTo(
                            "#forward",
                            {
                                translateY: "100%",
                                opacity: 0,
                            },
                            {
                                translateY: "0%",
                                opacity: 1,
                            },
                            label
                        )
                        .fromTo(
                            "#backward",
                            {
                                translateY: "0%",
                                opacity: 1,
                            },
                            {
                                translateY: "-100%",
                                opacity: 0,
                            },
                            label
                        );
                }
            }
        }
    }, [isBottom, isReady]);

    const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        if (isBottom) {
            animateScroll.scrollToTop();
        } else {
            const percent = 15;
            const percentagePx =
                (document.documentElement.scrollHeight - document.documentElement.clientHeight) *
                (percent / 100);
            animateScroll.scrollMore(percentagePx);
        }
    };

    return (
        <Scroll className="button" onClick={onClick}>
            <div className="button" id="forward">
                Scroll
            </div>
            <div className="button" id="backward">
                Back
            </div>
            <ScrollLine id="scroll_underline" />
        </Scroll>
    );
};

const ScrollLine = styled.span`
    width: 50%;
    height: 3px;
    position: absolute;
    background-color: ${(props) => props.theme.color.white};
    bottom: 0px;
    cursor: pointer;
    transition: all 0.4s;
    mix-blend-mode: exclusion;
    transform: translateX(-50%);

    ${({ theme }) => theme.mixins.initialHidden};
    opacity: 0;
`;

const Scroll = styled.div`
    position: fixed;
    z-index: 10;
    transform: translateX(-50%);
    left: 50%;
    margin-bottom: 50px;
    height: 40px;
    width: 100px;
    cursor: pointer;
    color: rgba(237, 237, 237, 1);
    bottom: 0;
    text-align: center;
    font-family: TradeGothic-Bold;
    font-size: 16px;
    line-height: 1.7em;
    letter-spacing: 0.07em;

    #forward {
        ${(props) => props.theme.mixins.absoluteCenter}
        ${({ theme }) => theme.mixins.initialHidden};
    }

    #backward {
        ${(props) => props.theme.mixins.absoluteCenter}
        ${({ theme }) => theme.mixins.initialHidden};
    }

    &:hover {
        ${ScrollLine} {
            height: 70%;
        }
    }
`;

export default ScrollLink;
