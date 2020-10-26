import React, { useContext } from "react";
import { Link, LinkProps } from "react-scroll";
import { CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components";

import Bars, {
    ModalBarsEnter,
    ModalBarsEnterActive,
    ModalBarsExit,
    ModalBarsExitActive,
} from "./../../components/Bars";
import { animations, mixins } from "./../../themes/styles/abstracts";
import { constants, NavigationContext, useIsTopInView } from "./../../utils";

const NavigationLink = (props: LinkProps) => {
    const { ref, ...restProps } = props;
    return (
        <Link smooth={true} duration={500} href="#" {...restProps}>
            {props.children}
        </Link>
    );
};

// Todo rename component
export const Navi: React.FC = () => {
    const { isActive, setIsActive } = useContext(NavigationContext);
    const isTop = useIsTopInView();

    const onNavClick = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        ev.preventDefault();
        setIsActive(!isActive);
    };

    const onLinkClick = () => {
        setIsActive(false);
    };

    return (
        <>
            <Navigation>
                <Button isActive={isActive} onClick={onNavClick}>
                    <Icon>&nbsp;</Icon>
                    <Icon>&nbsp;</Icon>
                    <Icon>&nbsp;</Icon>
                </Button>
                <CSSTransition
                    in={isActive}
                    timeout={{
                        enter: 0,
                        exit: 500,
                    }}
                    unmountOnExit={true}
                    classNames="navigation__container"
                >
                    <Container topVisible={isTop}>
                        <Nav>
                            <List>
                                <Item>
                                    <StyledLink>
                                        <NavigationLink to="about" onClick={onLinkClick}>
                                            About
                                        </NavigationLink>
                                    </StyledLink>
                                </Item>
                                <Item>
                                    <StyledLink>
                                        <NavigationLink to="projects" onClick={onLinkClick}>
                                            Projects
                                        </NavigationLink>
                                    </StyledLink>
                                </Item>
                                <Item>
                                    <StyledLink>
                                        <NavigationLink to="contact" onClick={onLinkClick}>
                                            Contact
                                        </NavigationLink>
                                    </StyledLink>
                                </Item>
                            </List>
                        </Nav>
                        <Social>
                            <VerticalBar>&nbsp;</VerticalBar>
                            <SocialContainer>
                                <SocialLink
                                    href="https://github.com/andrenguyener/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 23.02 23.02"
                                    >
                                        <path
                                            className="cls-1"
                                            d="M11.51,0A11.51,11.51,0,1,0,23,11.51,11.51,11.51,0,0,0,11.51,0Zm3.23,20.28c-.07-.9-.14-2-.15-2.47a2.19,2.19,0,0,0-.9-1.79c3.32-.28,4.91-2.11,5-4.54A4.54,4.54,0,0,0,17.28,7.9a19.2,19.2,0,0,0-.1-2.84c-.75-.22-2.5.7-3,1.1a9.28,9.28,0,0,0-5.08,0,4.89,4.89,0,0,0-3-1.11A3.6,3.6,0,0,0,6,7.89c-.8.74-1.92,1.64-1.62,3.53C4.88,14.18,6.83,15.68,10,16a1,1,0,0,0-.84.86c-2.11.87-2.71-.54-3-.91-.88-1.09-1.68-.77-1.72-.76s-.09.09-.08.12c0,.24.52.48.55.5a4.07,4.07,0,0,1,1,1.61c.94,1.54,3.11.9,3.13.92s0,1.26,0,2.15a9.37,9.37,0,1,1,5.69-.25Z"
                                        />
                                    </svg>
                                </SocialLink>
                                <SocialLink
                                    href="https://www.linkedin.com/in/andrepnguyen/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 430.117 430.117"
                                        xmlSpace="preserve"
                                    >
                                        <path
                                            id="LinkedIn"
                                            d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707
          c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21
          v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824
          C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463
          c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z
          M5.477,420.56h92.184v-277.32H5.477V420.56z"
                                        />
                                    </svg>
                                </SocialLink>
                                <SocialLink>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 15.76 19.86"
                                    >
                                        <path
                                            className="cls-1"
                                            d="M12.64,12.88a2.36,2.36,0,0,1-1,0,4.5,4.5,0,0,1-1.24-.37,3.75,3.75,0,0,1,1.78.1,1.6,1.6,0,0,1,.43.25m-4.07-.67-.09,0-.58.15-.24.07c-.5.12-1,.25-1.52.41.19-.47.37-.93.54-1.39l.4-1,.22.35a6.54,6.54,0,0,0,1.27,1.42M7.29,7A4.13,4.13,0,0,1,7,8.63a2.64,2.64,0,0,1,0-2,1,1,0,0,1,.17-.27A1.17,1.17,0,0,1,7.29,7M4.68,14.22a6.17,6.17,0,0,1-.38.63c-.32.48-.84,1-1.1,1a.11.11,0,0,1-.1-.05.12.12,0,0,1,0-.09,1.57,1.57,0,0,1,.58-.77,5.76,5.76,0,0,1,1-.71m8.81-1.32c0-.58-1-1-1-1a3.83,3.83,0,0,0-1.26-.2A7.25,7.25,0,0,0,9.46,12a6,6,0,0,1-1.55-1.6,8.2,8.2,0,0,1-.47-.79A6,6,0,0,0,8,6.94c0-.77-.39-1.3-.87-1.3s-.61.25-.84.73a3.73,3.73,0,0,0,.32,3.24c-.22.53-.43,1.07-.63,1.6s-.51,1.33-.8,2a7.07,7.07,0,0,0-2,1.19,2.18,2.18,0,0,0-.83,1.3.84.84,0,0,0,.23.62.86.86,0,0,0,.64.28c.8,0,1.56-1.09,1.71-1.31a12.17,12.17,0,0,0,.83-1.5,19.31,19.31,0,0,1,2.1-.6l.25-.07.58-.15.65-.18a5.77,5.77,0,0,0,2.24.87,2.8,2.8,0,0,0,1.58-.16.58.58,0,0,0,.35-.57m1.41,5A1.07,1.07,0,0,1,13.79,19h-12A1.08,1.08,0,0,1,.62,17.9V1.76A1.08,1.08,0,0,1,1.75.62H9.93V4a1.76,1.76,0,0,0,1.82,1.84h3.12l0,0ZM14.34,5H11.89a1.08,1.08,0,0,1-1.13-1.13V1.37Zm1.39,13V5.59l-5-5.15v0h0L10.34,0H1.86A1.8,1.8,0,0,0,0,1.87V18a1.8,1.8,0,0,0,1.86,1.86h12A1.8,1.8,0,0,0,15.76,18"
                                        />
                                    </svg>
                                </SocialLink>
                            </SocialContainer>
                        </Social>
                        <Bars type="both">&nbsp;</Bars>
                    </Container>
                </CSSTransition>
            </Navigation>
        </>
    );
};

const Button = styled.div<{ isActive: boolean }>`
    height: 2rem;
    width: 3rem;
    position: fixed;
    top: calc(50% - 1rem);
    left: 3rem;
    z-index: 2000;
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: ${animations.fadeIn} 2s linear ${constants.LOADING_TIME + 200 + "ms"} backwards;

    ${mixins.respond(
        "tab-land",
        css`
            top: 4rem;
            left: calc(100% - 6rem);
        `
    )}

    ${mixins.respond(
        "phone",
        css`
            top: 3rem;
            right: 3rem;
        `
    )}

  ${(props) => {
        const s = [];
        if (!props.isActive) {
            s.push(css`
                &:hover ${Icon} {
                    animation: ${animations.growIn} 0.8s;

                    &:nth-child(1) {
                        animation-delay: 0s;
                    }
                    &:nth-child(2) {
                        animation-delay: 0.125s;
                    }
                    &:nth-child(3) {
                        animation-delay: 0.25s;
                    }
                }
            `);
        }
        if (props.isActive) {
            s.push(css`
                ${Icon} {
                    &:nth-child(1),
                    &:nth-child(1)::before {
                        width: 0;
                    }

                    &:nth-child(3),
                    &:nth-child(3)::before {
                        width: 0;
                    }
                }
            `);
        }
        return s;
    }}
`;

const Icon = styled.span`
    position: relative;
    top: 0;
    width: 3rem;
    height: 2px;
    background-color: ${(props) => props.theme.color.white};
    transition: all 0.5s;
    opacity: 1;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 3rem;
        height: 2px;
        background-color: ${(props) => props.theme.color.gray.light_1};
        z-index: -1;
    }

    &:nth-child(2) {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`;

const Nav = styled.nav`
    height: 100vh;
    position: fixed;
    top: 0;
    left: 25vw;
    z-index: 1500;
    width: 0;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    width: 25vw;
    overflow: hidden;

    ${mixins.respond(
        "phone",
        css`
            width: 50vw;
        `
    )}
`;

const List = styled.ul`
    position: absolute;
    top: calc(50% - 2.5rem);
    transform: translate(0%, -50%);
    list-style: none;
    text-align: center;

    width: 100%;
`;

const Item = styled.li`
    /* Todo update font from theme */
    font-family: TradeGothic-Bold, Roboto-Bold;

    animation: ${animations.slideInLeft} 0.5s backwards;
    width: 100%;
    text-align: left;
    &:nth-child(1) {
        animation-delay: 0s;
    }
    &:nth-child(2) {
        animation-delay: 0.125s;
    }
    &:nth-child(3) {
        animation-delay: 0.25s;
    }
`;

const StyledLink = styled.span`
    a {
        transition: all 0.3s cubic-bezier(0, 0, 0.23, 1);
        background-position: 0%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: ${(props) =>
            `linear-gradient(to right, ${props.theme.color.primary.base}, ${props.theme.color.primary.base} 50%, ${props.theme.color.white} 50%)`};
        background-size: 200% 100%;
        background-position: 100%;

        &:link,
        &:visited {
            text-align: left;
            display: inline-block;
            font-size: 4rem;
            letter-spacing: 1px;
            padding: 1rem 0;
            color: ${(props) => props.theme.color.white};
            text-decoration: none;
            text-transform: uppercase;
        }

        &:hover,
        &:active {
            transition: all 0.4s cubic-bezier(0, 0, 0.23, 1);
            background-position: 0%;
        }
    }
`;

const SocialContainer = styled.div``;

const VerticalBar = styled.span``;

const SocialLink = styled.a``;

const Social = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    align-items: center;
    top: calc(75% - 1.25rem);
    left: calc(75% - 1.25px);
    overflow: hidden;

    ${mixins.respond(
        "phone",
        css`
            left: calc(25%);
            justify-content: flex-start;
        `
    )}

    ${VerticalBar} {
        height: 2.5rem;
        width: 3px;
        background-color: ${(props) => props.theme.color.white};
        animation: slideInDown 0.4s backwards;
    }

    ${SocialContainer} {
        animation: ${animations.slideInLeft} 0.5s backwards;
    }

    ${SocialLink} {
        display: inline-block;
        width: 2rem;
        height: auto;
        fill: white;

        &:hover {
            svg {
                fill: ${(props) => props.theme.color.primary.base};
            }
        }

        &:first-child {
            margin-left: 1rem;
        }

        &:not(:last-child) {
            margin-right: 1rem;
        }

        svg {
            max-height: 2.3rem;
            transition: all 0.2s;
            fill: ${(props) => props.theme.color.white};
            width: 100%;
        }
    }
`;

const Container = styled.div<{ topVisible: boolean }>`
    ${mixins.fullDisplay}

    background-color: ${(props) => props.theme.modal.color};

    ${(props) => {
        const s = [];
        if (props.topVisible) {
            s.push(
                css`
                    background-color: transparent;
                `
            );
        }
        return s;
    }};

    &.navigation__container {
        &-enter {
            ${ModalBarsEnter}
        }

        &-enter-active {
            ${ModalBarsEnterActive}
        }

        &-exit {
            ${Item} {
                animation: ${animations.slideOutRight} 0.5s forwards;

                &:nth-child(1) {
                    animation-delay: 0s;
                }
                &:nth-child(2) {
                    animation-delay: 0.125s;
                }
                &:nth-child(3) {
                    animation-delay: 0.25s;
                }
            }

            ${ModalBarsExit}

            ${VerticalBar} {
                animation: ${animations.slideOutDown} 0.5s forwards;
            }

            ${SocialContainer} {
                animation: ${animations.slideOutRight} 0.5s forwards;
            }
        }

        &-exit-active {
            ${ModalBarsExitActive}
        }
    }
`;

const Navigation = styled.div``;

export default Navi;
