import React from 'react';

import { useState } from 'react';

import {CssBaseline, Box, Container, AppBar, Typography, Grow, Grid, Grid2, TextField, Select,
    MenuItem, Button, FormControl, Paper, Menu, CircularProgress} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { fontWeight } from '@mui/system';

import FormSnackbar from './FormSnackbar';
import { green } from '@mui/material/colors';

const AddressForm = ({ handleSubmit, handleAddressChange, handleBoroughChange, borough,
    address, setSnackbarNotif, snackbarNotif, submitted, handleSearchClick, loading}) => {
    
    //submitted state

    //submit button handling
    

    //snackbar setup
    


    return(
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{bgcolor: "#F5F0F6", borderRadius: "1rem", px: "1rem", pt: "0.5rem", pb: "1.5rem", boxShadow: "0px 0px 4px 0px rgba(134, 172, 116, 1)"}}
        >
            {/*error snackbar */}
            <FormSnackbar
                snackbarNotif = {snackbarNotif}
                setSnackbarNotif = {setSnackbarNotif}
            />

            {/* Text at top of box */}
            <Typography
                fontFamily={"Libre Franklin"}
                fontWeight="900"
                fontSize="1rem"
                color= "#2B4162"
                letterSpacing={"-0.00rem"}
                sx={{ pb: "0.5rem" }}
            >
                Find your building
            </Typography>

            {/* address entry text field */}
            <TextField
                fullWidth
                label="Address"
                InputLabelProps={{
                    style: { fontWeight: "500", fontFamily: "Libre Franklin" }
                }}
                InputProps={{
                    style: { fontFamily: "500", fontFamily: "Libre Franklin" }
                }}

                onChange={handleAddressChange}
                disabled={submitted}
            />

            {/* inline borough selection & search button */}
            <Grid
                container
                direction={"row"}
                flex
                alignContent={"center"}
                justifyContent="space-between"
                sx={{
                    pt: "0.5rem"
                }}
            >
                {/* SELECT BOROUGH */}
                <Grid item xs={8}>
                    <TextField
                        select
                        fullWidth
                        //required
                        name="borough"
                        label="Borough"
                        value={borough}
                        onChange={handleBoroughChange}
                        disabled={submitted}

                        InputLabelProps={{
                            style: { fontWeight: "500", fontFamily: "Libre Franklin" }
                        }}
                        InputProps={{
                            style: { fontFamily: "500", fontFamily: "Libre Franklin" }
                        }}
                    >
                        <MenuItem value="manhattan">Manhattan</MenuItem>
                        <MenuItem value="queens">Queens</MenuItem>
                        <MenuItem value="brooklyn">Brooklyn</MenuItem>
                        <MenuItem value="bronx">The Bronx</MenuItem>

                    </TextField>

                </Grid>

                {/* SUBMIT SEARCH BUTTON */}
                <Grid item xs={4}>
                    <Button
                        fullWidth
                        //type="submit"
                        variant="outlined"
                        sx={{height: "100%"}}
                        onClick={handleSearchClick}
                        disabled={submitted}
                    >
                    Go
                    </Button>
                    {/* {loading && (
                        <CircularProgress
                            size={30}
                            sx={{
                                color: green[500],
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                            }}
                        />
                    )} */}
                </Grid>
                
            </Grid>
        </Box>
    )
}
export default AddressForm;

