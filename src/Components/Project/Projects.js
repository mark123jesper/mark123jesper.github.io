import { Button, Card, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import React from 'react';

const Projects = ({ title, imgSrc, desc, liveLink, sourceCode, tags }) => {


    return (
        <>
            <Grid item xs={12} md={6} lg={4} align="center">
                <Card
                    variant="outlined"
                    sx={{
                        background: "transparent", transition: "0.25s"
                    }}>
                    <CardMedia
                        component={"img"}
                        src={imgSrc}
                        alt={title}
                        width="100%"
                        sx={{ "&:hover": { transform: "scale(1.1)", transition: "0.5s" }, transition: "0.5s" }}
                    />
                    <CardContent>
                        <Typography sx={{ mt: 1.5, minHeight: "50px" }} variant="h5" color="primary" gutterBottom>
                            {title}
                        </Typography>
                        <Typography sx={{ mt: 1.5,  minHeight: "200px" }} variant="body1">
                            {desc}
                        </Typography>
                        <Typography sx={{ mt: 1.5, minHeight: "50px" }} variant="subtitle2" color="secondary" >
                            {tags}
                        </Typography>
                    </CardContent>
                    {liveLink &&
                        <Link sx={{ textDecoration: "none" }} href={liveLink} target="_blank">
                            <Button variant="outlined" sx={{ marginBottom: "10px", marginRight: "5px" }}>
                                Live Link
                            </Button>
                        </Link>
                    }
                    {sourceCode &&
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