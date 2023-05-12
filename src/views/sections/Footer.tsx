import styled from "styled-components";

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterText
                style={{
                    display: "none",
                }}
            >
                Made with ❤️
            </FooterText>
        </FooterContainer>
    );
};

const FooterText = styled.h5`
    color: ${({ theme }) => theme.color.gray.base};
    font-size: 1.1rem;
    font-family: ${({ theme }) => theme.font.mono};
`;

const FooterContainer = styled.footer`
    text-align: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
`;

export default Footer;
