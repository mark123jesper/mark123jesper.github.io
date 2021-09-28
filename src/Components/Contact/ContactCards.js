import { Grid, Paper, Typography } from '@mui/material';
import React from 'react'

const ContactCards = ({icon, title, details}) => {
    return (
        <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2 }}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={12} lg={2} alignItems="center" justifyContent="center">
                        {/* <LocalPhoneIcon /> */}
                        {icon}
                    </Grid>
                    <Grid item xs={12} md={12} lg={10} alignItems="center" justifyContent="center">
                        <Typography variant="h6" sx={{wordBreak: "break-all", wordWrap: "break-word"}}>
                            {title}
                        </Typography>
                        <Typography variant="body1" sx={{wordBreak: "break-all", wordWrap: "break-word"}}>
                            {details}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default ContactCards
