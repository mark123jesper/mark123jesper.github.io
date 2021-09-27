import React from 'react';
import styled from 'styled-components';
import SmallTitle from '../SmallTitle';
import Title from '../Title';
import { BusinessCenter, School } from '@mui/icons-material';
import { Grid } from '@mui/material';
import Work from './Work';
import Education from './Education';

function AboutExperience() {
    const briefcase = <BusinessCenter />
    const school = <School />
    return (
        <ResumeStyled>
            <Title title={'Mark\'s Work and Education'} />

            <SmallTitle icon={briefcase} title={'Working Experience'} />
            <Grid container spacing={2} justifyContent="center">
                <Work />
            </Grid>

            <SmallTitle icon={school} title={'Educational Qualifications'} />
            <Grid container spacing={2} justifyContent="center">
                <Education />
            </Grid>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section``;
export default AboutExperience
