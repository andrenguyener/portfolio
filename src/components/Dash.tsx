import styled, { css } from "styled-components";

import { mixins } from "./../themes/styles/abstracts";

type Props = {
    location: "right" | "left" | "center";
};

export const Dash: React.FC<Props> = ({ location }) => {
    return <DashContainer location={location}>&nbsp;</DashContainer>;
};

const DashContainer = styled.span<{ location: "right" | "left" | "center" }>`
    ${mixins.dash}

    ${(props) => {
        const s = [];
        switch (props.location) {
            case "center":
                s.push(
                    css`
                        left: calc(50vw - 0.5rem + 1px);
                    `
                );
                break;
            case "left":
                s.push(
                    css`
                        left: calc(25% - 0.5rem + 1px);
                    `
                );
                break;
            case "right":
                s.push(
                    css`
                        right: calc(25% - 1rem + 4px);
                    `
                );
                break;
            default:
        }
        return s;
    }}
`;

export default Dash;
