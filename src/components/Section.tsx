import styled, { css } from "styled-components";

export const Section: React.FC = (props) => {
    return <SectionContainer>{props.children}</SectionContainer>;
};

const SectionContainer = styled.section`
    margin: 10rem auto;
    padding: 1rem;
    max-width: min(50%, 1000px);
    position: relative;

    ${({ theme }) =>
        theme.mixins.respond(
            "small-screen",
            css`
                margin-left: 15%;
                margin-right: 15%;
                max-width: 70%;
            `
        )}

    ${({ theme }) =>
        theme.mixins.respond(
            "tab-land",
            css`
                margin-left: 5%;
                margin-right: 5%;
                max-width: 90%;
            `
        )}

    ${({ theme }) =>
        theme.mixins.respond(
            "phone",
            css`
                margin-left: 2.5%;
                margin-right: 2.5%;
                max-width: 95%;
            `
        )}
`;

export default Section;
