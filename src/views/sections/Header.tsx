import { gsap } from "gsap";
import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { ScrollArrow, Bars } from "./../../components";
import { NavigationContext, useIsTopInView } from "./../../utils";
import { Destructure } from "./../../vendors/destructuration";
import { animationsRefs } from "./Header.animations";

const objToday = new Date();

// const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// const dayOfWeek = weekday[objToday.getDay()];

const domEnder = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];

const dayOfMonth =
    objToday.getDate() < 10
        ? "0" + objToday.getDate() + domEnder[objToday.getDate()]
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

export const Header: React.FC = () => {
    const { isActive } = useContext(NavigationContext);
    const [isReady, setIsReady] = React.useState(false);
    const isTop = useIsTopInView();

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
            .add(titleSlideIn(), "title")
            .add(backgroundFadeIn(), "title-=1")
            .add(dateTimeSlideIn())
            .play();
        setIsReady(true);
    }, []);

    React.useEffect(() => {
        document.querySelector("#header_container")?.addEventListener("mousemove", (_) => {
            // parallaxIt(e, elRefs.background.current, -100);
        });
    }, [isTop]);

    return (
        <Container id="header_container">
            <ContainerBackground ref={elRefs.background} />
            <Bars type="vertical" />
            <Fade />
            {/* <Helix /> */}
            <Destructure />
            <WidthContainer>
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

const ScrollArrowContainer = styled.div`
    position: absolute;
    width: 25rem;
    height: 25rem;

    right: calc(25% - 2px);
    bottom: 10%;
    transform: translate(50%, 50%);

    ${({ theme }) =>
        theme.mixins.respond(
            "tab-port",
            css`
                right: calc(10%);
            `
        )}
`;

const Fade = styled.div`
    position: absolute;
    height: 30rem;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: -2;
    background-image: linear-gradient(to top, rgba(22, 22, 22, 1) 0%, rgba(22, 22, 22, 0) 100%);
`;

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
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    background-image: url("/images/forest-s.jpg");
    background-size: cover;
    background-clip: content-box;
    background-repeat: no-repeat;
    z-index: -2;

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
    position: relative;
`;

export default Header;
