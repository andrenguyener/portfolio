import styled from "styled-components";

import { animations } from "./../../../themes/styles/abstracts";

export const Fade = styled.div<{ out: boolean }>`
    height: 100%;
    width: 100%;
    visibility: ${(props) => (props.out ? "hidden" : "visible")};
    animation: ${(props) => (props.out ? animations.fadeOut : animations.fadeIn)} 1s linear;
    transition: visibility 1s linear;
`;
