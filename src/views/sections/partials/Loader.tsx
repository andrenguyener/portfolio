import styled from "styled-components";

export const Loader = styled.span`
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;

    &::after,
    &::before {
        content: "";
        box-sizing: border-box;
        width: 48px;
        height: 48px;
        border: 4px solid ${(props) => props.theme.color.gray.light_3};
        position: absolute;
        left: 0;
        top: 0;
        animation: animloader 2s ease-in-out infinite;
    }
    &::after {
        border-color: ${(props) => props.theme.color.primary.base};
        animation-delay: 1s;
    }

    @keyframes animloader {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
`;
