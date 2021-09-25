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
                </div>
                <Button component={Link} to="/contact" className="button" variant="outlined">Contact Me</Button>
            </HomePageStyles>
        </>
    )
}

const HomePageStyles = styled.header`
    position: relative;

    .p-particles-js {
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1
    }
        
    .button {
        animation: shake 1s cubic-bezier(.36, .07, .19, .97) both infinite;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;

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
    }

`;

export default HomePage
