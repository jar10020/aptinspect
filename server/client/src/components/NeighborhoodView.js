import React from "react";

import { Box, Button, createTheme, Container, Typography, Grid, ThemeProvider } from "@mui/material";
import DataPointSummary from "./DataPointSummary";

const NeighborhoodView = () => {


    return(
        <Container maxWidth={false} sx={{bgcolor: "#B07E65"}}>
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
                            sx={{ color: props.textColor }}
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
        </Container>
    )
}

export default NeighborhoodView;