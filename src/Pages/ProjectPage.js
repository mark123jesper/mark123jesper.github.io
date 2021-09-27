import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box } from '@mui/system';
import styled from 'styled-components';
import Particle from '../Components/Particle';
import Title from '../Components/Title';
import { Grid } from '@mui/material';
import Projects from '../Components/Project/Projects';
import { ProjectList } from '../Components/Project/ProjectList';

const ProjectPage = () => {

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
                    <Title title={"Projects"} />
                    <Grid container spacing={2} alignItems="center" justify="center">
                        {ProjectList.map((skill, index) => (
                            <Projects
                                key={index}
                                tags={skill.tags}
                                imgSrc={skill.imgSrc}
                                liveLink={skill.liveLink}
                                sourceCode={skill.sourceCode}
                                title={skill.title}
                                desc={skill.desc}
                            />
                        ))}
                    </Grid>
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
