import React from 'react';

import { useState } from 'react';

import { Snackbar, SnackbarContent } from '@mui/material';

const FormSnackbar = (props) => {
    //console.log("snackbar should be displaying rn");

    const {snackbarNotif, setSnackbarNotif} = props;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackbarNotif({
            ...snackbarNotif,
            open: false
        });
    };

    return(
        <Snackbar
            open={snackbarNotif.open}
            autoHideDuration={5000}
            onClose={handleClose}
            
            severity="error"
        >
            <SnackbarContent
                style={{
                    backgroundColor: "#D33E43",
                    fontFamily: "Libre Franklin",
                    fontWeight: "500"
                }}
                message={snackbarNotif.message}
            />
        </Snackbar>
    );
}

export default FormSnackbar;