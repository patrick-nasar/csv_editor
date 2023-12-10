import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
export default function FooterCreateNewFlow({ handleincreas, handledecrease }) {
    return (
        <div className='w-full flex justify-between pt-8 pb-5 px-20 '>

            <button className='w-fit h-10 pl-2 pr-3 rounded-lg  text-white bg-gradient-to-r from-[#56CCF2] to-[#2F80ED] hover:-translate-x-2 transition duration-700 '
                onClick={() => {
                    handledecrease()
                }}>
                <div className='flex justify-center items-center'>
                    <NavigateBeforeIcon />
                    <p className='pb-[1px]'>Back</p>
                </div>
            </button>
            <div className='w-60' />
            <button className='w-fit h-10 pl-3 pr-2 rounded-lg  text-white bg-gradient-to-r from-[#2F80ED] to-[#56CCF2] hover:translate-x-2 transition duration-700'
                onClick={() => {
                    handleincreas()
                }}>
                <div className='flex justify-center items-center'>
                    <p className='pb-[3px]'>Next</p>
                    <NavigateNextIcon />
                </div>
            </button>
        </div>
    )
}
