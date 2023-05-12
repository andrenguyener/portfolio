import React from "react";

import { Element } from "react-scroll";
import styled from "styled-components";

import { Dash } from "./../components";
import { navLinks } from "./../utils/constants";
import {
    About,
    Contact,
    Footer,
    Header,
    Jobs,
    OtherProjects,
    Projects,
    MidBreakSection,
    AbstractSlider,
} from "./sections";

export const Home = () => {
    return (
        <HomeContainer>
            <Header />
            <MidBreakSection />
            <Dash location="right" />
            <Element name={navLinks.projects}>
                <Projects />
            </Element>
            <Dash location="center" />
            <OtherProjects />
            <AbstractSlider />
            <Dash location="left" />
            <Element name={navLinks.about}>
                <About />
            </Element>
            <Jobs />
            <Dash location="center" />
            <Element name={navLinks.contact}>
                <Contact />
            </Element>
            <Dash location="farRight" />
            <Footer />
        </HomeContainer>
    );
};

// const LoadingBar = styled.div``;

// const Loading = styled.div`
//     position: fixed;
//     width: 100%;
//     height: 100%;

//     ${LoadingBar} {
//         width: 16rem;
//         /* background-color: white; */
//         position: absolute;
//         top: 50%;
//         left: calc(50% - 8rem);
//         transform: translate(0, -50%);
//         height: 2px;

//         &::before {
//             position: absolute;
//             content: "";
//             background-color: ${(props) => props.theme.color.primary.base};
//             height: 2px;
//             width: 1px;
//             /* width: 16rem; */

//             /* transition: all 5s; */
//             /* opacity: 1; */
//             animation: ${animations.fadeIn} 0.5s, ${animations.grow} forwards 1s;
//         }
//     }

//     &.loading__container {
//         &-enter {
//             opacity: 0;
//         }

//         &-enter-active {
//             opacity: 1;
//             transition: all 0.3s;
//         }

//         &-exit {
//             opacity: 1;
//         }

//         &-exit-active {
//             opacity: 0;
//             transition: all 0.75s;
//         }
//     }
// `;

const HomeContainer = styled.div``;

export default Home;
