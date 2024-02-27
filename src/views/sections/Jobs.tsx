import React, { useEffect, useRef, useState } from "react";

import { CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components";

import { NumberedHeading, Section, SectionHeading } from "./../../components";
import { tweens } from "./../../themes/styles/abstracts";
import { JOBS_DATA } from "../../config/jobs";

const KEY_CODES = {
    ARROW_UP: "ArrowUp",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_LEFT_IE11: "Left",
    ARROW_RIGHT: "ArrowRight",
    ARROW_RIGHT_IE11: "Right",
    ESCAPE: "Escape",
    ESCAPE_IE11: "Esc",
    TAB: "Tab",
    SPACE: " ",
    SPACE_IE11: "Spacebar",
    ENTER: "Enter",
};

const tabWidth = 150;

const tabHeight = 42;

// const totalTabWidth = 200;

const elRefs = {
    heading: React.createRef<HTMLHeadingElement>(),
    jobs: React.createRef<HTMLDivElement>(),
};

const Jobs = () => {
    const [activeTabId, setActiveTabId] = useState(0);
    const [tabFocus, setTabFocus] = useState<number | null>(null);
    const tabs = useRef<HTMLButtonElement[]>([]);

    const revealContainer = useRef(null);

    const focusTab = () => {
        if (tabFocus === null) {
            return;
        }
        if (tabs.current[tabFocus]) {
            tabs.current[tabFocus]?.focus();
            return;
        }
        // If we're at the end, go to the start
        if (tabFocus >= tabs.current.length) {
            setTabFocus(0);
        }
        // If we're at the start, move to the end
        if (tabFocus < 0) {
            setTabFocus(tabs.current.length - 1);
        }
    };

    useEffect(() => {
        tweens.scrollTriggerHeadingTimeline(elRefs.heading.current!);
        const batch = [elRefs.jobs.current];

        tweens.scrollTriggerBatch(batch);
    }, []);

    // Only re-run the effect if tabFocus changes
    // tslint:disable-next-line:no-unnecessary-callback-wrapper
    useEffect(() => focusTab(), [tabFocus]);

    // Focus on tabs when using up & down arrow keys
    const onKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
        if (tabFocus === null) {
            return;
        }
        if (e.key === KEY_CODES.ARROW_UP || e.key === KEY_CODES.ARROW_DOWN) {
            e.preventDefault();
            // Move up
            if (e.key === KEY_CODES.ARROW_UP) {
                setTabFocus(tabFocus - 1);
            }
            // Move down
            if (e.key === KEY_CODES.ARROW_DOWN) {
                setTabFocus(tabFocus + 1);
            }
        }
    };

    return (
        <JobsSection>
            <Section>
                <StyledJobsSection id="jobs" ref={revealContainer}>
                    <SectionHeadingWrapper>
                        <SectionHeading ref={elRefs.heading}>
                            <NumberedHeading number={2.1} />
                            Where I’ve Worked
                        </SectionHeading>
                    </SectionHeadingWrapper>

                    <div className="inner" ref={elRefs.jobs}>
                        <StyledTabList role="tablist" aria-label="Job tabs" onKeyDown={onKeyDown}>
                            {JOBS_DATA.map(({ company }, i) => {
                                return (
                                    <li key={i}>
                                        <StyledTabButton
                                            isActive={activeTabId === i}
                                            // tslint:disable-next-line:jsx-no-lambda
                                            onClick={() => setActiveTabId(i)}
                                            ref={(el) =>
                                                (tabs.current[i] = el as HTMLButtonElement)
                                            }
                                            id={`tab-${i}`}
                                            role="tab"
                                            aria-selected={activeTabId === i ? true : false}
                                            aria-controls={`panel-${i}`}
                                            tabIndex={activeTabId === i ? 0 : -1}
                                        >
                                            <span>{company}</span>
                                        </StyledTabButton>
                                    </li>
                                );
                            })}
                            <StyledHighlight activeTabId={activeTabId} />
                        </StyledTabList>
                        <div>
                            {JOBS_DATA &&
                                JOBS_DATA.map(({ title, url, company, range, notes }, i) => {
                                    return (
                                        <CSSTransition
                                            key={i}
                                            in={activeTabId === i}
                                            timeout={500}
                                            unmountOnExit={false}
                                            classNames="fade"
                                        >
                                            <StyledTabContent
                                                id={`panel-${i}`}
                                                role="tabpanel"
                                                tabIndex={activeTabId === i ? 0 : -1}
                                                aria-labelledby={`tab-${i}`}
                                                aria-hidden={activeTabId !== i}
                                                hidden={activeTabId !== i}
                                            >
                                                <h3>
                                                    <span>{title}</span>
                                                    <span className="company">
                                                        &nbsp;@&nbsp;
                                                        <a
                                                            href={url}
                                                            className="inline-link"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            {company}
                                                        </a>
                                                    </span>
                                                </h3>

                                                <p className="range">{range}</p>

                                                <ul>
                                                    {notes.map((note, p) => (
                                                        <li key={p}>{note}</li>
                                                    ))}
                                                </ul>
                                            </StyledTabContent>
                                        </CSSTransition>
                                    );
                                })}
                        </div>
                    </div>
                </StyledJobsSection>
            </Section>
        </JobsSection>
    );
};

const JobsSection = styled.div``;

const StyledJobsSection = styled.section`
    /* Todo fix this make separate sub section component? */
    margin-top: -10rem;

    .inner {
        display: flex;
        ${({ theme }) => theme.mixins.initialHidden};

        @media (max-width: 600px) {
            display: block;
        }
    }
`;

const StyledTabList = styled.ul`
    position: relative;
    z-index: 3;
    width: max-content;
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    align-items: flex-start;
    overflow-x: auto;

    /* Works on Firefox */
    & {
        scrollbar-width: thin;
        scrollbar-color: ${({ theme }) => `${theme.color.white} ${theme.color.gray.light_1}`};
    }

    /* Works on Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.color.gray.light_1};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.color.white};
        border-radius: 20px;
        border: 3px solid ${({ theme }) => theme.color.gray.light_1};
    }

    ${({ theme }) =>
        theme.mixins.respond(
            "phone-land",
            css`
                display: flex;
                flex-direction: row;
                overflow-x: auto;
                width: 100%;
                justify-content: flex-start;
                margin-bottom: 30px;
            `
        )}

    ${({ theme }) =>
        theme.mixins.respond(
            "phone",
            css`
                width: calc(100%);
            `
        )}

    li {
        width: 100%;

        ${({ theme }) =>
            theme.mixins.respond(
                "phone-land",
                css`
                    width: ${tabWidth}px;
                `
            )}
    }
`;

const StyledTabButton = styled.button<{ isActive: boolean }>`
    display: inline-block;
    box-sizing: border-box;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
        color: ${({ theme }) => theme.color.white};
        outline: 0;
    }

    display: flex;
    align-items: center;
    width: 100%;
    height: ${tabHeight}px;
    padding: 0 20px 2px;
    border: none;
    border-left: 2px solid grey;
    background-color: transparent;

    color: ${({ isActive, theme }) => (isActive ? theme.color.white : theme.color.gray.base)};
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 0.7em;
    text-align: left;
    white-space: nowrap;

    ${({ theme }) =>
        theme.mixins.respond(
            "tab-port",
            css`
                padding: 0 15px 2px;
            `
        )}

    ${({ theme }) =>
        theme.mixins.respond(
            "phone-land",
            css`
                display: flex;
                justify-content: center;
                align-items: center;
                width: ${tabWidth}px;
                padding: 0 15px;
                border-left: 0;
                /* border-bottom: 2px solid grey; */
                text-align: center;
                margin: 0;
            `
        )}

    &:hover,
    &:focus {
        background-color: ${({ theme }) => theme.color.gray.light_2};
    }
`;

const StyledHighlight = styled.div<{ activeTabId: number }>`
    position: absolute;
    top: 0;
    left: 0;
    // right: 200px;
    z-index: 10;
    width: 2px;
    height: ${tabHeight}px;
    border-radius: 4px;
    background: ${({ theme }) => theme.color.white};
    transform: translateY(calc(${({ activeTabId }) => activeTabId} * ${tabHeight}px));
    transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0.1s;

    ${(props) =>
        props.theme.mixins.respond(
            "phone-land",
            css`
                top: auto;
                bottom: 0;
                left: 0;
                // right: unset;
                width: 100%;
                max-width: ${tabWidth}px;
                height: 2px;
                // margin-left: 50px;
                transform: translateX(calc(${props.activeTabId} * ${tabWidth}px));
            `
        )}
`;

const StyledTabContent = styled.div`
    width: 100%;
    height: auto;
    padding-top: 10px;
    padding-left: 30px;

    ${({ theme }) =>
        theme.mixins.respond(
            "tab-port",
            css`
                padding-left: 20px;
            `
        )}

    ${({ theme }) =>
        theme.mixins.respond(
            "phone-land",
            css`
                padding-left: 0;
            `
        )}



    .inline-link {
        text-decoration: none;
        color: ${({ theme }) => theme.color.primary.base};
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        font-size: 1.4rem;
        li {
            position: relative;
            padding-left: 30px;
            margin-bottom: 10px;
            color: ${({ theme }) => theme.color.gray.base};
            font-size: 0.95em;
            &:before {
                content: "▹";
                position: absolute;
                left: 0;
                color: ${({ theme }) => theme.color.white};
            }
        }
    }
    h3 {
        margin-bottom: 5px;
        font-size: ${({ theme }) => theme.fontSize.xxl};

        .company {
            color: ${({ theme }) => theme.color.primary.base};
        }
    }
    .range {
        margin-bottom: 30px;
        color: ${({ theme }) => theme.color.gray.base};
        font-family: ${({ theme }) => theme.font.mono};
        font-size: 0.6em;
    }
`;

const SectionHeadingWrapper = styled.div`
    overflow: hidden;
    > * {
        ${({ theme }) => theme.mixins.initialHidden};
    }
`;

export default Jobs;
