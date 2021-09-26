import { Box } from '@mui/system';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Particle from '../Components/Particle';
import Title from '../Components/Title';

const SkillPage = () => {
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
                    <Title title={"Skills"}/>
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

export default SkillPage
