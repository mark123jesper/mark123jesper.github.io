import { Grid, Paper, Typography } from '@mui/material';
import React from 'react'

const ContactCards = ({icon, title, details}) => {
    return (
        <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2 }}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={3} align="center" alignItems="center" justifyContent="center">
                        {/* <LocalPhoneIcon /> */}
                        {icon}
                    </Grid>
                    <Grid item xs={12} md={9} alignItems="center" justifyContent="center">
                        <Typography variant="h6">
                            {/* Phone */}
                            {title}
                        </Typography>
                        <Typography variant="body1">
                            {/* +63 995 1919 650 */}
                            {details}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default ContactCards
