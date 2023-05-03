import React, { useContext } from "react";

import { gsap } from "gsap";
import { Link, LinkProps } from "react-scroll";
import styled, { css } from "styled-components";

import { Bars, Icon } from "./../../components";
import { constants, NavigationContext, useIsTopInView } from "./../../utils";
import { animationRefs } from "./Navigation.animation";

const { elRefs, buttonFadeIn, modalIn, modalOut } = animationRefs();

const NavigationLink = (props: LinkProps) => {
    const { ref, ...restProps } = props;
    return (
        <Link smooth={true} duration={500} href="#" {...restProps}>
            {props.children}
        </Link>
    );
};

const timeline = gsap.timeline();

export const Navi: React.FC = () => {
    const { isActive, setIsActive } = useContext(NavigationContext);
    const [isReady, setIsReady] = React.useState(false);
    const isTop = useIsTopInView();

    const onNavClick = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        ev.preventDefault();
        setIsActive(!isActive);
    };

    const onLinkClick = () => {
        setIsActive(false);
    };

    React.useEffect(() => {
        if (isReady) {
            if (isActive) {
                timeline.progress(0).clear();
                timeline.add(modalIn(isTop)).play();
            } else {
                timeline.progress(1).clear();
                timeline.add(modalOut()).play();
            }
        }
    }, [isActive]);

    React.useEffect(() => {
        const introTimeline = gsap.timeline({ delay: 1.75 });
        introTimeline.add(buttonFadeIn()).play();
        setIsReady(true);
    }, []);

    const onSetActive = (link: keyof typeof constants.navLinks) => (to: string) => {
        console.warn(link, to);
    };

    return (
        <>
            <Navigation className="navigation__container">
                <Button ref={elRefs.button} isActive={isActive} onClick={onNavClick}>
                    <ButtonIcon>&nbsp;</ButtonIcon>
                    <ButtonIcon>&nbsp;</ButtonIcon>
                    <ButtonIcon>&nbsp;</ButtonIcon>
                </Button>
                <Container ref={elRefs.container} topVisible={isTop}>
                    <Nav>
                        <List>
                            <Item className="navigation_link">
                                <StyledLink>
                                    <NavigationLink
                                        to={constants.navLinks.projects}
                                        onClick={onLinkClick}
                                        onSetActive={onSetActive(constants.navLinks.projects)}
                                    >
                                        Projects
                                    </NavigationLink>
                                </StyledLink>
                            </Item>
                            <Item className="navigation_link">
                                <StyledLink>
                                    <NavigationLink
                                        to={constants.navLinks.about}
                                        onClick={onLinkClick}
                                    >
                                        About
                                    </NavigationLink>
                                </StyledLink>
                            </Item>
                            <Item className="navigation_link">
                                <StyledLink>
                                    <NavigationLink
                                        to={constants.navLinks.contact}
                                        onClick={onLinkClick}
                                    >
                                        Contact
                                    </NavigationLink>
                                </StyledLink>
                            </Item>
                        </List>
                    </Nav>
                    <Social>
                        <VerticalBar ref={elRefs.verticalBar}>&nbsp;</VerticalBar>
                        <SocialContainer ref={elRefs.socialContainer}>
                            <SocialLink
                                href={constants.links.github}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Icon name="GitHub" />
                            </SocialLink>
                            <SocialLink
                                href={constants.links.linkedIn}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Icon name="Linkedin" />
                            </SocialLink>
                            <SocialLink
                                href={constants.links.resume}
                                rel="noopener noreferrer"
                                target="_blank"
                                type="application/pdf"
                            >
                                <Icon name="AdobeAcrobat" />
                            </SocialLink>
                            <SocialLink
                                href={constants.links.soundcloud}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Icon name="Soundcloud" />
                            </SocialLink>
                        </SocialContainer>
                    </Social>
                    <Bars type="both">&nbsp;</Bars>
                </Container>
            </Navigation>
        </>
    );
};

const Button = styled.button<{ isActive: boolean }>`
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
    background-color: transparent;
    border: none;
    overflow: hidden;

    ${({ theme }) => theme.mixins.initialHidden};

    &:focus {
        outline: none;
    }

    ${({ theme }) =>
        theme.mixins.respond(
            "tab-land",
            css`
                top: 4rem;
                left: calc(100% - 6rem);
                max-width: 70%;
            `
        )}

    ${({ theme }) =>
        theme.mixins.respond(
            "phone-land",
            css`
                top: 2rem;
                right: 2rem;
            `
        )}

  ${(props) => {
        const s = [];
        if (!props.isActive) {
            s.push(css`
                &:hover ${ButtonIcon} {
                    animation: ${props.theme.animations.growIn} 0.6s;

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
                ${ButtonIcon} {
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

const ButtonIcon = styled.span`
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
    width: 25vw;
    overflow: hidden;

    ${({ theme }) =>
        theme.mixins.respond(
            "tab-port",
            css`
                left: 10vw;
                width: 40vw;
            `
        )}

    ${({ theme }) =>
        theme.mixins.respond(
            "phone",
            css`
                left: 10vw;
                width: 80vw;
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
    font-family: ${(props) => props.theme.font.sansBold};

    width: 100%;
    text-align: left;
`;

const StyledLink = styled.span`
    a {
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
            font-size: clamp(4rem, 5vw, 7rem);
            letter-spacing: 1px;
            padding: 0.5rem 0;
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

const SocialContainer = styled.div`
    display: flex;
    align-items: center;
`;

const VerticalBar = styled.span``;

const SocialLink = styled.a`
    display: flex;
    align-items: center;
`;

const Social = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    align-items: center;
    top: calc(75% - 1.25rem);
    left: calc(75% - 1.25px);
    overflow: hidden;

    ${({ theme }) =>
        theme.mixins.respond(
            "phone",
            css`
                left: calc(10%);
                justify-content: flex-start;
            `
        )}

    ${VerticalBar} {
        height: 2.5rem;
        width: 3px;
        background-color: ${(props) => props.theme.color.white};
    }

    ${SocialLink} {
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
            max-height: 1.5rem;
            fill: ${(props) => props.theme.color.white};
            width: 100%;
        }
    }
`;

const Container = styled.div<{ topVisible: boolean }>`
    ${({ theme }) => theme.mixins.fullDisplay};
    ${({ theme }) => theme.mixins.initialZIndex};
    ${({ theme }) => theme.mixins.initialOpacity};

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
`;

const Navigation = styled.div``;

export default Navi;
