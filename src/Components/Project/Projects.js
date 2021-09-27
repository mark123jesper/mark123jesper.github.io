import { Button, Card, CardContent, Grid, Link, Typography } from '@mui/material'
import React from 'react';

const Projects = ({ title, imgSrc, desc, liveLink, sourceCode }) => {


    return (
        <>
            <Grid item xs={12} md={6} lg={4} align="center">
                <Card
                    variant="outlined"
                    sx={{
                        background: "transparent", minHeight: "180px", transition: "0.25s"
                    }}>
                    <img src={imgSrc} alt={title} width="100%" />
                    <CardContent>
                        <Typography variant="h5" color="text.secondary" gutterBottom>
                            {title}
                        </Typography>
                        <Typography sx={{ mt: 1.5 }} variant="body2">
                            {desc}
                        </Typography>
                    </CardContent>
                    {liveLink &&
                        <Link sx={{ textDecoration: "none" }} href={liveLink} target="_blank">
                            <Button variant="outlined" sx={{ marginBottom: "10px", marginRight: "5px" }}>
                                Live Link
                            </Button>
                        </Link>
                    }
                    { sourceCode &&
                        <Link sx={{ textDecoration: "none" }} href={sourceCode} target="_blank">
                            <Button variant="outlined" sx={{ marginBottom: "10px", marginLeft: "5px" }}>
                                Source Code
                            </Button>
                        </Link>
                    }
                </Card>
            </Grid>
        </>
    )
}

export default Projects