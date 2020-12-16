import React from "react";
import styled, { css } from "styled-components";

import { Container, Icon, NumberedHeading, Section, SectionHeading } from "./../../components";
import { tweens } from "./../../themes/styles/abstracts";
import { constants } from "./../../utils";

const elRefs = {
    heading: React.createRef<HTMLHeadingElement>(),
    description: React.createRef<HTMLDivElement>(),
    form: React.createRef<HTMLFormElement>(),
};

const encode = (data: { [key: string]: string } = {}) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

export const Contact = () => {
    const [state, setState] = React.useState({});
    const [displaySuccess, setDisplaySuccess] = React.useState(false);

    React.useEffect(() => {
        tweens.scrollTriggerHeadingTimeline(elRefs.heading.current!);
        const batch = [elRefs.description.current, elRefs.form.current];

        tweens.scrollTriggerBatch(batch);
    }, []);

    const formName = "contact";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": formName,
                ...state,
            }),
        })
            .then(() => {
                setDisplaySuccess(true);
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <ContactContainer>
            <Section>
                <SectionHeadingWrapper>
                    <SectionHeading ref={elRefs.heading}>
                        <NumberedHeading number={3} />
                        Contact
                    </SectionHeading>
                </SectionHeadingWrapper>
                <Container>
                    <Description ref={elRefs.description}>
                        <p>Have a question?</p>
                        <Links
                            href={constants.links.resume}
                            rel="noopener noreferrer"
                            target="_blank"
                            type="application/pdf"
                        >
                            <Icon name="AdobeAcrobat" />
                            <span>Resume</span>
                        </Links>
                        <Links href={`mailto:${constants.links.email}`}>
                            <Icon name="Mail" />
                            <span>{constants.links.email}</span>
                        </Links>
                    </Description>
                    <Form
                        ref={elRefs.form}
                        data-netlify={true}
                        name={formName}
                        method="post"
                        data-netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                    >
                        <FormGroup>
                            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                            <input type="hidden" name="form-name" value="contact" />
                            <p hidden={true}>
                                <label>
                                    Don’t fill this out:
                                    <input name="bot-field" onChange={handleChange} />
                                </label>
                            </p>
                            <FormInput
                                type="text"
                                required={true}
                                placeholder="Full name"
                                id="name"
                                name="name"
                                onChange={handleChange}
                            />
                            <FormLabel htmlFor="name">Full name</FormLabel>
                        </FormGroup>
                        <FormGroup>
                            <FormInput
                                type="email"
                                required={true}
                                placeholder="Email address"
                                id="email"
                                name="email"
                                onChange={handleChange}
                            />
                            <FormLabel htmlFor="email">Email address</FormLabel>
                        </FormGroup>
                        <FormGroup>
                            <FormTextArea
                                id="message"
                                minLength={1}
                                required={true}
                                placeholder="Message"
                                name="message"
                                onChange={handleChange}
                            />
                            <FormLabel htmlFor="message">Message</FormLabel>
                        </FormGroup>
                        <FormGroup>
                            <FormButton type="submit">Send message</FormButton>
                        </FormGroup>
                        {displaySuccess && (
                            <>
                                <p>Thanks!</p>
                                <p>I'll do my best to get back to you</p>
                            </>
                        )}
                    </Form>
                </Container>
            </Section>
        </ContactContainer>
    );
};

const FormButton = styled.button`
    ${({ theme }) => theme.mixins.button};
`;

const FormLabel = styled.label`
    font-size: 1.2rem;
    margin-left: 1rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
    color: ${({ theme }) => theme.color.gray.base};
`;

const FormTextArea = styled.textarea`
    width: 100%;
    font-family: inherit;
    letter-spacing: 0.5px;
    font-size: 1.2rem !important;
    line-height: 1.6rem !important;
    display: block;

    padding: 1rem 1rem;

    height: 10rem;
    background-color: transparent;
    border: 0;
    border-bottom: ${({ theme }) => `1px solid  ${theme.color.gray.base}`};
    outline: none;
    color: ${({ theme }) => theme.color.white};
    border-bottom: ${({ theme }) => ` 1px solid  ${theme.color.white}`};

    &:focus:valid {
        border-bottom: ${({ theme }) => `1px solid  ${theme.color.secondary.base}`};
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
    width: 100%;
    letter-spacing: 0.5px;
    font-family: inherit;
    padding: 1rem 1rem;

    background-color: transparent;
    border: 0;
    border-bottom: ${({ theme }) => `1px solid  ${theme.color.gray.base}`};
    outline: none;
    color: ${({ theme }) => theme.color.white};
    display: block;
    font-size: 1.2rem;

    &:focus,
    &:active {
        border-bottom: ${({ theme }) => ` 1px solid  ${theme.color.white}`};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        box-shadow: ${({ theme }) => ` 0 0 0 30px ${theme.color.gray.dark} inset`};
        -webkit-text-fill-color: ${({ theme }) => `${theme.color.white} !important`};
        background-color: ${({ theme }) => theme.color.gray.dark};
    }

    &:focus:valid {
        border-bottom: ${({ theme }) => `1px solid  ${theme.color.secondary.base}`};
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

const Form = styled.form`
    ${({ theme }) => theme.mixins.initialHidden};
`;

const Links = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    font-size: 1.2rem;
    margin-top: 1rem;
    transition: all 0.3s;

    svg {
        fill: ${({ theme }) => theme.color.white};
        width: 2.5rem;
        max-height: 2.5rem;
        margin-right: 1rem;
        transition: all 0.3s;
    }

    &:hover {
        color: ${({ theme }) => theme.color.primary.base};

        svg {
            fill: ${({ theme }) => theme.color.primary.base};
        }
    }
`;

const Description = styled.div`
    color: ${({ theme }) => theme.color.gray.base};
    ${({ theme }) => theme.mixins.initialHidden};

    &:first-child {
        margin-top: 2rem;
    }

    ${({ theme }) =>
        theme.mixins.respond(
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

const SectionHeadingWrapper = styled.div`
    overflow: hidden;
    > * {
        ${({ theme }) => theme.mixins.initialHidden};
    }
`;

const ContactContainer = styled.div``;

export default Contact;
