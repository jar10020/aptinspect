import React from 'react';
import { useState, useEffect } from 'react';
import {CssBaseline, Box, Container, AppBar, Typography, Grow, Grid, Grid2, TextField, LinearProgress} from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


import MainHeader from "./components/MainHeader.js";
import AddressForm from "./components/AddressForm.js"
import FormSnackbar from './components/FormSnackbar';
import ReportHeader from './components/ReportHeader.js';
import fetchPHH from './components/fetchBuildingData.js';
import ReportPHH from './components/ReportPHH.js';
import ReportConstruction from './components/ReportConstruction.js';


import { bgcolor } from '@mui/system';

const App = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: "#B0E298",
            },
            secondary: {
                main: "#F5F0F6",
            },
        }
    })

    //borough selector state handling
    const [borough, setBorough] = useState('');
    const handleBoroughChange = (event) => {
        setBorough(event.target.value);
    };

    //address input handling
    const[address, setAddress] = useState('');
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }

    //submit
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const [snackbarNotif, setSnackbarNotif] = useState({open: false, message: ""});

    const [submittedAddress, setSubmittedAddress] = useState("");
    const [submittedBorough, setSubmittedBorough] = useState("");

    const [phhData, setPhhData] = useState(null);

    const handleSearchClick = async (event) => {
        //check if required fields have input
        if(borough != '' && address != '') {
            console.log("required fields filled");
            //test log
            console.log("Selected boro is "+ borough+ " and address text is "+ address);
            //handle loading and submitted states
            setSubmitted(true);
            setLoading(true);
            setSubmittedAddress(address);
            setSubmittedBorough(borough);
            //request and set data
            setPhhData(await fetchPHH({address: address, borough: borough}));
            //once we get data, unset loading state and set finalized loaded state
            //everything from the API should be receieved at this point
            setLoading(false);
            setLoaded(true);
            setSubmitted(false);
            //auto scroll to report
            const element = document.getElementById("reportScrollAnchor");
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            setSnackbarNotif({
                open: true,
                message: "Enter an address and borough"
            })
            console.log("snackbar?");
        }
    }


    return (
        <CssBaseline>
            {/*NAME PLATE HEADER -- "aptinspect" text & pink eggshell plate */}
            <MainHeader loading={loading}/>
            <ThemeProvider theme={theme}>
                {loading &&
                    <LinearProgress
                        color="primary"
                        sx={{
                            height: "1vh",
                            bgcolor: "#F5F0F6"
                        }}
                    />
                }
            </ThemeProvider>
            {/*SEARCH BAR PLATE -- first user input, pastel green bg, takes up whole page until
            * data loads (upon which the data appearing below makes the page scrollable) */}
            <Container maxWidth={false} sx={{bgcolor: "#B0E298", height: {md: "70vh", xs: "76vh"}}}>
            <Box
                display="flex"
                justifyContent={"center"}
                alignItems="center"
                minHeight={"50vh"}
            >
                <AddressForm handleSearchClick={handleSearchClick} address={address} borough={borough}
                    handleBoroughChange={handleBoroughChange} handleAddressChange={handleAddressChange} 
                    snackbarNotif={snackbarNotif} setSnackbarNotif={setSnackbarNotif} submitted={submitted}
                    loading={loading}
                    />
                </Box>
            </Container>

            {loaded ? (
                <div id="reportScrollAnchor">
                    <ReportHeader/>
                    {/* <ReportPests data={phhData}/> */}
                    <ReportPHH data={phhData}/>
                    {/* <ReportConstruction/> */}
                </div>
            ) : (
                null
            )}
            

        </CssBaseline>
    )
}

export default App;