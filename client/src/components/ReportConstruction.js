import React from "react";

import { Box, Button, createTheme, Container, Typography, Grid, ThemeProvider } from "@mui/material";
import DataPointSummary from "./DataPointSummary";

const ReportConstruction = () => {
    
    return(
        <Container maxWidth={false} sx={{bgcolor: "#B07E65"}}>
            <DataPointSummary
                textColor="#F5F0F6"
                title="Construction"
                bodyText="Lorem ipsum"
            />
        </Container>
    );
}

export default ReportConstruction;