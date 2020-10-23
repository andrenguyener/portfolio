import React from "react";
import { Element } from "react-scroll";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

import { Dash } from "./../components";
import { animations } from "./../themes/styles/abstracts";
import { Layout, Page } from "./layout";
import { About, Contact, Footer, Header, Projects } from "./sections";

export const Home = () => {
    const [showContent, setShowContent] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setShowContent(true);
        }, 1800);
    }, []);

    return (
        <Layout>
            <Page>
                <HomeContainer>
                    <CSSTransition
                        in={!showContent}
                        timeout={{
                            enter: 0,
                            exit: 1000,
                        }}
                        unmountOnExit={true}
                        classNames="loading__container"
                    >
                        <Loading>
                            <LoadingBar />
                        </Loading>
                    </CSSTransition>
                    <CSSTransition
                        in={showContent}
                        timeout={{
                            enter: 0,
                            exit: 500,
                        }}
                        unmountOnExit={true}
                        classNames="content__container"
                    >
                        <div>
                            <Header />
                            <Dash location="right" />
                            <Element name="about">
                                <About />
                            </Element>
                            <Dash location="left" />
                            <Element name="projects">
                                <Projects />
                            </Element>
                            <Dash location="center" />
                            <Element name="contact">
                                <Contact />
                            </Element>
                            <Footer />
                        </div>
                    </CSSTransition>
                </HomeContainer>
            </Page>
        </Layout>
    );
};

const LoadingBar = styled.div``;

const Loading = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;

    ${LoadingBar} {
        width: 16rem;
        /* background-color: white; */
        position: absolute;
        top: 50%;
        left: calc(50% - 8rem);
        transform: translate(0, -50%);
        height: 2px;

        &::before {
            position: absolute;
            content: "";
            background-color: ${(props) => props.theme.color.primary.base};
            height: 2px;
            width: 1px;
            /* width: 16rem; */

            /* transition: all 5s; */
            /* opacity: 1; */
            animation: ${animations.fadeIn} 0.5s, ${animations.grow} forwards 2s;
        }
    }

    &.loading__container {
        &-enter {
            opacity: 0;
        }

        &-enter-active {
            opacity: 1;
            transition: all 0.3s;
        }

        &-exit {
            opacity: 1;
        }

        &-exit-active {
            opacity: 0;
            transition: all 0.75s;
        }
    }
`;

const HomeContainer = styled.div`
    /* todo not working */
    .content__container {
        &-enter {
            opacity: 0;
        }

        &-enter-active {
            opacity: 1;
            transition: all 2s;
        }

        &-exit {
            opacity: 1;
        }

        &-exit-active {
            opacity: 0;
            transition: all 0.75s;
        }
    }
`;

export default Home;
