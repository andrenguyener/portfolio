import styled from "styled-components";

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>Made with ❤️</FooterText>
        </FooterContainer>
    );
};

const FooterText = styled.h5`
    color: ${(props) => props.theme.color.gray.base};
    font-size: 1.3rem;
`;

const FooterContainer = styled.footer`
    text-align: center;
    margin-bottom: 2rem;
`;

export default Footer;
