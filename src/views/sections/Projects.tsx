import React, { useEffect } from "react";
import styled, { css } from "styled-components";

import { Icon, NumberedHeading, Section, SectionHeading } from "./../../components";
import { tweens } from "./../../themes/styles/abstracts";

interface Desktop {
    desktop: {
        url: string;
    };
}

interface Mobile {
    mobile: {
        url1: string;
        url2: string;
    };
}

interface Project {
    title: string;
    description: string;
    image: Desktop | Mobile;
    techList: string[];
    github?: string;
    external?: string;
}

const projects: Project[] = [
    {
        title: "Voxel Blox",
        description: "3D voxel models rendered with three.js",
        techList: [
            "Typescript",
            "Next.js",
            "React Three Fiber",
            "Chakra UI",
            "MagicaVoxel",
            "Blender",
            "Framer Motion",
        ],
        image: {
            desktop: {
                url: "/projects/voxel-blox/desktop1.png",
            },
        },
        external: "https://voxel.andrenguyen.dev",
        github: "https://github.com/andrenguyener/voxel-blox",
    },
    {
        title: "Spotty",
        description:
            "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, detailed audio information about each track, and an audio visualizer",
        techList: ["Typescript", "Next.js", "Spotify Web API", "Howler.js"],
        image: {
            desktop: {
                url: "/projects/spotty/desktop1.png",
            },
        },
        external: "https://spotty.andrenguyen.dev",
        github: "https://github.com/andrenguyener/spotty",
    },
    {
        title: "Mito",
        description:
            "Mito is a social platform that lets users purchase products available on major online e-commerce shops, such as Amazon, to send to one another without exchanging physical addresses.",
        techList: ["Swift", "Go", "Node", "SQL"],
        image: {
            mobile: {
                url1: "/projects/mito/login.png",
                url2: "/projects/mito/home.png",
            },
        },
        github: "https://github.com/andrenguyener/mito",
    },
    {
        title: "Drippy Chat",
        description:
            "Drippy is an instant messaging application similar to slack. Allows users to signup/signin, create channels, and post messages in real time. Features user login with HTTPS authentication, CORS middleware, local caching, and sessions / credentials encryption.",
        techList: ["React", "Node", "Go", "MongoDB", "Websocket", "RabbitMQ", "Redis"],
        image: {
            desktop: {
                url: "/projects/drippy/desktop.png",
            },
        },
        github: "https://github.com/andrenguyener/drippy-chat",
    },
];

const isDesktop = (image: Desktop | Mobile): image is Desktop => {
    return typeof (image as Desktop).desktop !== "undefined";
};

const elRefs = {
    heading: React.createRef<HTMLHeadingElement>(),
    projects: projects.map(() => React.createRef<HTMLDivElement>()),
};

export const Projects = () => {
    useEffect(() => {
        tweens.scrollTriggerHeadingTimeline(elRefs.heading.current!);
        tweens.scrollTriggerBatch(elRefs.projects.map((project) => project.current));
    }, []);

    return (
        <ProjectsContainer>
            <Section>
                <SectionHeadingWrapper>
                    <SectionHeading id="section-heading_featured" ref={elRefs.heading}>
                        <NumberedHeading number={1} />
                        Featured Projects
                    </SectionHeading>
                </SectionHeadingWrapper>
                {projects.map((project, index) => {
                    const ContentElement = (
                        <Content>
                            <Title>{project.title}</Title>
                            <Description>{project.description}</Description>
                            <TechList>
                                {project.techList.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </TechList>
                            <Links>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="GitHub Link"
                                    >
                                        <Icon name="GitHub" />
                                    </a>
                                )}
                                {project.external && (
                                    <a
                                        href={project.external}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="External Link"
                                    >
                                        <Icon name="External" />
                                    </a>
                                )}
                            </Links>
                        </Content>
                    );
                    const ImageElement = [];
                    if (isDesktop(project.image)) {
                        ImageElement.push(
                            <DevicesContainer key="desktop" type="desktop">
                                <In>
                                    <HeadOfBrows>
                                        <In>
                                            <Browsb className="button-1" />
                                            <Browsb className="button-2" />
                                            <Browsb className="button-3" />
                                        </In>
                                    </HeadOfBrows>
                                    <DeviceScroll>
                                        <In>
                                            <ImageWrap>
                                                <img
                                                    src={project.image.desktop.url}
                                                    alt="device-mockup-image"
                                                />
                                            </ImageWrap>
                                        </In>
                                    </DeviceScroll>
                                </In>
                            </DevicesContainer>
                        );
                    } else {
                        ImageElement.push(
                            <DevicesContainer key="mobile" type="mobile">
                                <DeviceScroll>
                                    <In>
                                        <MobileImageContainer>
                                            <MobileImageWrap key="mobile_1">
                                                <IphoneXCover>
                                                    <img
                                                        className="clip"
                                                        src={project.image.mobile.url1}
                                                        alt="device-mockup-image-1"
                                                    />
                                                </IphoneXCover>
                                            </MobileImageWrap>
                                            <MobileImageWrap key="mobile_2">
                                                <IphoneXCover>
                                                    <img
                                                        className="clip"
                                                        src={project.image.mobile.url2}
                                                        alt="device-mockup-image-2"
                                                    />
                                                </IphoneXCover>
                                            </MobileImageWrap>
                                        </MobileImageContainer>
                                    </In>
                                </DeviceScroll>
                            </DevicesContainer>
                        );
                    }
                    return (
                        <Project key={index} ref={elRefs.projects[index]}>
                            {index % 2 === 0 ? (
                                <>
                                    {ImageElement}
                                    {ContentElement}
                                </>
                            ) : (
                                <>
                                    {ContentElement}
                                    {ImageElement}
                                </>
                            )}
                        </Project>
                    );
                })}
                {/* Reference for iphone X clip path */}
                {IphoneXClipPath}
            </Section>
        </ProjectsContainer>
    );
};

const IphoneXCover = styled.div`
    --w: 195px;
    position: relative;
    width: var(--w);
    padding: calc(var(--w) / 23) calc(var(--w) / 22);

    img,
    video,
    ifame {
        width: 100%;
        border-radius: calc(var(--w) / 10);
        position: relative;
    }

    &:after {
        position: absolute;
        content: "";
        height: calc(100% - 8px);
        width: 100%;
        border: 1px solid ${({ theme }) => theme.color.gray.light_1};
        border-radius: calc(var(--w) / 8);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        ${({ theme }) =>
            theme.mixins.respond(
                "phone-land",
                css`
                    background-color: ${theme.color.gray.dark};
                    opacity: 0.95;
                `
            )}
    }

    &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .clip {
        max-width: 100%;
        clip-path: url(#responsive);
    }
`;

const MobileImageContainer = styled.div`
    position: relative;
    display: flex;
`;

const MobileImageWrap = styled.div``;

const ImageWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
        flex-shrink: 0;
        max-width: 100%;
        min-width: 100%;
        position: relative;
    }
    ${({ theme }) =>
        theme.mixins.respond(
            "phone-land",
            css`
                &:after {
                    position: absolute;
                    content: "";
                    height: 100%;
                    width: 100%;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background-color: ${theme.color.gray.dark};
                    opacity: 0.95;
                }
            `
        )}
`;

const DeviceScroll = styled.div``;

const Browsb = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.color.gray.light_1};
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    margin-top: -5px;

    &.button-1 {
        left: 10px;
    }

    &.button-2 {
        left: 25px;
    }

    &.button-3 {
        left: 40px;
    }
`;

const HeadOfBrows = styled.div`
    border: 1px solid ${(props) => props.theme.color.gray.light_1};
    box-sizing: border-box;
    height: 30px;
    width: 100%;
    border-radius: 12px 12px 0 0;
`;

const In = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const DevicesContainer = styled.div<{ type: "mobile" | "desktop" }>`
    position: relative;

    /* Todo right now aspect ratio is 1:1 make it more appropriate */
    padding-top: ${(props) =>
        props.type === "desktop" ? "clamp(280px, 35.25%, 595px)" : "clamp(400px , 43.25%, 440px)"};
    flex-basis: calc(60% - 1rem);

    > * {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`;

const Content = styled.div`
    flex-basis: calc(60% - 1rem);

    display: flex;
    flex-direction: column;
    justify-content: center;

    z-index: 1;

    ${({ theme }) =>
        theme.mixins.respond(
            "phone-land",
            css`
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            `
        )}
`;

const Title = styled.h3`
    font-size: ${(props) => props.theme.fontSize.xxl};
    color: ${(props) => props.theme.color.gray.base};
`;

const Description = styled.p`
    background-color: ${(props) => props.theme.color.gray.light_2};
    color: ${(props) => props.theme.color.gray.light_3};
    border-radius: 2px;
    padding: 1rem;
`;

const TechList = styled.div`
    display: flex;
    font-family: ${(props) => props.theme.font.mono};
    font-size: ${(props) => props.theme.fontSize.xs};
    color: ${(props) => props.theme.color.gray.base};
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    width: 80%;
    flex-wrap: wrap;

    span {
        margin-top: 0.5rem;
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;

    a {
        padding: 1rem;

        svg {
            width: 17px;
            height: 17px;
            transition: all 0.2s;
            fill: ${(props) => props.theme.color.gray.base};

            &:hover {
                fill: ${(props) => props.theme.color.primary.base};
            }
        }
    }
`;

const Project = styled.div`
    position: relative;
    display: flex;
    ${({ theme }) => theme.mixins.initialHidden};

    margin-bottom: 15px;

    /* Todo fix - it wont target the 1st type */
    &:not(:nth-of-type(2)) {
        margin-top: 100px;
    }

    &:nth-of-type(even) {
        ${DevicesContainer} {
            margin-right: -5%;

            ${({ theme }) =>
                theme.mixins.respond(
                    "phone-land",
                    css`
                        margin-right: unset;
                    `
                )}
        }

        ${Content} {
            align-items: flex-end;
            margin-left: -5%;

            ${({ theme }) =>
                theme.mixins.respond(
                    "phone-land",
                    css`
                        margin-left: unset;
                    `
                )}
        }

        ${Description} {
            text-align: right;
        }

        ${TechList} {
            justify-content: flex-end;

            span :not(:last-child) {
                margin-left: 1.5rem;
            }
        }

        ${MobileImageContainer} {
            justify-content: flex-start;

            ${({ theme }) =>
                theme.mixins.respond(
                    "phone-land",
                    css`
                        justify-content: center;
                    `
                )}
        }

        ${MobileImageWrap} {
            &:first-child {
                margin-right: 10%;
            }
        }
    }

    &:nth-of-type(odd) {
        ${DevicesContainer} {
            margin-left: -5%;

            ${({ theme }) =>
                theme.mixins.respond(
                    "phone-land",
                    css`
                        margin-left: unset;
                    `
                )}
        }

        ${Content} {
            align-items: flex-start;
            margin-right: -5%;

            ${({ theme }) =>
                theme.mixins.respond(
                    "phone-land",
                    css`
                        margin-right: unset;
                    `
                )}
        }

        ${Description} {
            text-align: left;
        }

        ${TechList} {
            justify-content: flex-start;

            span :not(:last-child) {
                margin-right: 1.5rem;
            }
        }

        ${MobileImageContainer} {
            justify-content: flex-end;

            ${({ theme }) =>
                theme.mixins.respond(
                    "phone-land",
                    css`
                        justify-content: center;
                    `
                )}
        }

        ${MobileImageWrap} {
            &:first-child {
                margin-right: 10%;
            }
        }
    }

    ${({ theme }) =>
        theme.mixins.respond(
            "phone-land",
            css`
                flex-direction: column;
            `
        )}
`;

const SectionHeadingWrapper = styled.div`
    overflow: hidden;
    > * {
        ${({ theme }) => theme.mixins.initialHidden};
    }
`;

const ProjectsContainer = styled.div`
    overflow: hidden;
`;

// const MobileSvgOutline = (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 259 538">
//         <path
//             className="cls-1"
//             d="M222.2,537H38.8A35.91,35.91,0,0,1,3,501.2V39.8A35.91,35.91,0,0,1,38.8,4H222.2A35.91,35.91,0,0,1,258,39.8V501.2A35.91,35.91,0,0,1,222.2,537Z"
//             transform="translate(0.5 0.5)"
//         />
//         <path
//             className="cls-1"
//             d="M220.7,530H40.3A29.38,29.38,0,0,1,11,500.7V41.3A29.38,29.38,0,0,1,40.3,12H220.7A29.39,29.39,0,0,1,250,41.3V500.7A29.39,29.39,0,0,1,220.7,530Z"
//             transform="translate(0.5 0.5)"
//         />
//         <circle
//             className="cls-1"
//             cx="130.6"
//             cy="497.23"
//             r="21.9"
//             transform="matrix(0.09, -1, 1, 0.09, -375.91, 582.75)"
//         />
//         <circle className="cls-1" cx="131.1" cy="31.3" r="5.7" />
//         <circle className="cls-1" cx="131.1" cy="31.3" r="2.5" />
//         <path
//             className="cls-1"
//             d="M149,56H112.2a5,5,0,0,1-5-5h0a5,5,0,0,1,5-5H149a5,5,0,0,1,5,5h0A5,5,0,0,1,149,56Z"
//             transform="translate(0.5 0.5)"
//         />
//         <path
//             className="cls-1"
//             d="M2.6,147.9A2.59,2.59,0,0,1,0,145.34V130.1a2.59,2.59,0,0,1,2.56-2.6h0"
//             transform="translate(0.5 0.5)"
//         />
//         <path
//             className="cls-1"
//             d="M2.6,182.7A2.58,2.58,0,0,1,0,180.14V164.9a2.59,2.59,0,0,1,2.56-2.6h0"
//             transform="translate(0.5 0.5)"
//         />
//         <path
//             className="cls-1"
//             d="M3,103.3a3,3,0,0,1-3-3v-20a3,3,0,0,1,3-3"
//             transform="translate(0.5 0.5)"
//         />
//         <path
//             className="cls-1"
//             d="M215,4V3a3,3,0,0,0-3-3H174a3,3,0,0,0-3,3V4"
//             transform="translate(0.5 0.5)"
//         />
//     </svg>
// );

const IphoneXClipPath = (
    <svg
        style={{
            position: "absolute",
            width: "0",
            height: "0",
        }}
    >
        <defs>
            <clipPath id="nonresponsive">
                <path d="M78,0 L78.8918331,0.216238031 C80.7796201,0.673959707 82.3332983,2.08608489 83.0043945,3.9000001 C83.0192652,3.94019419 83.0330484,3.98600042 83.0457442,4.03741878 L83.0390876,7.96097867 C83.0390545,20.7025492 93.3365052,31 106.039054,31 L268.960946,31 C281.663495,31 291.960946,20.7025492 291.960946,8 C291.960946,7.99147462 291.95879,6.71458263 291.954479,4.16932405 C291.954323,4.07746778 291.970341,3.98630146 292.001801,3.9000001 C292.667785,2.07301174 294.211271,0.676168263 296.108167,0.216238031 L297,0 L335,0 C357.09139,-4.05812251e-15 375,17.90861 375,40 L375,772 C375,794.09139 357.09139,812 335,812 L40,812 C17.90861,812 2.705415e-15,794.09139 0,772 L0,40 C-2.705415e-15,17.90861 17.90861,4.05812251e-15 40,0 L78,0 Z" />
            </clipPath>
            <clipPath id="responsive" clipPathUnits="objectBoundingBox">
                <path d="M0.208,0 L0.2103782216,0.0002663029938423645 C0.21541232026666668,0.0008299996391625615 0.21955546213333332,0.002569070061576355 0.22134505200000001,0.0048029557881773405 C0.22138470720000003,0.004852455899014779 0.2214214624,0.004908867512315271 0.22145531786666667,0.004972190615763547 L0.22143756693333333,0.009804160923645321 C0.2214374786666667,0.025495750246305418 0.2488973472,0.038177339901477834 0.28277081066666665,0.038177339901477834 L0.7172291893333332,0.038177339901477834 C0.7511026533333334,0.038177339901477834 0.7785625226666666,0.025495750246305418 0.7785625226666666,0.009852216748768473 C0.7785625226666666,0.009841717512315272 0.7785567733333334,0.008269190431034483 0.7785452773333333,0.0051346355295566505 C0.7785448613333333,0.0050215120443349755 0.7785875760000001,0.004909238251231527 0.7786714693333333,0.0048029557881773405 C0.7804474266666667,0.0025529701231527093 0.7845633893333334,0.0008327195357142858 0.7896217786666666,0.0002663029938423645 L0.792,0 L0.8933333333333333,0 C0.9522437066666667,-4.997687820197044e-18 1,0.02205493842364532 1,0.04926108374384237 L1,0.9507389162561576 C1,0.9779450615763547 0.9522437066666667,1 0.8933333333333333,1 L0.10666666666666667,1 C0.04775629333333333,1 7.21444e-18,0.9779450615763547 0,0.9507389162561576 L0,0.04926108374384237 C-7.21444e-18,0.02205493842364532 0.04775629333333333,4.997687820197044e-18 0.10666666666666667,0 L0.208,0 Z" />
            </clipPath>
        </defs>
    </svg>
);

export default Projects;
