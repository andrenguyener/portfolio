import React, { HTMLProps } from "react";

import styled, { css } from "styled-components";

export const SectionHeading = React.forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement>>(
    (props, ref) => {
        const { as: _as, ...restProps } = props;
        return <SectionHeadingContainer {...restProps} ref={ref} />;
    }
);

const SectionHeadingContainer = styled.h3`
    font-size: 1.3rem;
    margin-bottom: 3rem;
    letter-spacing: 0.5px;
    overflow: hidden;

    ${({ theme }) =>
        theme.mixins.respond(
            "tab-port",
            css`
                margin-bottom: 5rem;
            `
        )}
`;

export default SectionHeading;
