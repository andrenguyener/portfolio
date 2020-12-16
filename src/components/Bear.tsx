import React from "react";
import styled, { keyframes } from "styled-components";

const brown_dark_bear = "#C68D6D";
const brown_light_bear = "#DD9F80";
const yellow_bear = "#FFDAAA";
const inner_ear = "#FFC477";
const nose_bear = "#935B45";
const eyes_bear = "#57565C";
// const sky_bear = "#9FF6FF";
// const sky_dark_bear = "#7DE7FF";
// const sky_ligth_bear = "#CCF8FF";

const head_width = 100;
const head_height = 100;
const circle_radius = 3;

export const Bear = () => {
    return (
        <Container>
            <Head>
                <HeadCopy />
                <Mood>
                    <Nose />
                </Mood>
                <Eye className="left" />
                <Eye className="right" />
                <Ear className="left">
                    <InnerEar />
                </Ear>
                <Ear className="right">
                    <InnerEar />
                </Ear>
                {/* <Tie>
                    <CircleTie />
                    <TieLayout className="right">
                        <InnerTie className="right" />
                    </TieLayout>
                    <TieLayout className="left">
                        <InnerTie className="left" />
                    </TieLayout>
                </Tie> */}

                <Circle />
            </Head>
        </Container>
    );
};

export const BearAlpha = () => {
    return (
        <Container>
            <Head>
                <HeadCopy />
                <Circle />
            </Head>
        </Container>
    );
};

export const BearBeta = () => {
    return (
        <Container>
            <Head>
                <HeadCopy />
                <Mood />
                <Ear className="left" />
                <Ear className="right" />
                <Circle />
            </Head>
        </Container>
    );
};

// const InnerTie = styled.div`
//     height: 50%;
//     width: 50%;
//     /* background-color: ${sky_dark_bear}; */
//     border: 1px dashed white;
//     position: absolute;
//     left: 25%;
//     top: 25%;

//     &.left {
//         border-radius: 30% 90% 90% 30% / 50% 50% 50% 50%;
//     }

//     &.right {
//         border-radius: 90% 30% 30% 90% / 50% 50% 50% 50%;
//     }
// `;

// const TieLayout = styled.div`
//     height: 28%;
//     width: 30%;
//     /* background-color: ${sky_bear}; */
//     border: 1px solid white;
//     position: absolute;

//     &.left {
//         border-radius: 30% 90% 90% 30% / 50% 50% 50% 50%;
//         left: 22%;
//     }

//     &.right {
//         right: 22%;
//         border-radius: 90% 30% 30% 90% / 50% 50% 50% 50%;
//     }
// `;

// const CircleTie = styled.div`
//     border-radius: 50%;
//     height: 15%;
//     width: 15%;
//     /* background-color: ${sky_ligth_bear}; */
//     border: 1px solid white;
//     position: absolute;
//     left: 42.5%;
//     top: 5%;
//     z-index: 8;
// `;

// const Tie = styled.div`
//     position: absolute;
//     z-index: 4;
//     height: inherit;
//     width: 100%;
//     top: 92%;
// `;

const InnerEar = styled.div`
    height: 50%;
    width: 50%;
    border-radius: 50%;
    /* background-color: ${inner_ear}; */
    border: 1px dashed white;
    top: 25%;
    left: 25%;
    position: absolute;
`;

const Ear = styled.div`
    height: 32.5%;
    width: 32.5%;
    /* background-color: ${brown_dark_bear}; */
    border: 1px solid white;
    border-radius: 50%;
    position: absolute;
    top: 0%;
    z-index: 1;

    &.left {
        left: -20px;
    }

    &.right {
        right: -20px;
    }
`;

const Eye = styled.div`
    height: ${0.07 * head_height}px;
    width: ${0.05 * head_width}px;
    /* background-color: ${eyes_bear}; */
    background-color: white;
    /* border: 1px solid white; */
    position: absolute;
    border-radius: 5px;
    z-index: 3;

    &.left {
        left: 27%;
    }

    &.right {
        right: 27%;
    }
`;

const Nose = styled.div`
    /* background-color: ${nose_bear}; */
    border-radius: 50%;
    width: 35%;
    height: 40%;
    position: relative;
    left: 32.5%;
    top: 0;
    border: 1px dashed white;
`;

const Mood = styled.div`
    /* background-color: ${yellow_bear}; */
    border-radius: 50%;
    width: 45%;
    height: 40%;
    position: relative;
    left: 27.5%;
    top: 47%;
    z-index: 3;
    border: 1px solid white;
`;

const HeadCopy = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    /* background-color: ${brown_light_bear}; */
    border-radius: 50%;
    z-index: 2;
    border: 1px dashed white;
`;

const orbit2 = keyframes`
    from { 	transform: rotate(0deg) translateX(${head_width / 2}px) rotate(0deg); }
	to   {  transform: rotate(360deg) translateX(${head_width / 2}px) rotate(-360deg); }
`;

const Circle = styled.div`
    position: absolute;
    content: "";
    width: ${circle_radius * 2}px;
    height: ${circle_radius * 2}px;
    border-radius: 50%;
    background-color: white;
    transform: rotate(0deg);
    top: ${head_height / 2 - circle_radius}px;
    left: ${head_width / 2 - circle_radius}px;
    z-index: 2;
    animation: ${orbit2} 4s linear infinite;
`;

const Head = styled.div`
    /* background-color: ${brown_light_bear}; */
    border-radius: 50%;
    width: ${head_width}px;
    height: ${head_height}px;
    position: relative;
    /* border: 1px solid white; */
`;

const Container = styled.div`
    /* width: 500px; */
    /* height: 500px; */
    /* border-radius: 50%; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: rgb(253, 249, 206); */
`;

export default Bear;
