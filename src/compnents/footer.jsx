import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from '@mui/material/Tooltip';
import React from 'react'

export const Footer = () => {
    return (
        <div className='sticky bottom-0 flex justify-center items-center w-full h-8 py-3 space-x-4  bg-gray-900 text-white '>
            <h1 className='font-semibold text-lg'>Developed by Patrick Nassar</h1>
            <a href="https://www.linkedin.com/in/patrick-nassar-4a9116201/">
                <Tooltip title="LinkedIn">
                    <LinkedInIcon className="text-blue-600 " />
                </Tooltip>
            </a>
            <a href="mailto:patriknasar@gmail.com">
                <Tooltip title="Email">
                    <EmailIcon className="text-yellow-300" />
                </Tooltip>
            </a>
            <a href="https://github.com/patrick-nasar">
                <Tooltip title="GitHub">
                    <GitHubIcon className="dark:text-white" />
                </Tooltip>
            </a>
        </div>
    )
}
