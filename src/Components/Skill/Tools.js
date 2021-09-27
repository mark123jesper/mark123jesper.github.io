import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const Tools = ({ title, imgSrc }) => {
    return (
        <>
            <Grid item xs={6} md={4} lg={3} align="center" justify="center">
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
                        <Typography variant="h5" color="text.secondary">
                            {title}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default Tools
