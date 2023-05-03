import React from "react";

import styled, { css } from "styled-components";

import { Container, NumberedHeading, Section, SectionHeading } from "./../../components";
import { tweens } from "./../../themes/styles/abstracts";
import { Geometric } from "./../../vendors/geometric";
import hoverEffect from "./../../vendors/hover-effect";

export const About = () => {
    const elRefs = {
        image: React.createRef<HTMLDivElement>(),
        heading: React.createRef<HTMLHeadingElement>(),
        description: React.createRef<HTMLDivElement>(),
        geometric: React.createRef<HTMLDivElement>(),
    };

    React.useEffect(() => {
        tweens.scrollTriggerHeadingTimeline(elRefs.heading.current!);
        const batch = [elRefs.image.current, elRefs.description.current, elRefs.geometric.current];
        tweens.scrollTriggerBatch(batch);

        // tslint:disable-next-line:no-unused-expression
        new hoverEffect({
            parent: elRefs.image.current,
            intensity: 0.3,
            image1: "/images/headshot_1.jpg",
            image2: "/images/headshot_2.jpg",
            displacementImage: "/images/texture.png",
            imagesRatio: 9 / 16,
        });
    }, []);

    return (
        <AboutContainer>
            <Section>
                <SectionHeadingWrapper>
                    <SectionHeading ref={elRefs.heading}>
                        <NumberedHeading number={2} />
                        About
                    </SectionHeading>
                </SectionHeadingWrapper>
                <Container>
                    <Profile ref={elRefs.image} />
                    <Description>
                        <p ref={elRefs.description}>
                            Hello! I'm Andre, a software engineer based in Seattle, WA.
                            <br />
                            <br />
                            I spend my time learning new web technologies and creating cool
                            applications while trying my best provide pixel-perfect and performant
                            experiences.
                            <br />
                            <br />
                            Aside from that, you can find me snowboarding, making music, or watching
                            anime.
                        </p>
                        <CSSImageContainer ref={elRefs.geometric}>
                            <Geometric />
                        </CSSImageContainer>
                    </Description>
                </Container>
            </Section>
        </AboutContainer>
    );
};

const CSSImageContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 5rem;

    ${({ theme }) => theme.mixins.initialHidden};
`;

const Description = styled.div`
    color: ${(props) => props.theme.color.gray.base};

    p {
        ${({ theme }) => theme.mixins.initialHidden};
    }
`;

const Profile = styled.div`
    position: relative;

    ${({ theme }) => theme.mixins.hollowBorder};
    ${({ theme }) => theme.mixins.initialHidden};

    &:after {
        content: "";
        display: block;
        padding-bottom: 56%;

        ${({ theme }) =>
            theme.mixins.respond(
                "phone",
                css`
                    padding-bottom: 46%;
                `
            )};
    }

    canvas {
        position: absolute;
        border-radius: 2px;
        transition: ${({ theme }) => theme.transition};
        filter: grayscale(0.4);
    }

    &:hover {
        ${({ theme }) => theme.mixins.hollowBorderHover};
    }
`;

const SectionHeadingWrapper = styled.div`
    overflow: hidden;
    > * {
        ${({ theme }) => theme.mixins.initialHidden};
    }
`;

const AboutContainer = styled.div`
    overflow: hidden;
`;

export default About;
