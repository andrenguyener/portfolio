import styled, { css } from "styled-components";

import { mixins } from "./../themes/styles/abstracts";

export const Section: React.FC = (props) => {
    return <SectionContainer>{props.children}</SectionContainer>;
};

const SectionContainer = styled.section`
    margin-left: 25%;
    margin-top: 10rem;
    padding: 1rem;
    padding-bottom: 10rem;
    max-width: 50%;

    ${mixins.respond(
        "tab-port",
        css`
            margin-left: 5%;
            max-width: 90%;
        `
    )}

    ${mixins.respond(
        "phone",
        css`
            margin-left: 2.5%;
            max-width: 95%;
        `
    )}
`;

export default Section;
