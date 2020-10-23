import styled, { css } from "styled-components";

import {
    Container,
    ProjectBox,
    ProjectBoxProps,
    Section,
    SectionHeading,
} from "./../../components";
import { mixins } from "./../../themes/styles/abstracts";

const projectList: ProjectBoxProps[] = [
    {
        name: "Mito",
        description:
            "Mito is a social platform that lets users purchase products available on major online e-commerce shops, such as Amazon, to send to one another without exchanging physical addresses.",
        icon: "/projects/mito/logo.png",
        desktopImage: "/projects/mito/desktop.jpg",
        mobileImage1: "/projects/mito/mobile1.jpg",
        mobileImage2: "/projects/mito/mobile2.jpg",
        tags: ["Swift", "Go", "Node", "SQL"],
        github: "https://github.com/andrenguyener/mito",
        live: "",
    },
    {
        name: "Drippy Chat",
        description:
            "Drippy is an instant messaging application similar to slack. Allows users to signup/signin, create channels, and post messages in real time. Features user login with HTTPS authentication, CORS middleware, local caching, and sessions / credentials encryption.",
        icon: "/projects/drippy/logo.png",
        desktopImage: "/projects/drippy/desktop.jpg",
        mobileImage1: "/projects/drippy/mobile1.jpg",
        mobileImage2: "/projects/drippy/mobile2.jpg",
        tags: ["React", "Node", "Go", "MongoDB", "Websocket", "RabbitMQ", "Redis"],
        github: "https://github.com/andrenguyener/drippy-chat",
        live: "https://drippy.club/",
    },
    {
        name: "Husky Break",
        description:
            "Husky Break is a student organization at the University of Washington. Developed their site to inform the public about them, showcase their members, and recruit more members.",
        icon: "/projects/husky/logo.png",
        desktopImage: "/projects/husky/desktop.jpg",
        mobileImage1: "/projects/husky/mobile1.jpg",
        mobileImage2: "/projects/husky/mobile2.jpg",
        tags: ["HTML", "CSS", "Javascript"],
        github: "https://github.com/andrenguyener/husky-break",
        live: "https://huskybreakclub.com/",
    },
    {
        name: "Lac Hong",
        description:
            "Lac Hong is a Vietnamese non-profit organization that I developed the front end for. Migrated over their previous files and document to work with a new system. Redesigned their pages and layout to communicate the information more effectively.",
        icon: "/projects/lac-hong/logo.png",
        desktopImage: "/projects/lac-hong/desktop.jpg",
        mobileImage1: "/projects/lac-hong/mobile1.jpg",
        mobileImage2: "/projects/lac-hong/mobile2.jpg",
        tags: ["React", "HTML", "CSS", "Javascript"],
        github: "https://github.com/andrenguyener/lac-hong",
        live: "https://andrenguyener.github.io/lac-hong/",
    },
    {
        name: "Epic Pet Health",
        description:
            "Epic Pet Health is a Seattle based company that team members and I reached out to remodel their website. We redesigned their layout of information to help customers find products catered to their preferences.",
        icon: "/projects/epic-pet-health/logo.png",
        desktopImage: "/projects/epic-pet-health/desktop.jpg",
        mobileImage1: "/projects/epic-pet-health/mobile1.jpg",
        mobileImage2: "/projects/epic-pet-health/mobile2.jpg",
        tags: ["React", "HTML", "CSS", "Javascript"],
        github: "https://github.com/andrenguyener/epic-pet-health",
        live: "https://andrenguyener.github.io/epic-pet-health/#/",
    },
];

export const Projects = () => {
    return (
        <ProjectsContainer>
            <Section>
                <SectionHeading>Projects</SectionHeading>
                <Container>
                    {projectList.map((project) => (
                        <ProjectBox key={project.name} {...project} />
                    ))}
                </Container>
            </Section>
        </ProjectsContainer>
    );
};

const ProjectsContainer = styled.div``;

export default Projects;
