import { Grid, Typography } from '@mui/material'
import React from 'react'

const Work = () => {
    return (
        <>
            <Grid item xs={12} md={3}>
                <Typography variant="h6">
                    Feb 2021 - Jul 2021
                </Typography>
            </Grid>
            <Grid item xs={12} md={9} sx={{ marginBottom: "30px" }}>
                <Typography variant="h6" color="primary">
                    Kennedy Energy and Development Corp.
                </Typography>
                <Typography variant="subtitle1" color="secondary">
                    Team Leader
                </Typography>
                <Typography variant="subtitle2" sx={{ marginBottom: "20px" }}>
                    Mandaluyong City, Philippines
                </Typography>
                <Typography variant="body1">
                    &#x25C8; Led team of up to 4 members while providing exceptional customer service.<br />
                    &#x25C8; Built strong relationships with customers through positive attitude and attentive response.<br />
                    &#x25C8; Performed construction operations and installation of telecommunications power upgrades for telecom company.<br />
                    &#x25C8; Performed telecommunications power upgrade site surveys.
                </Typography>
            </Grid>

            <Grid item xs={12} md={3}>
                <Typography variant="h6">
                    Aug 2018 - Aug 2020
                </Typography>
            </Grid>
            <Grid item xs={12} md={9} sx={{ marginBottom: "30px" }}>
                <Typography variant="h6" color="primary">
                    Powercraft Solutions and Data Infrastructure, Inc.
                </Typography>
                <Typography variant="subtitle1" color="secondary">
                    Field Service Engineer
                </Typography>
                <Typography variant="subtitle2" sx={{ marginBottom: "20px" }}>
                    Pasig City, Philippines
                </Typography>
                <Typography variant="body1">
                    &#x25C8; Tested equipment performance and demonstrated operation and servicing of equipment to customer.<br />
                    &#x25C8; Maintained tools and equipment, parts inventory and library of machine manuals.<br />
                    &#x25C8; Repaired and calibrated systems and equipment post-installation.<br />
                    &#x25C8; Recommended design changes, upgrades and replacements to improve systems performance.<br />
                    &#x25C8; Performed onsite installation, modification and maintenance of systems and equipment.<br />
                </Typography>
            </Grid>

            <Grid item xs={12} md={3}>
                <Typography variant="h6">
                    Apr 2021 - Jun 2021
                </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
                <Typography variant="h6" color="primary">
                    Mekanismo, Inc.
                </Typography>
                <Typography variant="subtitle1" color="secondary">
                    Internship
                </Typography>
                <Typography variant="subtitle2" sx={{ marginBottom: "20px" }} >
                    Taguig City, Philippines
                </Typography>
                <Typography variant="body1">
                    &#x25C8; Answered incoming telephone calls, took down messages and provided information.<br />
                    &#x25C8; Assisted with project research, field work and preliminary design calculations and analysis.<br />
                    &#x25C8; Provided engineering support to Technical team during commissioning phase of project.<br />
                </Typography>
            </Grid>
        </>
    )
}

export default Work
