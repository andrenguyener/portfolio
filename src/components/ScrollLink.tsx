import { gsap } from "gsap";
import React from "react";
import { animateScroll } from "react-scroll";
import styled from "styled-components";

import { tweens } from "./../themes/styles/abstracts";
import { useIsBottomInView } from "./../utils";

export const ScrollLink: React.FC = () => {
    const [, setIsReady] = React.useState(false);
    const isBottom = useIsBottomInView();

    React.useEffect(() => {
        const timeline = gsap.timeline({ delay: 2.5 });
        const label = "together";
        timeline.set("#scroll_underline", {
            transform: "translateX(-50%)",
        });
        timeline.set(["#forward", "#backward", "#scroll_underline"], {
            visibility: "visible",
        });
        timeline.add(
            tweens.fadeIn(["#forward", "#backward"], {}, { opacity: 1, duration: 1 }),
            label
        );
        timeline.add(
            gsap.fromTo(
                "#scroll_underline",
                {
                    transform: "translate(-50%, 100%)",
                },
                { transform: "translate(-50%, -50%)", duration: 1 }
            ),
            label + "+=2"
        );
        timeline.play();
        setIsReady(true);
    }, []);

    React.useEffect(() => {
        const timeline = gsap.timeline();
        const label = "scroll";
        if (isBottom) {
            timeline
                .fromTo(
                    "#forward",
                    {
                        transform: "translate(-50%, -50%)",
                        opacity: 1,
                    },
                    {
                        transform: "translate(-50%, -100%)",
                        opacity: 0,
                    },
                    label
                )
                .fromTo(
                    "#backward",
                    {
                        transform: "translate(-50%, 100%)",
                        opacity: 0,
                    },
                    {
                        transform: "translate(-50%, -50%)",
                        opacity: 1,
                    },
                    label
                )
                .play();
        } else {
            timeline
                .fromTo(
                    "#forward",
                    {
                        transform: "translate(-50%, 100%)",
                        opacity: 0,
                    },
                    {
                        transform: "translate(-50%, -50%)",
                        opacity: 1,
                    },
                    label
                )
                .fromTo(
                    "#backward",
                    {
                        transform: "translate(-50%, -50%)",
                        opacity: 1,
                    },
                    {
                        transform: "translate(-50%, -100%)",
                        opacity: 0,
                    },
                    label
                );
        }
    }, [isBottom]);

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
        <Scroll onClick={onClick}>
            <div id="forward">Scroll</div>
            <div id="backward">Back</div>
            <ScrollLine id="scroll_underline" />
        </Scroll>
    );
};

const ScrollLine = styled.span`
    width: 50%;
    height: 3px;
    position: absolute;
    background-color: ${(props) => props.theme.color.white};
    /* left: 50%; */
    bottom: 0px;
    cursor: pointer;
    transition: all 0.4s;
    ${({ theme }) => theme.mixins.initialHidden};
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
    overflow: hidden;

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
            width: 0%;
        }
    }
`;

export default ScrollLink;
