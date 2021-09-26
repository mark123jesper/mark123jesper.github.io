import { Box, Container} from '@mui/material';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Particle from '../Components/Particle';
import AboutCompany from '../Components/About/AboutCompany';
import AboutMark from '../Components/About/AboutMark';
import AboutOffers from '../Components/About/AboutOffers';

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

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
                        <AboutCompany />
                        <AboutMark />
                        <AboutOffers />
                    </Container>
                </Box>
            </AboutPageStyles>
        </>
    )
}

const AboutPageStyles = styled.section`
    position: relative;
    margin-bottom: 60px;
    
    .p-particles-js {
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
`;

export default AboutPage
