import React from 'react';
import { Helmet } from 'react-helmet';
import { Box } from '@mui/system';
import styled from 'styled-components';
import Particle from '../Components/Particle';
import Title from '../Components/Title';

const ProjectPage = () => {
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
                    <Title title={"Projects"}/>
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

export default ProjectPage
