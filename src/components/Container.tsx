import styled, { css } from "styled-components";

import { mixins } from "./../themes/styles/abstracts";

export const Container: React.FC = (props) => {
    return <StyledContainer>{props.children}</StyledContainer>;
};

const StyledContainer = styled.div`
    display: flex;
    flex-flow: row wrap;

    & > * {
        width: calc(50% - 1rem);

        &:nth-child(odd) {
            margin-right: 1rem;
        }

        &:nth-child(even) {
            margin-left: 1rem;
        }

        ${mixins.respond(
            "phone",
            css`
                width: calc(100%);

                &:not(:last-child) {
                    margin-bottom: 2rem;
                }

                &:nth-child(odd) {
                    margin-right: 0;
                }

                &:nth-child(even) {
                    margin-left: 0;
                }
            `
        )}
    }
`;

export default Container;
