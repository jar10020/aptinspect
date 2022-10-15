import React from "react";
import { useState } from "react";

import { Container, Typography } from "@mui/material";

const ReportHeader = () => {

    return(
        <Container maxWidth={false} sx={{bgcolor: "#2B4162"}}>
            <Container
                maxwidth="lg"
                sx={{height: "30vh"}}
            >
                <Typography variant="h2" align="left" fontFamily={"Libre Franklin"}
                fontWeight="900" letterSpacing={"-0.1rem"}
                sx={{pt: {md:"16vh", xs: "18vh"}, color: "#F5F0F6", fontSize: {xs: 50, md: 75}}}>
                    Your Report
                </Typography>

            </Container>
        </Container>
    );
};

export default ReportHeader;