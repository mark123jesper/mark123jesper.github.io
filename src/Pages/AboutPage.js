/* eslint-disable jsx-a11y/img-redundant-alt */
import { Grid, Box, Typography, Container, Button, Link } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Particle from '../Components/Particle';
import Title from '../Components/Title';
import profile from '../Assets/profile.jpg';
import logo from '../Assets/M.png';

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>About | White Cat Developer</title>
            </Helmet>
            <AboutPageStyles>
                <div className="p-particles-js">
                    <Particle />
                </div>
                <Box minHeight="88vh">
                    <Container>
                        <Title title={"About White Cat Dev"} />
                        <Grid container spacing={1} alignItems="center" justify="center">
                            <Grid item xs={12} lg={4} align="center">
                                <img src={logo} alt="White Cat Dev Logo" width="60%" />
                            </Grid>
                            <Grid item xs={12} lg={8} align="center">
                                <Typography variant="body1" align="justify">
                                <Typography variant="body1" component={"span"} color="primary">White Cat Dev</Typography>, along with its Logo, is a humble Trademark and Trade Name made by <Typography variant="body1" component={"span"} color="primary">Mark Jesper Pillerva</Typography> as an entity for the purpose of <Typography variant="body1" component={"span"} color="primary">Web Development</Typography> as well as other possible Software Development projects (eg. <Typography variant="body1" component={"span"} color="primary">Blockchain Development</Typography> and <Typography variant="body1" component={"span"} color="primary">Mobile Development</Typography>).
                                </Typography>
                            </Grid>
                        </Grid>
                        <Title title={"About Mark"} />
                        <Grid container spacing={1} alignItems="center" justify="center">
                            <Grid item xs={12} lg={4} align="center">
                                <img src={profile} alt="Profile picture" width="60%" style={{ borderRadius: "50%" }} />
                            </Grid>
                            <Grid item xs={12} lg={8} align="center">
                                <Grid item>
                                    <Typography variant="body1" align="justify">
                                        <Typography variant="body1" component={"span"} color="primary">Mark Jesper Pillerva</Typography> is a University Graduate of <Typography variant="body1" component={"span"} color="primary"> Bachelor's Degree in Electrical Engineering </Typography>that bravely ventured the Tech Industry. He learned how to design and develop <Typography variant="body1" component={"span"} color="primary">Web Applications</Typography> with the help of <Typography variant="body1" component={"span"} color="primary">Kodego</Typography>, an Online Bootcamp Institution that is based on Metro Manila, Philippines.
                                    </Typography>
                                </Grid>
                                <Grid item mt={3}>
                                    <Button variant="outlined" color="primary"><Link sx={{ textDecoration: "none" }} color="primary" href="https://drive.google.com/file/d/1LR91btaJ0a4L8AJPXdF1AADZ0td8aOeN/view?usp=sharing" target="_blank">Download Mark's CV</Link></Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </AboutPageStyles>
        </>
    )
}

const AboutPageStyles = styled.section`
    position: relative;
    
    .p-particles-js {
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
`;

export default AboutPage
