import React from "react"

import { Container, Typography, LinearProgress} from "@mui/material";

const MainHeader = (props) => {

    return(
    <Container maxWidth={false} sx={{ bgcolor: "#F5F0F6" }}>
        <Container
            maxwidth="lg"
            sx={{ height: props.loading ? { md: "29vh", xs: "25vh" } : { md: "30vh", xs: "26vh" } }}
        >
            <Typography variant="h2" align="left" fontFamily={"Libre Franklin"}
                fontWeight="900" letterSpacing={"-0.1rem"}
                sx={{ pt: { md: "16vh", xs: "18vh" }, color: "#2B4162", fontSize: { xs: 50, md: 75 } }}>
                AptInspect
            </Typography>
        </Container>
    </Container>
    )
}

export default MainHeader;