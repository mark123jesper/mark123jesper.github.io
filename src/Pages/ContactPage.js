import React from 'react'
import { Helmet } from 'react-helmet'
import { InnerLayout, MainLayout } from '../Styles/Layouts'
import styled from 'styled-components'
import Title from '../Components/Title'
import { Button } from '@mui/material'
import Particle from '../Components/Particle'
import ContactItem from '../Components/ContactSection/ContactItem'

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact | White Cat Developer</title>
            </Helmet>
            <MainLayout>
                <Title title={"Contact"} />
                <ContactPageStyles>
                    <div className="p-particles-js">
                        <Particle />
                    </div>
                    <InnerLayout>
                        <h4 className="contact-title">Get in Touch</h4>
                        <div className="left-content">
                            <div className="form-field">
                                <label htmlFor="name">
                                    Enter your Name
                                </label>
                                <input type="text" id="name" />
                            </div>

                            <div className="form-field">
                                <label htmlFor="email">
                                    Enter your Email
                                </label>
                                <input type="email" id="email" />
                            </div>

                            <div className="form-field">
                                <label htmlFor="subject">
                                    Message Subject
                                </label>
                                <input type="text" id="subject" />
                            </div>

                            <div className="textarea">
                                <label htmlFor="message">
                                    Your Message Here
                                </label>
                                <textarea name="message" id="message" cols="30" rows="10" />
                            </div>

                            <Button variant="outlined" className="button">Submit Message
                            </Button>
                        </div>

                        <div className="right-content">
                            <ContactItem />
                        </div>
                    </InnerLayout>
                </ContactPageStyles>
            </MainLayout>
        </>
    )
}

export default ContactPage;

const ContactPageStyles = styled.section`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    position: relative;

    .p-particles-js {
        position: absolute;
        top: 0;
        left: 0;
    }

    .contact-title {
        margin-bottom: 2rem;
        font-size: 1.8rem;
    }
    
    .left-content {
        width: 100%;

        .form-field {
            margin-bottom: 2rem;
            position: relative;

            label {
                position: absolute;
                left: 20px;
                top: -13px;
                display: inline-block;
                background-color: var(--background-color-dark);

                &::after {
                    content: '*';
                    color: var(--secondary-color);
                }

            }

            input {
                border: 1px solid var(--border-color);
                outline: none;
                background: transparent;
                height: 2.5rem;
                padding: 0.5rem;
                width:100%;
            }
        }

        .textarea {
            margin-bottom: 2rem;
            position: relative;

            textarea {
                border: 1px solid var(--border-color);
                outline: none;
                background: transparent;
                padding: 0.5rem;
                width:100%;
                resize: vertical;
            }

            label {
                position: absolute;
                left: 20px;
                top: -13px;
                display: inline-block;
                background-color: var(--background-color-dark);

                &::after {
                content: '*';
                color: var(--secondary-color);
                }
            }

        }

        .button {
            color: var(--secondary-color);
            border-color: var(--secondary-color);

            &:hover {
                color: var(--font-color-light);
                background-color: var(--secondary-color);
            }
        }
    }

    .right-content {
        width: 100%;
    }
`;
