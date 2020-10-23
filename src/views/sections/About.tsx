import styled, { css } from "styled-components";

import { Container, Section, SectionHeading } from "./../../components";
import { mixins } from "./../../themes/styles/abstracts";

export const About = () => {
    return (
        <AboutContainer>
            <Section>
                <SectionHeading>About</SectionHeading>
                <Container>
                    <Profile>
                        <img src="/images/headshot.jpg" alt="profile image" />
                    </Profile>
                    <Description>
                        <p>
                            I am student studying Informatics at the University of Washington. I
                            spend my time learning new web technologies and building cool
                            applications. Aside from that, you can find me spinning on my head or
                            watching anime.
                        </p>
                    </Description>
                </Container>
            </Section>
        </AboutContainer>
    );
};

const Description = styled.div`
    color: ${(props) => props.theme.color.gray.base};

    ${mixins.respond(
        "phone",
        css`
            margin: 0 auto;
            width: 80%;
        `
    )}
`;

const Profile = styled.div`
    display: flex;
    justify-content: center;

    img {
        filter: grayscale(100%);
        height: 18rem;
        overflow: hidden;
        object-fit: cover;
        object-position: 0 -2rem;
        width: 80%;
        box-shadow: ${(props) => `0.2rem 0.2em 0.8rem ${props.theme.color.black}`};
        transition: all 0.5s;

        ${mixins.respond(
            "big-desktop",
            css`
                height: 20rem;
                object-position: 0 -3rem;
            `
        )}

        ${mixins.respond(
            "tab-land",
            css`
                height: 16rem;
                object-position: 0 -1rem;
            `
        )}

    ${mixins.respond(
            "tab-port",
            css`
                height: 20rem;
                object-position: 0 0;
            `
        )}

    ${mixins.respond(
            "phone",
            css`
                height: 18rem;
                object-position: 0 -2rem;
                margin-bottom: 1rem;
            `
        )}

    &:hover {
            filter: grayscale(0);
            transform: translateY(-3px);
            box-shadow: ${(props) => `0.4rem 0.4rem 1rem ${props.theme.color.black}`};
        }
    }
`;

const AboutContainer = styled.div`
    overflow: hidden;
`;

export default About;
