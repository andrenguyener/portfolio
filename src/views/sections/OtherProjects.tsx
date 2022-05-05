import { gsap } from "gsap/dist/gsap";
import React, { useEffect } from "react";
import styled, { css } from "styled-components";

import { Icon, NumberedHeading, Section, SectionHeading } from "./../../components";

import { tweens } from "./../../themes/styles/abstracts";

export interface Props {}

interface Project {
    title: string;
    description: string;
    github?: string;
    external?: string;
    tech: string[];
}

const projects: Project[] = [
    {
        title: "Space Invaders",
        description: "Remake of the space invaders game using ES6 syntax",
        github: "https://github.com/andrenguyener/space-invaders",
        external: "https://spaceinvaders.andrenguyen.dev/",
        tech: ["React", "Firebase"],
    },
    {
        title: "CSS Study",
        description:
            "Articles describing how CSS works behind the scenes: the cascade, specificity, inheritance, etc.",
        github: "https://github.com/andrenguyener/css-study",
        external: "https://css-study.andrenguyen.dev/",
        tech: ["Vue"],
    },
    {
        title: "Memoir One Theme",
        description: "A minimal dark theme for VS Code inspired by the One Dark Pro theme",
        github: "https://github.com/andrenguyener/Memoir-One",
        external: "https://marketplace.visualstudio.com/items?itemName=andrenguyener.Memoir-One",
        tech: ["VS Code"],
    },
    {
        title: "Husky Break",
        description:
            "Husky Break is a student organization at the University of Washington. Developed their site to inform the public about them, showcase their members, and recruit more members.",
        github: "https://github.com/andrenguyener/husky-break",
        external: "https://huskybreakclub.andrenguyen.dev/",
        tech: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Epic Pet Health",
        description:
            "Epic Pet Health is a Seattle based company that team members and I reached out to remodel their website. We redesigned their layout of information to help customers find products catered to their preferences.",
        github: "https://github.com/andrenguyener/epic-pet-health",
        tech: ["React"],
    },
    {
        title: "Lac Hong",
        description:
            "Lac Hong is a Vietnamese non-profit organization that I developed the front end for. Migrated over their previous files and document to work with a new system. Redesigned their pages and layout to communicate the information more effectively.",
        github: "https://github.com/andrenguyener/lac-hong",
        tech: ["React"],
    },
];

const elRefs = {
    heading: React.createRef<HTMLHeadingElement>(),
    projects: projects.map(() => React.createRef<HTMLDivElement>()),
};

export const OtherProjects: React.FC<Props> = () => {
    const [showMore, setShowMore] = React.useState(false);

    const GRID_LIMIT = 3;
    const firstSix = projects.slice(0, GRID_LIMIT);
    const projectsToShow = showMore ? projects : firstSix;

    useEffect(() => {
        tweens.scrollTriggerHeadingTimeline(elRefs.heading.current!);

        gsap.timeline().set(
            elRefs.projects.map((project) => project.current),
            { visibility: "visible", opacity: 0 }
        );
        tweens.scrollTriggerBatch(
            elRefs.projects.map((project) => project.current),
            (batch) => batch.filter((b) => !!b)
        );
    }, []);

    useEffect(() => {
        // Only trigger reveal for newly added boxes
        if (showMore) {
            tweens.scrollTriggerBatch(
                elRefs.projects.map((project) => project.current),
                (batch) => batch.filter((b, i) => !!b && i >= GRID_LIMIT)
            );
        }
    }, [showMore]);

    return (
        <Section>
            <SectionHeadingWrapper>
                <SectionHeading ref={elRefs.heading}>
                    <NumberedHeading number={1.1} />
                    Other Projects
                </SectionHeading>
            </SectionHeadingWrapper>
            <StyledProjectsSection>
                <div className="projects-grid">
                    {projectsToShow.map((project, i) => {
                        return (
                            <StyledProject key={i} ref={elRefs.projects[i]} tabIndex={0}>
                                <div className="project-inner">
                                    <header>
                                        <div className="project-top">
                                            <div className="folder">
                                                <Icon name="Folder" />
                                            </div>
                                            <div className="project-links">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        rel="noopener noreferrer"
                                                        target="_blank"
                                                        aria-label="GitHub Link"
                                                    >
                                                        <Icon name="GitHub" />
                                                    </a>
                                                )}
                                                {project.external && (
                                                    <a
                                                        href={project.external}
                                                        rel="noopener noreferrer"
                                                        target="_blank"
                                                        aria-label="External Link"
                                                    >
                                                        <Icon name="External" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <h3 className="project-title">{project.title}</h3>

                                        <p>{project.description}</p>
                                    </header>

                                    <footer>
                                        {project.tech && (
                                            <ul className="project-tech-list">
                                                {project.tech.map((tech, i) => (
                                                    <li key={i}>{tech}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </footer>
                                </div>
                            </StyledProject>
                        );
                    })}
                </div>
                <button className="more-button" onClick={() => setShowMore(!showMore)}>
                    Show {showMore ? "Less" : "More"}
                </button>
            </StyledProjectsSection>
        </Section>
    );
};

const StyledProjectsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    .projects-grid {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 20px;
        position: relative;

        ${({ theme }) =>
            theme.mixins.respond(
                "tab-land",
                css`
                    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
                `
            )};
    }

    .more-button {
        ${({ theme }) => theme.mixins.button};
        margin: 80px auto 0;
    }
`;

const StyledProject = styled.div`
    cursor: default;
    position: relative;
    ${({ theme }) => theme.mixins.initialHidden};

    &:hover,
    &:focus {
        outline: 0;
        .project-inner {
            transform: translateY(-5px);
        }

        ${({ theme }) => theme.mixins.hollowBorderHover};
    }

    ${({ theme }) => theme.mixins.hollowBorder};

    .project-inner {
        ${({ theme }) => theme.mixins.flexBetween};
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        height: 100%;
        padding: 2rem 1.75rem;
        border-radius: ${({ theme }) => theme.borderRadius};
        background-color: ${({ theme }) => theme.color.gray.light_2};

        transition: ${({ theme }) => theme.transition};

        header {
            width: 100%;
        }
    }
    .project-top {
        ${({ theme }) => theme.mixins.flexBetween};
        margin-bottom: 30px;
        .folder {
            svg {
                fill: ${({ theme }) => theme.color.gray.light_3};
                width: 40px;
                height: 40px;
            }
        }
        .project-links {
            margin-right: -10px;
            a {
                padding: 5px 10px;
                svg {
                    fill: ${({ theme }) => theme.color.gray.base};
                    width: 17px;
                    height: 17px;
                }
            }
        }
    }
    .project-title {
        margin: 0 0 10px;
        color: ${({ theme }) => theme.color.gray.base};
        font-size: ${({ theme }) => theme.fontSize.xxl};
    }

    .project-tech-list {
        display: flex;
        align-items: flex-end;
        flex-grow: 1;
        flex-wrap: wrap;
        padding: 0;
        margin: 20px 0 0 0;
        list-style: none;
        li {
            color: ${({ theme }) => theme.color.gray.base};
            font-family: ${({ theme }) => theme.font.mono};
            font-size: ${({ theme }) => theme.fontSize.xxs};
            line-height: 1.75;
            &:not(:last-of-type) {
                margin-right: 15px;
            }
        }
    }
`;

const SectionHeadingWrapper = styled.div`
    overflow: hidden;
    > * {
        ${({ theme }) => theme.mixins.initialHidden};
    }
`;

export default OtherProjects;
