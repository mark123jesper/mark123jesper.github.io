import { Grid, Typography } from '@mui/material'
import React from 'react'

const Education = () => {
    return (
        <>
            <Grid item xs={12} md={3}>
                <Typography variant="h6">
                    Jul 2021 - Present
                </Typography>
            </Grid>
            <Grid item xs={12} md={9} sx={{ marginBottom: "30px" }}>
                <Typography variant="h6" color="primary">
                    Software Engineering
                </Typography>
                <Typography variant="subtitle1" color="secondary">
                    KodeGo PH
                </Typography>
                <Typography variant="subtitle2" sx={{ marginBottom: "20px" }}>
                    Taguig City, Philippines
                </Typography>
            </Grid>

            <Grid item xs={12} md={3}>
                <Typography variant="h6">
                    Mar 2014 - Jul 2018
                </Typography>
            </Grid>
            <Grid item xs={12} md={9} sx={{ marginBottom: "30px" }}>
                <Typography variant="h6" color="primary">
                    Bachelor's Degree - Electrical Engineering
                </Typography>
                <Typography variant="subtitle1" color="secondary">
                    Technological University of the Philippines
                </Typography>
                <Typography variant="subtitle2" sx={{ marginBottom: "20px" }}>
                    Taguig City, Philippines
                </Typography>
            </Grid>
        </>
    )
}

export default Education
