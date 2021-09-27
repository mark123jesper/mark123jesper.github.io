import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Particle from '../Components/Particle';
import Title from '../Components/Title';
import Skills from '../Components/Skill/Skills';
import Tools from '../Components/Skill/Tools';
import { SkillList, ToolsList } from '../Components/Skill/SkillList'

const SkillPage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return (
        <>
            {/* #636e72 */}
            <Helmet>
                <title>Skill | White Cat Developer</title>
            </Helmet>
            <AboutPageStyles>
                <div className="p-particles-js">
                    <Particle />
                </div>
                <Box minHeight="88vh">
                    <Title title={"Technology Stacks"} />
                    <Grid container spacing={2} alignItems="center" justify="center">
                        {SkillList.map((skill, index) => (
                            <Skills
                                key={index}
                                title={skill.title}
                                desc={skill.desc}
                                imgSrc={skill.imgSrc}
                            />
                        ))}
                    </Grid>
                    <Title title={"Tools and Platforms"} />
                    <Grid container spacing={2} alignItems="center" justify="center">
                        {ToolsList.map((tool, index) => (
                            <Tools
                                key={index}
                                title={tool.title}
                                desc={tool.desc}
                                imgSrc={tool.imgSrc}
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

export default SkillPage
