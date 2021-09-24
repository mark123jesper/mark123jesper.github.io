import React from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';
import Particle from '../Components/Particle';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Home | White Cat Developer</title>
            </Helmet>
            <HomePageStyles>
                <div className="p-particles-js">
                    <Particle />
                </div>
                <div className="typography">
                    <h1>Welcome to <span>White Cat Developer</span>'s Den</h1>
                    <p>
                        Home of aspiration and inspiration.
                    </p>
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/mark123jesper/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/mark123jesper" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
                        <a href="https://www.facebook.com/mark123jesper" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
                        <a href="https://twitter.com/shironekomaru69" target="_blank" rel="noreferrer"><i className="fab fa-twitter-square"></i></a>
                    </div>
                    <Button component={Link} to="/contact" className="button" variant="outlined">Contact Me</Button>
                </div>
            </HomePageStyles>
        </>
    )
}

const HomePageStyles = styled.header`
    width: 100%;
    height: 100%;
    position: relative;

    .p-particles-js {
        position: absolute;
        top: 0;
        left: 0;
    }

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 60%;

        h1 {
            font-size: 4rem;
            margin-bottom: 1rem;

            span {
                font-size: 4rem;
                color: var(--secondary-color)
            }
        }

        p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }
        
        .button {
            color: var(--secondary-color);
            border-color: var(--secondary-color);
            animation: shake 1s cubic-bezier(.36, .07, .19, .97) both infinite;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
            perspective: 1000px;

            @keyframes shake {
            10%,
            90% {
                transform: translate3d(-1px, 0, 0);
            }
            20%,
            80% {
                transform: translate3d(2px, 0, 0);
            }
            30%,
            50%,
            70% {
                transform: translate3d(-4px, 0, 0);
            }
            40%,
            60% {
                transform: translate3d(4px, 0, 0);
            }
            }

            &:hover {
                color: var(--font-color-light);
                background-color: var(--secondary-color);
                border-color: var(--secondary-color);
            }
        }

        .icon {
            margin-bottom: 1.5rem;

            a {
                margin: 1rem;
                
                &:first-child {
                    margin-left: 0;
                }

                &:last-child {
                    margin-right: 0;
                }

                i {
                    font-size: 1.5rem;

                    &:hover {
                        color: var(--secondary-color);
                    }
                }
            }
        }
    }
`;

export default HomePage
