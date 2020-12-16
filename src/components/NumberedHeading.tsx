import styled from "styled-components";

interface Props {
    number: number;
}

export const NumberedHeading: React.FC<Props> = (props) => {
    const numberText = props.number < 10 ? `0${props.number}` : props.number;
    return <NumberedHeadingContainer>{numberText}.</NumberedHeadingContainer>;
};

const NumberedHeadingContainer = styled.span`
    font-family: ${(props) => props.theme.font.mono};
    font-size: 0.9em;
    color: ${(props) => props.theme.color.gray.base};
    margin-right: 0.5rem;
`;

export default NumberedHeading;
