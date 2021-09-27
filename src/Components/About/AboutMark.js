/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Grid, Typography, Button, Link } from '@mui/material';
import profile from '../../Assets/profile.jpg';
import Title from '../Title';

const AboutMark = () => {
    return (
        <>
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
                        <Button variant="outlined" color="primary" size="large"><Link sx={{ textDecoration: "none" }} color="primary" href="https://drive.google.com/file/d/1LR91btaJ0a4L8AJPXdF1AADZ0td8aOeN/view?usp=sharing" target="_blank">Download Mark's CV</Link></Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default AboutMark
