import React, { useRef } from 'react'
import Papa from 'papaparse'
import Fimg from '../img/add-file.gif'
import { Footer } from "./footer";


export default function InputCSV({ setcsv, fileName, setFileName, setTempCSV }) {
    const hiddenFileInput = useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const handleChange = event => {
        let file = event.target.files[0];
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: function (results) {
                setcsv(results.data)
                setTempCSV(results.data)
            }
        });
        setFileName(file.name)
    };

    return (
        <>
            <div className='w-full p-8 mt-3 flex justify-evenly items-center'>
                {/* <input type="file" id='file' onChange={handleFileChange} style={{display:'none'}} /> */}
                <button
                    onClick={handleClick}
                    className='w-[40%] bg-white h-60 flex items-center justify-center rounded-xl border-dashed border-2 border-[#1976d2] hover:scale-105 transition duration-500'>
                    <img src={Fimg} className='w-28 h-28' />
                    <span className='text-lg font-bold pl-2'>Select your CSV file</span>
                </button>
                <input
                    type="file"
                    accept=".csv"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                />

            </div>
            {fileName &&
                <>
                    <div className='flex justify-center items-center space-x-3 text-lg p-2'>
                        <div className='h-2 w-2 bg-blue-600 rounded-full' />
                        <p>Uploaded File  Name: {fileName}</p>
                        <div className='h-2 w-2 bg-blue-600 rounded-full' />
                    </div>

                </>
            }
            <Footer />

        </>
    )
}
