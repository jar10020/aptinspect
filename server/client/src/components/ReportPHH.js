import React from "react";

import { useState } from "react";

import { Box, Button, createTheme, Container, Typography, Grid, ThemeProvider } from "@mui/material";
import DataPointSummary from "./DataPointSummary";

const theme = createTheme({
    palette: {
        primary: {
            main: "#2B4162",
        },

    },
})

const ReportPHH = (props) => {

    const data = props.data;

    //pest report counter
    const numPestReports = data.filter((entry) => {
        return entry["Complaint Type"].toUpperCase() === "UNSANITARY CONDITION" && entry["Descriptor"].toUpperCase() === "PESTS";
    }).length;
    const pestsRedFlag = numPestReports > 0;
    //heat hot water report counter
    const numHhwReports = data.filter((entry) => {
        return entry["Complaint Type"].toUpperCase() === "HEAT/HOT WATER";
    }).length;
    const hhwRedFlag = numHhwReports > 0;

    return(
        <Container maxWidth={false} sx={{bgcolor: "#F5F0F6"}}>

            {/* PESTS (roaches & mice) */}
            <DataPointSummary
                title="Pests"
                redFlag={pestsRedFlag}
                bodyText= {pestsRedFlag
                    ?
                    "This building has had "+ numPestReports+ " recent pest reports filed with the NYC Department of Housing Preservation and Development since 2011. These reports are filed by tenants, and indicate a problem severe enough for tenants to contact city authorities."
                    :
                    "We didn't find any pest reports on file with this building. We checked the city's 311 report records dating back to 2011."}
            />

            {/* HHW */}
            <DataPointSummary
                title="Heat & Hot Water"
                textColor="#2B4162"
                redFlag={hhwRedFlag}
                titleSizeOverride = "5vh"
                bodyText= {hhwRedFlag //update for HHW
                    ?
                    "This building has had "+ numHhwReports+ " total Heat or Hot Water related reports filed with the NYC Department of Housing Preservation and Development since 2011. These reports could be for specific apartments or incidents that affected the entire building."
                    :
                    "We didn't find any Heat or Hot Water reports on file with this building. We checked the city's 311 report records dating back to 2011."}
            />

        </Container>
    )
};

export default ReportPHH;