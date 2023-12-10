import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


export default function StepperBar({ steps, stepnum, }) {

    return (
        <>
            <div className='pt-12 text-red-500 '>
                <Box sx={{ width: '100%' }} >
                    <Stepper activeStep={stepnum} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label} >
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </div>
            
        </>
    )
}
