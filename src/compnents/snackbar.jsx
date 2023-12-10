import { Alert, Snackbar } from '@mui/material'
import React from 'react'

export const SnackbarComp = ({ handleClose, open, barType, massege }) => {
    // error
    // success
    return (
        <div>
            <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={barType}
                    sx={{ width: "100%" }}
                >
                    {massege}
                </Alert>
            </Snackbar>
        </div>
    )
}
