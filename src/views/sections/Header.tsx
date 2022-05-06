import { gsap } from "gsap";
import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { Bars } from "./../../components";
import { tweens } from "./../../themes/styles/abstracts";
import { NavigationContext } from "./../../utils";
import { Destructure } from "./../../vendors/destructuration";
import { animationsRefs } from "./Header.animations";

const objToday = new Date();

// const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// const dayOfWeek = weekday[objToday.getDay()];

const domEnder = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];

const dayOfMonth =
    objToday.getDate() < 10
        ? "0" + objToday.getDate() + domEnder[objToday.getDate()]
        : objToday.getDate() < 20
        ? objToday.getDate() + domEnder[0]
        : objToday.getDate() +
          domEnder[
              parseFloat(("" + objToday.getDate()).substr(("" + objToday.getDate()).length - 1))
          ];

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];

const curMonth = months[objToday.getMonth()];

const curYear = objToday.getFullYear();

const today = `${curMonth} ${dayOfMonth}, ${curYear}`;

const MAX_WIDTH = "2000px";

const {
    backgroundFadeIn,
    dateTimeSlideAway,
    dateTimeSlideIn,
    elRefs,
    titleSlideAway,
    titleSlideIn,
} = animationsRefs();

const timeline = gsap.timeline();

// const parallaxIt = (e, target, movement) => {
//     const container = document.getElementById("header_container");

//     const relX = e.pageX - container?.offsetLeft;
//     const relY = e.pageY - container?.offsetTop;

//     gsap.timeline().to(target, 1, {
//         x: ((relX - container?.clientWidth / 2) / container?.clientWidth) * movement,
//         y: ((relY - container?.clientHeight / 2) / container?.clientHeight) * movement,
//     });
// };

let winsize: undefined | { width: number; height: number };
let mousepos: undefined | { x: number; y: number };

// Map number x from range [a, b] to [c, d]
const map = (x: number, a: number, b: number, c: number, d: number) =>
    ((x - a) * (d - c)) / (b - a) + c;

// Linear interpolation
const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

const calcWinsize = () => {
    return { width: window?.innerWidth, height: window?.innerHeight };
};

const getRandomNumber = (min: number, max: number) =>
    // tslint:disable-next-line:insecure-random
    Math.floor(Math.random() * (max - min + 1) + min);

// Gets the mouse position
const getMousePos = (e: MouseEvent) => {
    let posx = 0;
    let posy = 0;
    if (!e) {
        e = window.event as MouseEvent;
    }
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return { x: posx, y: posy };
};
const invertMovement = !getRandomNumber(0, 3);

const translationVals = { tx: 0, ty: 0 };
const xstart = invertMovement ? getRandomNumber(20, 70) : getRandomNumber(40, 80);
const ystart = invertMovement ? getRandomNumber(10, 60) : getRandomNumber(40, 80);

export const Header: React.FC = () => {
    const { isActive } = useContext(NavigationContext);
    const [isReady, setIsReady] = React.useState(false);
    const [isSmallScreen, setIsSmallScreen] = React.useState<boolean | null>(null);
    // const isTop = useIsTopInView();

    React.useEffect(() => {
        if (isReady) {
            if (isActive) {
                timeline.progress(0).clear();
                timeline.add(titleSlideAway()).add(dateTimeSlideAway()).play();
            } else {
                timeline.progress(1).clear();
                timeline.add(titleSlideIn()).add(dateTimeSlideIn(true), "-=0.5").play();
            }
        }
    }, [isActive]);

    React.useEffect(() => {
        // Calculate the viewport size
        winsize = calcWinsize();
        window.addEventListener("resize", () => (winsize = calcWinsize()));

        mousepos = { x: winsize.width / 2, y: winsize.height / 2 };
        window.addEventListener("mousemove", (ev) => (mousepos = getMousePos(ev)));

        const introTimeline = gsap.timeline({ delay: 1.3 });

        introTimeline.set(
            [
                elRefs.title.main.current,
                elRefs.title.sub.current,
                elRefs.dateTime.current,
                elRefs.horizontalBar.current,
            ],
            { visibility: "visible" }
        );
        introTimeline
            .add(tweens.fadeIn("#destructure", {}, { duration: 1 }), "title")
            .add(titleSlideIn(), "title")
            .add(backgroundFadeIn(), "title-=1")
            .add(dateTimeSlideIn())
            .play();

        setIsSmallScreen(window?.matchMedia?.("(max-width: 768px)")?.matches);
        setIsReady(true);

        return () => {
            window.removeEventListener("resize", () => (winsize = calcWinsize()));
            window.removeEventListener("mousemove", () => (winsize = calcWinsize()));
        };
    }, []);

    React.useEffect(() => {
        if (isSmallScreen !== null) {
            const destructTimeline = gsap.timeline();
            destructTimeline.add(tweens.fadeIn("#destructure", {}, { duration: 4 })).play();
        }
    }, [isSmallScreen]);

    React.useEffect(() => {
        if (isReady && isSmallScreen === false) {
            animateBackground();
        }
    }, [isReady]);

    const animateBackground = () => {
        const render = () => {
            if (window.scrollY <= 300 && mousepos && winsize) {
                translationVals.tx = lerp(
                    translationVals.tx,
                    map(
                        mousepos.x,
                        0,
                        winsize.width,
                        invertMovement ? xstart : -xstart,
                        invertMovement ? -xstart : xstart
                    ),
                    0.04
                );
                translationVals.ty = lerp(
                    translationVals.ty,
                    map(
                        mousepos.y,
                        0,
                        winsize.height,
                        invertMovement ? ystart : -ystart,
                        invertMovement ? -ystart : ystart
                    ),
                    0.04
                );
                gsap.set("#background-image", { x: translationVals.tx, y: translationVals.ty });
            } else {
                translationVals.tx = 0;
                translationVals.ty = 0;
                gsap.set("#background-image", { x: translationVals.tx, y: translationVals.ty });
            }
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
    };

    return (
        <Container id="header_container">
            {/* <div className="grid">
                <div className="grid__item pos-1"> */}
            <ContainerBackground ref={elRefs.background} id="background-image" />
            {/* </div> */}
            {/* </div> */}
            <Bars type="vertical" />
            <Fade id="fade" />
            {/* <Helix /> */}
            <WidthContainer>
                {isSmallScreen !== null && (
                    <Destructure
                        opts={{
                            ...(isSmallScreen && {
                                size: 150,
                                side: 4,
                            }),
                        }}
                    />
                )}
                <Title>
                    <Main ref={elRefs.title.main}>Andre Nguyen</Main>
                    <Sub ref={elRefs.title.sub}>
                        <span>I'm a software engineer based in Seattle, WA</span>
                        <span>specializing in bringing to life cool ideas, websites,</span>
                        <span>applications, and everything in between</span>
                    </Sub>
                </Title>
            </WidthContainer>
            <DateContainer>
                <HorizontalBar ref={elRefs.horizontalBar}>&nbsp;</HorizontalBar>
                <DateTime ref={elRefs.dateTime}>{today}</DateTime>
            </DateContainer>
            {/* <ScrollArrowContainer>
                <ScrollArrow />
            </ScrollArrowContainer> */}
        </Container>
    );
};

// const ScrollArrowContainer = styled.div`
//     position: absolute;
//     width: 25rem;
//     height: 25rem;

//     right: calc(25% - 2px);
//     bottom: 10%;
//     transform: translate(50%, 50%);

//     ${({ theme }) =>
//         theme.mixins.respond(
//             "tab-port",
//             css`
//                 right: calc(10%);
//             `
//         )}
// `;

const Fade = styled.div`
    position: absolute;
    height: 30rem;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: -2;
    background: linear-gradient(to top, #161616, rgba(22, 22, 22, 0));
    /* background: linear-gradient(to top, red, rgba(22, 22, 22, 0)); */
`;
/* background: ${({ theme }) => `linear-gradient(to top, #161616, rgba(22, 22, 22, 0))`}; */
/* background: ${({ theme }) => `linear-gradient(to top, red, rgba(22, 22, 22, 0))`}; */

const DateTime = styled.p`
    ${({ theme }) => theme.mixins.initialHidden};
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.color.gray.base};
    font-size: 0.5em;
    font-family: ${({ theme }) => theme.font.mono};
`;

const HorizontalBar = styled.span`
    ${({ theme }) => theme.mixins.dash};
    ${({ theme }) => theme.mixins.initialHidden};

    position: relative;
    margin-right: 1rem;
`;

const DateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 82vh;
    left: calc(25vw - 0.5rem + 1px);
    overflow: hidden;

    ${({ theme }) =>
        theme.mixins.respond(
            "phone",
            css`
                top: 75vh;
                transform: translateY(-50%);
            `
        )}

    ${({ theme }) =>
        theme.mixins.respond(
            "tab-port",
            css`
                left: calc(10% - 0.5rem + 1px);
            `
        )}
`;

const Sub = styled.h2`
    span {
        display: block;
    }

    ${({ theme }) => theme.mixins.initialHidden};

    font-size: 1.5rem;
    font-weight: normal;
    overflow: hidden;
    margin-right: 10%;
    color: ${({ theme }) => theme.color.gray.base};

    ${({ theme }) =>
        theme.mixins.respond(
            "tab-port",
            css`
                margin-right: 10%;
            `
        )}

    ${({ theme }) =>
        theme.mixins.respond(
            "phone",
            css`
                font-size: 1.4rem;
            `
        )}
`;

const Main = styled.h1`
    font-size: 8rem;

    font-family: ${({ theme }) => theme.font.sansBold};
    letter-spacing: 3px;
    margin-bottom: 2rem;
    overflow: hidden;

    ${({ theme }) => theme.mixins.initialHidden};

    ${({ theme }) =>
        theme.mixins.respond(
            "tab-port",
            css`
                font-size: 6rem;
                margin-right: 10%;
            `
        )}

    ${({ theme }) =>
        theme.mixins.respond(
            "phone",
            css`
                font-size: 5rem;
            `
        )}
`;

const Title = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 25%;
    overflow: hidden;

    ${({ theme }) =>
        theme.mixins.respond(
            "small-screen",
            css`
                left: calc(15%);
                width: 85%;
            `
        )}

    ${({ theme }) =>
        theme.mixins.respond(
            "tab-land",
            css`
                left: 10%;
                width: 90%;
            `
        )}

    ${({ theme }) =>
        theme.mixins.respond(
            "phone",
            css`
                top: 30%;
                left: 10%;
            `
        )}
`;

const ContainerBackground = styled.div`
    position: absolute;
    left: -10%;
    top: -10%;
    width: 120%;
    height: 120%;
    opacity: 0.15;
    background-image: url("/images/forest-s.jpg");
    background-size: cover;
    background-clip: content-box;
    background-repeat: no-repeat;

    z-index: -3;

    ${({ theme }) => theme.mixins.initialHidden};

    @media only screen and (max-width: 37.5em) {
        background-image: url("/images/forest-xs.jpg");
    }
`;

const WidthContainer = styled.div`
    position: absolute;
    max-width: ${MAX_WIDTH};
    width: 100%;
    top: 50%;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);
`;

const Container = styled.header`
    color: ${({ theme }) => theme.color.white};
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;

    .grid {
        pointer-events: none;
        position: absolute;
        width: 120%;
        height: 120%;
        top: -10%;
        left: -10%;
        display: grid;
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: repeat(1, 100%);
        z-index: -3;
    }

    .grid__item {
        position: relative;
    }

    .pos-1 {
        grid-area: 1 / 1 / 1 / 1;
    }

    /* .grid__item-img {
        position: relative;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: 50% 50%;
    } */

    /* .grid--img .grid__item {
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        will-change: transform;

        flex: none;
        width: calc(100% + 100px);
        height: calc(100% + 100px);
        will-change: transform;
    } */

    /* .grid--img .grid__item-img {
        flex: none;
        width: calc(100% + 100px);
        height: calc(100% + 100px);
        will-change: transform;
    } */
`;

export default Header;
