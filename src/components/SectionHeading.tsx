import styled, { css } from "styled-components";

import { mixins } from "./../themes/styles/abstracts";

export const SectionHeading: React.FC = (props) => {
    return <SectionHeadingContainer>{props.children}</SectionHeadingContainer>;
};

const SectionHeadingContainer = styled.h3`
    font-size: 1.3rem;
    margin-bottom: 3rem;
    letter-spacing: 0.5px;

    ${mixins.respond(
        "tab-port",
        css`
            margin-bottom: 5rem;
        `
    )}
`;

export default SectionHeading;
