import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components";

import { ScrollArrow } from "./../../components";
import { animations, mixins } from "./../../themes/styles/abstracts";
import { NavigationContext, useIsPageLoaded } from "./../../utils";

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

export const Header: React.FC = () => {
    const { isActive } = useContext(NavigationContext);
    // Todo abstract to common util?
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        // Todo not working
        <CSSTransition in={loaded} timeout={3500} classNames="header__container">
            <Container key={"meow"} navActive={isActive}>
                <Title navActive={isActive}>
                    <Main>Andre Nguyen</Main>
                    <Sub>
                        <span>A user-centric software engineer</span>
                        <span>that brings to life</span>
                        <span>innovative ideas and solutions</span>
                    </Sub>
                </Title>
                <DateContainer>
                    <HorizontalBar>&nbsp;</HorizontalBar>
                    <DateTime navActive={isActive}>{today}</DateTime>
                </DateContainer>
                <ScrollArrowContainer>
                    <ScrollArrow />
                </ScrollArrowContainer>
                <Fade />
            </Container>
        </CSSTransition>
    );
};

const ScrollArrowContainer = styled.div`
    position: absolute;
    width: 25rem;
    height: 25rem;

    right: calc(25% - 2px);
    bottom: 25%;
`;

const Fade = styled.div`
    position: absolute;
    height: 30rem;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-image: linear-gradient(to top, rgba(22, 22, 22, 1) 0%, rgba(22, 22, 22, 0) 100%);
`;

const DateTime = styled.p<{ navActive: boolean }>`
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.color.gray.base};
    font-size: 0.5em;

    ${(props) => {
        const s = [];
        if (props.navActive) {
            s.push(css`
                animation: ${animations.slideOutUp} 0.5s forwards, ${animations.fadeOut} 0.5s linear;
            `);
        } else {
            s.push(css`
                animation: ${animations.slideInDown} 0.5s linear, ${animations.fadeIn} 0.5s linear;
            `);
        }
        return s;
    }}
`;

const HorizontalBar = styled.span`
    ${mixins.dash}

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

    ${mixins.respond(
        "phone",
        css`
            top: 75vh;
        `
    )}
`;

const Sub = styled.h2`
    span {
        display: block;
    }

    font-size: 2rem;
    letter-spacing: 0.6px;
    overflow: hidden;
    animation: ${animations.slideInUp} 1s forwards;

    ${mixins.respond(
        "phone",
        css`
            font-size: 1.7rem;
        `
    )}
`;

const Main = styled.h1`
    font-size: 8rem;
    font-family: TradeGothic-Bold, Roboto-Bold;
    letter-spacing: 3px;
    margin-bottom: 2rem;
    overflow: hidden;
    animation: ${animations.slideInDown} 1s forwards;

    ${mixins.respond(
        "tab-port",
        css`
            font-size: 6rem;
        `
    )}

    ${mixins.respond(
        "phone",
        css`
            font-size: 5rem;
        `
    )}
`;

const Title = styled.div<{ navActive: boolean }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 25%;
    overflow: hidden;

    ${mixins.respond(
        "phone",
        css`
            top: 30%;
            left: 10%;
        `
    )}

    ${(props) => {
        const s = [];
        if (props.navActive) {
            s.push(css`
                ${Main} {
                    animation: ${animations.slideOutUp} 0.5s forwards;
                }

                ${Sub} {
                    animation: ${animations.slideOutDown} 0.5s forwards;
                }
            `);
        }
        return s;
    }}
`;

const Container = styled.header<{ navActive: boolean }>`
    color: ${(props) => props.theme.color.white};

    height: 100vh;
    position: relative;

    &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.1;
        background-image: url("/images/forest-s.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
        animation: ${animations.fadeInHeader} 2s;

        @media only screen and (max-width: 37.5em) {
            background-image: url("/images/forest-xs.jpg");
        }
    }

    &.header__container {
        &-enter {
            ${HorizontalBar} {
                animation: ${animations.slideInLeft} 0.5s linear 0.75s backwards,
                    ${animations.fadeIn} 0.5s linear 0.75s backwards;
            }

            ${DateTime} {
                animation-fill-mode: backwards;
                animation-delay: 2s;
            }
        }

        &-enter-active {
        }

        &-enter-done {
        }
    }
`;

export default Header;
