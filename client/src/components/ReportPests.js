import React from "react";

import { useState } from "react";

import { Box, Button, createTheme, Container, Typography, Grid, ThemeProvider } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#2B4162",
        },

    },
})

const ReportPests = (props) => {

    //const numReports = props.numReports;
    const data = props.data;
    console.log(data);

    if(data!=null) {
    return(
        <Container maxWidth={false} sx={{bgcolor: "#F5F0F6"}}>
            {/* center on page box */}
            {/* <Box
                display="flex"
                justifyContent={"center"}
                sx={{
                    py: "15vh"
                }}
            > */}

            {/* PESTS (roaches & mice) */}
            <Grid
                container
                direction="column"
                sx={{
                    px: {lg: "30vw", md: "25vw", xs: "10vw"},
                    py: "10vh"
                }}
            >
                <Grid item>
                    {/* INFO HEADER & STATUS BAR */}
                    <Grid
                        container
                        display={"flex"}
                        direction="row"
                        spacing={1}
                    >
                        {/* Header text */}
                        <Grid item xs="auto">
                            <Typography fontSize={{md: "6vh", xs: "4vh"}} align="left" fontFamily={"Libre Franklin"}
                                fontWeight="900" letterSpacing={"-0.1rem"}
                                sx={{color: "#2B4162"}}
                            >
                                Pests
                            </Typography>
                        </Grid>
                        {/* Status color bar */}
                        <Grid item xs>
                            <Box 
                            sx={{
                                height: "100%",
                                width: "100%",
                                bgcolor: "#D33E43"  //will become variable obviously
                            }}/>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item
                    sx={{pt: "1vh"}}
                >
                    {/* INFO DESCRIPTION (PARAGRAPH ETC.) */}
                    <Typography fontSize="2vh" fontFamily={"Libre Franklin"} fontWeight="500">
                        This building has had {props.numReports} recent pest reports filed with the NYC Department of Housing
                        Preservation and Development. These reports are filed by tenants, and indicate a problem
                        severe enough for tenants to contact city authorities.
                    </Typography>
                </Grid>

                {/* experimental: button to see table of reports (in popup diaglogue) 
                *** obviously will only appear if there is data to show. should implement
                *** if i have extra time tbh but probably wont get around to it lol. maybe
                *** something to implement after sending resumes out?
                */}
                <Grid item align="center">
                    <ThemeProvider theme={theme}>   
                        <Button variant="contained" size="small" fullWidth color="primary"> 
                            View reports
                        </Button>
                    </ThemeProvider>
                </Grid>

            </Grid>


            {/* BED BUGS */}
            <Grid
                container
                direction="column"
                sx={{
                    px: {lg: "30vw", md: "25vw", xs: "10vw"},
                    py: "6vh"
                }}
            >
                <Grid item>
                    {/* INFO HEADER & STATUS BAR */}
                    <Grid
                        container
                        display={"flex"}
                        direction="row"
                        spacing={1}
                    >
                        {/* Header text */}
                        <Grid item xs="auto">
                            <Typography fontSize={{md: "6vh", xs: "4vh"}} align="left" fontFamily={"Libre Franklin"}
                                fontWeight="900" letterSpacing={"-0.1rem"}
                                sx={{color: "#2B4162"}}
                            >
                                Bed Bugs
                            </Typography>
                        </Grid>
                        {/* Status color bar */}
                        <Grid item xs>
                            <Box 
                            sx={{
                                height: "100%",
                                width: "100%",
                                bgcolor: "#ECB800"  //will become variable obviously
                            }}/>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item
                    sx={{pt: "1vh"}}
                >
                    {/* INFO DESCRIPTION (PARAGRAPH ETC.) */}
                    <Typography fontSize="2vh" fontFamily={"Libre Franklin"} fontWeight="500">
                        This building did not file its required annual Bed Bug report with the
                        NYC Department of Housing Preservation and Development, so we can't say for sure what its history is.
                    </Typography>
                </Grid>

            </Grid>


            {/* </Box> */}
        </Container>
    )} else {
        return <div/>;
    }
};

export default ReportPests;