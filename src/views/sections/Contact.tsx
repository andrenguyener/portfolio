import styled, { css } from "styled-components";

import { Container, Section, SectionHeading } from "./../../components";
import { mixins } from "./../../themes/styles/abstracts";

export const Contact = () => {
    return (
        <ContactContainer>
            <Section>
                <SectionHeading>Contact</SectionHeading>

                <Container>
                    <Description>
                        <p>Have a question?</p>
                        <Links
                            href="/resume.pdf"
                            rel="noopener noreferrer"
                            target="_blank"
                            type="application/pdf"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 19.86">
                                <path
                                    className="cls-1"
                                    d="M12.64,12.88a2.36,2.36,0,0,1-1,0,4.5,4.5,0,0,1-1.24-.37,3.75,3.75,0,0,1,1.78.1,1.6,1.6,0,0,1,.43.25m-4.07-.67-.09,0-.58.15-.24.07c-.5.12-1,.25-1.52.41.19-.47.37-.93.54-1.39l.4-1,.22.35a6.54,6.54,0,0,0,1.27,1.42M7.29,7A4.13,4.13,0,0,1,7,8.63a2.64,2.64,0,0,1,0-2,1,1,0,0,1,.17-.27A1.17,1.17,0,0,1,7.29,7M4.68,14.22a6.17,6.17,0,0,1-.38.63c-.32.48-.84,1-1.1,1a.11.11,0,0,1-.1-.05.12.12,0,0,1,0-.09,1.57,1.57,0,0,1,.58-.77,5.76,5.76,0,0,1,1-.71m8.81-1.32c0-.58-1-1-1-1a3.83,3.83,0,0,0-1.26-.2A7.25,7.25,0,0,0,9.46,12a6,6,0,0,1-1.55-1.6,8.2,8.2,0,0,1-.47-.79A6,6,0,0,0,8,6.94c0-.77-.39-1.3-.87-1.3s-.61.25-.84.73a3.73,3.73,0,0,0,.32,3.24c-.22.53-.43,1.07-.63,1.6s-.51,1.33-.8,2a7.07,7.07,0,0,0-2,1.19,2.18,2.18,0,0,0-.83,1.3.84.84,0,0,0,.23.62.86.86,0,0,0,.64.28c.8,0,1.56-1.09,1.71-1.31a12.17,12.17,0,0,0,.83-1.5,19.31,19.31,0,0,1,2.1-.6l.25-.07.58-.15.65-.18a5.77,5.77,0,0,0,2.24.87,2.8,2.8,0,0,0,1.58-.16.58.58,0,0,0,.35-.57m1.41,5A1.07,1.07,0,0,1,13.79,19h-12A1.08,1.08,0,0,1,.62,17.9V1.76A1.08,1.08,0,0,1,1.75.62H9.93V4a1.76,1.76,0,0,0,1.82,1.84h3.12l0,0ZM14.34,5H11.89a1.08,1.08,0,0,1-1.13-1.13V1.37Zm1.39,13V5.59l-5-5.15v0h0L10.34,0H1.86A1.8,1.8,0,0,0,0,1.87V18a1.8,1.8,0,0,0,1.86,1.86h12A1.8,1.8,0,0,0,15.76,18"
                                />
                            </svg>
                            <span>Resume</span>
                        </Links>
                        <Links href="mailto:andrenguyenp@gmail.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 11.86">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_2-2" data-name="Layer 2">
                                        <path
                                            className="cls-1"
                                            d="M0,1v9.82a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1H1A1,1,0,0,0,0,1Zm2.24.21h13.6L9.26,7.11a.36.36,0,0,1-.44,0ZM1.23,2,8,8A1.56,1.56,0,0,0,10,8l6.73-6v8.64H1.23Z"
                                        />
                                    </g>
                                </g>
                            </svg>
                            <span>andrenguyenp@gmail.com</span>
                        </Links>
                    </Description>
                    <Form>
                        <FormGroup>
                            <FormInput
                                type="text"
                                required={true}
                                placeholder="Full name"
                                id="name"
                            />
                            <FormLabel htmlFor="name">Full name</FormLabel>
                        </FormGroup>
                        <FormGroup>
                            <FormInput
                                type="email"
                                required={true}
                                placeholder="Email address"
                                id="email"
                            />
                            <FormLabel htmlFor="email">Email address</FormLabel>
                        </FormGroup>
                        <FormGroup>
                            <FormTextArea
                                id="message"
                                minLength={1}
                                required={true}
                                placeholder="Message"
                            />
                            <FormLabel htmlFor="message">Message</FormLabel>
                        </FormGroup>
                        <FormGroup>
                            <FormButton>Send message</FormButton>
                        </FormGroup>
                    </Form>
                </Container>
            </Section>
        </ContactContainer>
    );
};

const FormButton = styled.button`
    display: block;
    margin-left: auto;
    margin-right: 2rem;
    padding: 1rem 1rem 0 1rem;
    font-family: inherit;
    font-size: 1.3rem;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.color.gray.base};
    background-color: transparent;
    border: none;
    transform: translateZ(0);
    transition: color 0.3s;

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${(props) => props.theme.color.primary.base};
        transform: scaleX(0);
        transform-origin: 0 50%;
        transition-property: transform;
        transition: all 0.3s ease-out;
    }

    &::after {
        content: "";
        display: block;
        position: relative;
        border-top: 1px solid grey;
        width: 50%;
        margin-top: 0.6rem;
        margin-left: -1rem;
        transition: all 0.3s ease-out;
    }

    &:hover {
        color: ${(props) => props.theme.color.white};
        cursor: pointer;

        &::before {
            transform: scaleX(1);
        }

        &::after {
            width: 100%;
            border-top: ${(props) => ` 1px solid  ${props.theme.color.primary.base}`};
        }
    }
`;

const FormLabel = styled.label`
    font-size: 1.2rem;
    margin-left: 1rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
    color: ${(props) => props.theme.color.gray.base};
`;

const FormTextArea = styled.textarea`
    width: 90%;
    font-family: inherit;
    letter-spacing: 0.5px;
    font-size: 1.2rem !important;
    line-height: 1.6rem !important;
    display: block;

    padding: 1rem 1rem;

    height: 10rem;
    background-color: transparent;
    border: 0;
    border-bottom: ${(props) => `1px solid  ${props.theme.color.gray.base}`};
    outline: none;
    color: ${(props) => props.theme.color.white};
    border-bottom: ${(props) => ` 1px solid  ${props.theme.color.white}`};

    &:focus:valid {
        border-bottom: ${(props) => `1px solid  ${props.theme.color.secondary.base}`};
    }

    &:placeholder-shown + ${FormLabel} {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-4rem);
    }

    &:placeholder-shown ~ ${FormLabel} {
        opacity: 0;
    }
`;

const FormInput = styled.input`
    width: 90%;
    letter-spacing: 0.5px;
    font-family: inherit;
    padding: 1rem 1rem;

    background-color: transparent;
    border: 0;
    border-bottom: ${(props) => `1px solid  ${props.theme.color.gray.base}`};
    outline: none;
    color: ${(props) => props.theme.color.white};
    display: block;
    font-size: 1.2rem;

    &:focus,
    &:active {
        border-bottom: ${(props) => ` 1px solid  ${props.theme.color.white}`};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        box-shadow: ${(props) => ` 0 0 0 30px ${props.theme.color.gray.dark} inset`};
        -webkit-text-fill-color: ${(props) => `${props.theme.color.white} !important`};
        background-color: ${(props) => props.theme.color.gray.dark};
    }

    &:focus:valid {
        border-bottom: ${(props) => `1px solid  ${props.theme.color.secondary.base}`};
    }

    &:focus:invalid {
    }

    &::-webkit-input-placeholder {
    }

    &:placeholder-shown + ${FormLabel} {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-4rem);
    }
`;

const FormGroup = styled.div`
    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`;

const Form = styled.form``;

const Links = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.color.white};
    font-size: 1.2rem;
    margin-top: 1rem;
    transition: all 0.3s;

    svg {
        fill: ${(props) => props.theme.color.white};
        width: 2.5rem;
        max-height: 2.5rem;
        margin-right: 1rem;
        transition: all 0.3s;
    }

    &:hover {
        color: ${(props) => props.theme.color.primary.base};

        svg {
            fill: ${(props) => props.theme.color.primary.base};
        }
    }
`;

const Description = styled.div`
    color: ${(props) => props.theme.color.gray.base};

    &:first-child {
        margin-top: 2rem;
    }

    ${mixins.respond(
        "phone",
        css`
            margin-bottom: 2rem;

            &:first-child {
                margin-top: 0;
                margin-bottom: 5rem;
            }
        `
    )}
`;

const ContactContainer = styled.div``;

export default Contact;
