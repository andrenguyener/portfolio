import React from "react";
import styled, { css } from "styled-components";

export const Scroll: React.FC = () => {
    const scrollRef = React.useRef<HTMLSpanElement>(null);
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 0.55em;
    font-weight: lighter;
    color: ${({ progress }) => (progress > 99 ? "#fff" : "#333")};
    margin-top: 0.5rem;
    right: 0;
`;

const ScrollContainer = styled.div`
    position: fixed;
    max-width: 5rem;
    top: 50%;
    right: 3rem;
    height: 1px;
    width: 10rem;
    background: rgba(255, 255, 255, 0.2);

    ${({ theme }) =>
        theme.mixins.respond(
            "tab-port",
            css`
                display: none;
            `
        )};

    animation: ${({ theme }) => theme.animations.fadeIn} 1s linear 1s backwards;
`;

const ScrollBar = styled.span`
    position: absolute;
    content: "";
    background-color: ${({ theme }) => theme.color.white};
    height: 100%;
    transition: all 0.5s ease-in-out;
`;

export default Scroll;
