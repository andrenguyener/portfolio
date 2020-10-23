import React from "react";
import styled, { css } from "styled-components";
import { mixins } from "./../themes/styles/abstracts";

export const Scroll: React.FC = () => {
    const scrollRef = React.useRef<HTMLSpanElement>(null);
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
    const handleScroll = () => {
        if (scrollRef?.current) {
            scrollRef.current.style.width =
                (window.scrollY /
                    (document.documentElement.scrollHeight -
                        document.documentElement.clientHeight)) *
                    100 +
                "%";
        }
    };
    return (
        <ScrollContainer>
            <ScrollBar ref={scrollRef} />
        </ScrollContainer>
    );
};

const ScrollContainer = styled.div`
    position: fixed;
    max-width: 5rem;
    top: 50%;
    right: 3rem;
    height: 2px;
    width: 10rem;

    ${mixins.respond(
        "tab-port",
        css`
            display: none;
        `
    )}
`;

const ScrollBar = styled.span`
    position: absolute;
    content: "";
    background-color: ${(props) => props.theme.color.white};
    height: 100%;
`;

export default Scroll;
