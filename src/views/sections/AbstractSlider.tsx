import styled, { keyframes } from "styled-components";

export const AbstractSlider = () => {
    return (
        <Container>
            <ImageSlider />
            {/* <TextSlider>
                So that a thing will either be at rest or must be moved ad infinitum, unless
                something more powerful gets in its way.
            </TextSlider> */}
        </Container>
    );
};

export default AbstractSlider;

export const outlinescroll = keyframes`
	0% {
        background-position-x: 0%;
        opacity: 0;
    }

	3% {
        opacity: 1;
    }

    97% {
        opacity: 1;
    }

    100% {
        background-position-x: 100%;
        opacity: 0;
    }
`;

const Container = styled.div`
    width: 100%;
    border-top: 1px solid ${(props) => props.theme.color.gray.light_1};
    border-bottom: 1px solid ${(props) => props.theme.color.gray.light_1};
    margin-bottom: 3rem;
    pointer-events: none;
    overflow: hidden;
`;

const ImageSlider = styled.img`
    width: 100%;
    height: 200px;
    overflow: hidden;
    transform: scale(2.75);
    background-image: url("/images/abstract_slider.webp");
    background-size: auto 100%;
    background-repeat: repeat-x;
    background-position: 0% 0%;
    animation-name: ${outlinescroll};
    animation-duration: 30s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state: running;
    mix-blend-mode: exclusion;
    filter: invert(100%);
`;

// const TextSlider = styled.div`
//     width: 100%;
//     background-color: black;
//     filter: invert(100%);
// `;
