import React from "react";
import styled, { css } from "styled-components";
import { animations, mixins } from "./../themes/styles/abstracts";

export const Scroll: React.FC = () => {
    const scrollRef = React.useRef<HTMLSpanElement>(null);
    const [progress, setProgress] = React.useState(0);
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
    const handleScroll = () => {
        if (scrollRef?.current) {
            const percent =
                (window.scrollY /
                    (document.documentElement.scrollHeight -
                        document.documentElement.clientHeight)) *
                100;
            scrollRef.current.style.width = percent + "%";
            setProgress(percent);
        }
    };
    return (
        <ScrollContainer>
            <ScrollBar ref={scrollRef} />
            <Counter progress={progress}>{Math.round(progress) + "%"}</Counter>
        </ScrollContainer>
    );
};

const Counter = styled.span<{ progress: number }>`
    position: absolute;
    font-family: Helvetica;
    font-size: 0.6em;
    font-weight: lighter;
    color: ${(props) => (props.progress > 99 ? "#fff" : "#333")};
    margin-top: 0.5rem;
    margin-left: 2rem;
`;

const ScrollContainer = styled.div`
    position: fixed;
    max-width: 5rem;
    top: 50%;
    right: 3rem;
    height: 1px;
    width: 10rem;
    background: rgba(255, 255, 255, 0.2);

    ${mixins.respond(
        "tab-port",
        css`
            display: none;
        `
    )}

    animation: ${animations.fadeIn} 1s linear 1s backwards;
`;

const ScrollBar = styled.span`
    position: absolute;
    content: "";
    background-color: ${(props) => props.theme.color.white};
    height: 100%;
    transition: all 0.5s ease-in-out;
`;

export default Scroll;
