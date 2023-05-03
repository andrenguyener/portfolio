import styled, { css } from "styled-components";

import { mixins } from "./../themes/styles/abstracts";

export const Container: React.FC<React.PropsWithChildren<{ noWrap?: boolean }>> = (props) => {
    return <StyledContainer noWrap={!!props.noWrap}>{props.children}</StyledContainer>;
};

// TODO make other options for different widths
const StyledContainer = styled.div<{ noWrap: boolean }>`
    display: flex;
    flex-flow: ${(props) => (props.noWrap ? "row nowrap" : "row wrap")};

    & > * {
        width: calc(50% - 1rem);

        &:nth-child(odd) {
            margin-right: 1rem;
        }

        &:nth-child(even) {
            margin-left: 1rem;
        }

        ${mixins.respond(
            "tab-port",
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
