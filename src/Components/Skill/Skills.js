import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const Skills = ({ title, imgSrc, desc }) => {
    return (
        <>
            <Grid item xs={12} md={6} lg={4} align="center">
                <Card
                    variant="outlined"
                    sx={{
                        minHeight: "180px", transition: "0.25s",
                        "&:hover": { transform: "scale(0.95)", transition: "0.25s", zIndex: 2 }
                    }}>
                    <CardContent>
                        <CardMedia>
                            {imgSrc}
                        </CardMedia>
                        <Typography variant="h5" color="primary" gutterBottom>
                            {title}
                        </Typography>
                        <Typography sx={{ mt: 1.5 }} variant="body1">
                            {desc}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default Skills
