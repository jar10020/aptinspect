import React from "react";

import { Box, Button, createTheme, Container, Typography, Grid, ThemeProvider } from "@mui/material";

const DataPointSummary = (props) => { //str bodyText, str title, bool redflag, str titleSizeOverride

    return (
        <Grid
            container
            direction="column"
            sx={{
                px: { lg: "30vw", md: "25vw", xs: "10vw" },
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
                        <Typography
                            fontSize={props.titleSizeOverride == null ? { md: "6vh", xs: "4vh" } : {md: props.titleSizeOverride, xs: "3vh"}}
                            align="left"
                            fontFamily={"Libre Franklin"}
                            fontWeight="900"
                            letterSpacing={"-0.1rem"}
                            sx={{ color: "#2B4162" }}
                        >
                            {props.title}
                        </Typography>
                    </Grid>
                    {/* Status color bar */}
                    <Grid item xs>
                        <Box
                            sx={{
                                height: "100%",
                                width: "100%",
                                bgcolor: props.redFlag ? "#D33E43" : "#B0E298"  //will become variable obviously
                            }} />
                    </Grid>
                </Grid>

            </Grid>

            <Grid item
                sx={{ pt: "1vh" }}
            >
                {/* INFO DESCRIPTION (PARAGRAPH ETC.) */}
                <Typography fontSize="2vh" fontFamily={"Libre Franklin"} fontWeight="500">
                    {props.bodyText}
                </Typography>
            </Grid>

            {/* experimental: button to see table of reports (in popup diaglogue) 
                *** obviously will only appear if there is data to show. should implement
                *** if i have extra time tbh but probably wont get around to it lol. maybe
                *** something to implement after sending resumes out?
                */}
            {/* <Grid item align="center">
                <ThemeProvider theme={theme}>
                    <Button variant="contained" size="small" fullWidth color="primary">
                        View reports
                    </Button>
                </ThemeProvider>
            </Grid> */}

        </Grid>
    );
}

export default DataPointSummary;