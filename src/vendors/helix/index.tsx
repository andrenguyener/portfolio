import debounce from "lodash.debounce";
import React from "react";
import styled, { css, keyframes } from "styled-components";

// const MOLECULE_AMOUNT = 60;

const pairs = (moleculeAmount: number) => {
    const elements = [];
    for (let i = 1; i <= moleculeAmount; i++) {
        elements.push(
            <div className="pair cf" key={i}>
                <div className="nucleobase">
                    <div className="molecule" />
                </div>
                <div className="nucleobase">
                    <div className="molecule" />
                </div>
            </div>
        );
    }
    return elements;
};

export const Helix = () => {
    const [moleculeAmount, setMoleculeAmount] = React.useState(60);
    React.useEffect(() => {
        window.addEventListener("resize", debounce(handleResize, 750));
        return () => window.removeEventListener("resize", debounce(handleResize, 750));
    }, []);

    const handleResize = () => {
        const width = window.innerWidth;
        setMoleculeAmount(width / 10);
    };

    return (
        <>
            <HelixContainer moleculeAmount={moleculeAmount}>
                <div className="wrap">
                    <div className="helix">{pairs(moleculeAmount)}</div>
                </div>
            </HelixContainer>
        </>
    );
};

const pairSpin = (i: number) => {
    const offset = i * 9;
    return keyframes`
        0% {
            transform: rotateY(${offset - 9}deg);
        }
        100% {
            transform: rotateY(${offset - 9 + 360}deg);
        }
    `;
};

const baseBg = (i: number) => {
    return keyframes`
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    `;
};

const rotateHelix = (moleculeAmount: number) => {
    const styles = [];
    for (let i = 1; i <= moleculeAmount; i++) {
        styles.push(css`
            .pair:nth-child(${i}) {
                animation-name: ${pairSpin(i)};
                .nucleobase {
                    animation: ${baseBg(i)};
                    animation-delay: ${i * 450}ms;
                }
            }
        `);
    }
    return css`
        ${styles}
    `;
};

// Molecule color matching
// $nuclebase1: rgba(20, 225, 0, .2);
// $nuclebase2: rgba(50, 75, 225, .35);
// $nuclebase3: rgba(250, 30, 15, .35);
// $nuclebase4: rgba(220, 205, 75, .35);

// $nuclebase1: rgba(255, 255, 255, .15);
// $nuclebase2: rgba(255, 255, 255, .15);
// $nuclebase3: rgba(255, 255, 255, .15);
// $nuclebase4: rgba(255, 255, 255, .15);

const nuclebase1 = "#e73c7e";
const nuclebase2 = "#e73c7e";
const nuclebase3 = "#23a6d5";
const nuclebase4 = "#23a6d5";

const HelixContainer = styled.div<{ moleculeAmount: number }>`
    position: absolute;

    // top: 50vh;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.5;
    // transform: scale(-1.5, -1);
    .cf:before,
    .cf:after {
        content: " ";
        display: table;
    }

    .cf:after {
        clear: both;
    }

    .wrap {
        /* margin-top: -90vh; */
        /* margin-top: -240px; */
        perspective: 500px;
        text-align: center;
    }

    .helix {
        display: inline-block;
        perspective: 500px;
        transform: rotateY(-170deg) rotateZ(68deg) translateY(-80px) translateX(-240px);
    }

    .pair {
        display: flex;
        justify-content: space-between;
        width: 480px;
        margin-bottom: 24px;
        animation-iteration-count: infinite;
        animation-duration: 96000ms;
        animation-timing-function: linear;
    }

    .nucleobase {
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation-iteration-count: infinite;
        animation-duration: 9600ms;
        animation-timing-function: linear;
        display: flex;
        width: 49.5%;
        height: 1px;
    }

    .nucleobase:first-child {
        justify-content: flex-start;
    }
    .nucleobase:last-child {
        justify-content: flex-end;
    }

    .molecule {
        background-color: rgba(255, 255, 255, 0.5);
        transform: translateY(-1px);
        height: 3px;
        width: 3px;
        border-radius: 50%;
    }

    .pair:nth-child(odd) {
        .nucleobase:first-child {
            // background-color: ${nuclebase1};
            .molecule {
                background-color: ${nuclebase1};
            }
        }
        .nucleobase:last-child {
            // background-color: ${nuclebase2};
            .molecule {
                background-color: ${nuclebase2};
            }
        }
    }

    .pair:nth-child(even) {
        .nucleobase:first-child {
            // background-color: ${nuclebase3};
            .molecule {
                background-color: ${nuclebase3};
            }
        }
        .nucleobase:last-child {
            // background-color: ${nuclebase4};
            .molecule {
                background-color: ${nuclebase4};
            }
        }
    }

    ${({ moleculeAmount }) => rotateHelix(moleculeAmount)}
`;

export default Helix;
