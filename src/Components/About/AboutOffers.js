import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react';
import Title from '../Title';

const AboutOffers = () => {
    return (
        <>
            <Title title={"Offers"} />
            <Grid container spacing={3} alignItems="center" justify="center">
                <Grid item xs={12} lg={4} align="center">
                    <Card
                        variant="outlined"
                        sx={{
                            transition: "0.25s",
                            "&:hover": { transform: "scale(1.1)", transition: "0.25s", zIndex: 2 }
                        }}>
                        <CardContent>
                            <Typography variant="h5" color="text.secondary" gutterBottom>
                                Web Application Development
                            </Typography>
                            <Typography sx={{ mt: 1.5 }} variant="body2">
                                Offers Software Development for your website in variety. Specializes in SPA (Single Page Applications) Development.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={4} align="center">
                    <Card
                        variant="outlined"
                        sx={{
                            transition: "0.25s",
                            "&:hover": { transform: "scale(1.1)", transition: "0.25s", zIndex: 2 }
                        }}>
                        <CardContent>
                            <Typography variant="h5" color="text.secondary" gutterBottom>
                                Mobile Application Development
                            </Typography>
                            <Typography sx={{ mt: 1.5 }} variant="body2">
                                TBD
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={4} align="center">
                    <Card
                        variant="outlined"
                        sx={{
                            transition: "0.25s",
                            "&:hover": { transform: "scale(1.1)", transition: "0.25s", zIndex: 2 }
                        }}>
                        <CardContent>
                            <Typography variant="h5" color="text.secondary" gutterBottom>
                                Blockchain Application and System Development
                            </Typography>
                            <Typography sx={{ mt: 1.5 }} variant="body2">
                                TBD
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default AboutOffers
