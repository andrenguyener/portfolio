import React from "react";
import styled, { css } from "styled-components";

import { mixins } from "./../themes/styles/abstracts";
import Modal from "./Modal";

export interface Props {
    name: string;
    description: string;
    icon: string;
    desktopImage: string;
    mobileImage1: string;
    mobileImage2: string;
    tags: string[];
    github: string;
    live: string;
}

export const ProjectBox: React.FC<Props> = (props) => {
    const [showModal, setShowModal] = React.useState(false);

    const onClickContent = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        setShowModal(true);
    };

    const onModalClose = () => {
        setShowModal(false);
    };

    return (
        <Project>
            <Box>
                <Content onClick={onClickContent}>
                    <Icon>
                        <img src={props.icon} alt="project icon" />
                    </Icon>
                </Content>
                <Title>{props.name}</Title>
                <Links>
                    {props.github && (
                        <LinksBox href={props.github} rel="noopener noreferrer" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.02 23.02">
                                <path
                                    className="cls-1"
                                    d="M11.51,0A11.51,11.51,0,1,0,23,11.51,11.51,11.51,0,0,0,11.51,0Zm3.23,20.28c-.07-.9-.14-2-.15-2.47a2.19,2.19,0,0,0-.9-1.79c3.32-.28,4.91-2.11,5-4.54A4.54,4.54,0,0,0,17.28,7.9a19.2,19.2,0,0,0-.1-2.84c-.75-.22-2.5.7-3,1.1a9.28,9.28,0,0,0-5.08,0,4.89,4.89,0,0,0-3-1.11A3.6,3.6,0,0,0,6,7.89c-.8.74-1.92,1.64-1.62,3.53C4.88,14.18,6.83,15.68,10,16a1,1,0,0,0-.84.86c-2.11.87-2.71-.54-3-.91-.88-1.09-1.68-.77-1.72-.76s-.09.09-.08.12c0,.24.52.48.55.5a4.07,4.07,0,0,1,1,1.61c.94,1.54,3.11.9,3.13.92s0,1.26,0,2.15a9.37,9.37,0,1,1,5.69-.25Z"
                                />
                            </svg>
                            github
                        </LinksBox>
                    )}
                    {props.live && (
                        <LinksBox href={props.live} rel="noopener noreferrer" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 15.29">
                                <path
                                    className="cls-1"
                                    d="M17.59,3.48A17.59,17.59,0,0,1,22.4,7.65s-4.25,5.63-9.9,5.63S2.6,7.65,2.6,7.65A17.32,17.32,0,0,1,8,3.19a5.66,5.66,0,0,0-1,3.24A5.73,5.73,0,1,0,17.59,3.48ZM12.5,15.29c7.67,0,12.5-7.64,12.5-7.64S20.17,0,12.5,0,0,7.65,0,7.65,4.83,15.29,12.5,15.29ZM11.65,2.71a3,3,0,0,0-3,2.77A.7.7,0,0,0,10,5.55a1.59,1.59,0,0,1,1.61-1.46.69.69,0,0,0,0-1.38Z"
                                />
                            </svg>
                            live demo
                        </LinksBox>
                    )}
                </Links>
                <Modal {...props} displayModal={showModal} onModalClose={onModalClose} />
            </Box>
        </Project>
    );
};

const LinksBox = styled.a`
    display: flex;
    align-items: center;
    transition: all 0.2s;

    ${mixins.linkHeading}

    &:hover {
        color: ${(props) => props.theme.color.primary.base};

        svg {
            fill: ${(props) => props.theme.color.primary.base};
        }
    }

    &:not(:last-child) {
        margin-right: 2rem;
    }

    svg {
        width: 2.5rem;
        margin-right: 0.7rem;
        fill: ${(props) => props.theme.color.white};
        transition: all 0.2s;
    }
`;

const Links = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 4em;
    left: 0;
    right: 0;
    visibility: hidden;
    opacity: 0;
    transition: opacity 1s;
`;

const Title = styled.h3`
    position: absolute;
    top: 4rem;
    left: 0;
    right: 0;
    font-size: 2rem;
    opacity: 0;
    visibility: hidden;
    transition: all 1s;
`;

const Icon = styled.div`
    height: 6rem;
    width: 6rem;
    display: flex;
    justify-content: center;
    transition: all 0.2s;

    img {
        height: 100%;
    }

    ${mixins.respond(
        "big-desktop",
        css`
            height: 7rem;
            width: 7rem;
        `
    )}
`;

const Content = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 2rem;
    transition: all 0.2s;
`;

const Box = styled.div`
    height: 22rem;
    width: 22rem;
    margin: 0 auto;
    margin-bottom: 3rem;
    box-shadow: ${(props) => `0.2rem 0.2em 0.8rem ${props.theme.color.black}`};

    &:hover {
        cursor: pointer;
        box-shadow: ${(props) => `0.4rem 0.4rem 1rem ${props.theme.color.black}`};
        ${Content} {
            transform: translateY(-3px);
            filter: blur(3px) brightness(40%);
        }

        ${Title},
        ${Links} {
            transform: translateY(-3px);
            opacity: 1;
            visibility: visible;
        }
    }

    ${mixins.respond(
        "big-desktop",
        css`
            height: 25rem;
            width: 25rem;
            margin-bottom: 5rem;
        `
    )}

    ${mixins.respond(
        "tab-land",
        css`
            height: 20rem;
            width: 20rem;
        `
    )}

    ${mixins.respond(
        "tab-port",
        css`
            height: 22rem;
            width: 22rem;
            margin-bottom: 4rem;
        `
    )}
`;

const Project = styled.div`
    text-align: center;
    position: relative;
    &:nth-of-type(1) {
        ${Content} {
            background-image: linear-gradient(to right bottom, #78ffd6, #00d7d6);
        }
    }

    &:nth-of-type(2) {
        ${Content} {
            background-image: linear-gradient(to right bottom, #0f2027, #003f72);
        }
    }

    &:nth-of-type(3) {
        ${Content} {
            background-image: linear-gradient(to right bottom, #0f0c29, #1b1464);
        }
    }

    &:nth-of-type(4) {
        ${Content} {
            background-image: linear-gradient(to right bottom, #ffffff, #e6e6e6);
        }
    }

    &:nth-of-type(5) {
        ${Content} {
            background-image: linear-gradient(to right bottom, #00f260, #00a99d);
        }
    }
`;

export default ProjectBox;
