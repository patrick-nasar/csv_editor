import React from 'react'
import { CSVLink } from 'react-csv'
import downloadgif from '../img/downloadfile.gif'
import { Footer } from './footer'

export default function DownloadCSV({ tempCSV }) {
    return (
        <>
            <div className='w-full p-8 mt-3 flex justify-center items-center'>
                <CSVLink data={tempCSV} className='w-1/2 bg-white h-60 flex items-center justify-center rounded-xl border-dashed border-2 border-[#1976d2] hover:scale-105 transition duration-500'>
                    <img src={downloadgif} className='w-28 h-28' />
                    <span className='text-lg'>Download your new CSV file</span>
                </CSVLink>
            </div>
            <Footer />

        </>
    )
}
