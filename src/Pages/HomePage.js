import React from 'react';
import { Button, Grid, Typography, Link, Stack } from '@mui/material';
import styled from 'styled-components';
import Particle from '../Components/Particle';
import { Link as RouteLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box } from '@mui/system';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Home | White Cat Developer</title>
            </Helmet>
                <HomePageStyles>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="88vh"
                    >
                        <div className="p-particles-js">
                            <Particle />
                        </div>
                        <Grid container spacing={2} align="center" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Grid item xs={12}>
                                <Typography variant="h1">
                                    Welcome to <Typography component="span" variant="h1" color="primary">White Cat Developer</Typography>'s Den
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    Home of aspiration and inspiration.
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Link href="https://www.linkedin.com/in/mark123jesper/" target="_blank" variant="h4"><i className="fab fa-linkedin"></i></Link>
                                    <Link href="https://github.com/mark123jesper" target="_blank" variant="h4"><i className="fab fa-github-square"></i></Link>
                                    <Link href="https://www.facebook.com/mark123jesper" target="_blank" variant="h4"><i className="fab fa-facebook-square"></i></Link>
                                    <Link href="https://twitter.com/shironekomaru69" target="_blank" variant="h4"><i className="fab fa-twitter-square"></i></Link>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Button component={RouteLink} to="/contact" className="button" size="large" variant="outlined">
                                    Contact Me
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
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
