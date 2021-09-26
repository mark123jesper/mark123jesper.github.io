import { Grid, Typography } from '@mui/material'
import React from 'react';
import Title from '../Title';
import logo from '../../Assets/M.png';

const AboutCompany = () => {
    return (
        <>
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
        </>
    )
}

export default AboutCompany
