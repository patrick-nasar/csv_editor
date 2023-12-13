import { Pagination } from '@mui/material';
import React, { useState } from 'react'

export default function ViewDatasetWarcking({ csv, fileName }) {

    //bagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(100);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = csv.slice(firstPostIndex, lastPostIndex);

    let pages = [];

    for (let i = 1; i <= Math.ceil(csv.length / postsPerPage); i++) {
        pages.push(i);
    }


    return (
        <>
            <div className='flex items-center justify-center text-lg p-2 '>
                <div className='w-3 h-3 bg-[#1976d2] rounded-full m-2' />
                <p>File name:
                    <span className='text-xl'> {fileName}</span>
                </p>
                <div className='w-3 h-3 bg-[#1976d2] rounded-full m-2' />
            </div>
            <div className='flex items-center justify-center space-x-2 p-2'>
                <p>Number of Rows: {csv.length},</p>
                <p>Number of Columns: {Object.keys(csv[0]).length}</p>
            </div>

            <>
                <div className='w-[100 dvh] h-[90 dvh] flex justify-center pt-4'>
                    <div className='w-fit max-w-full p-0 m-0'>
                        <table className='h-[85vh] text-left overflow-scroll block border-b font-[0.9em] font-sans shadow-md rounded-md'>
                            <thead className=''>
                                <tr className=''>
                                    <th className='sticky top-0 py-3 px-6 bg-[#1976d2]'></th>

                                    {Object.keys(csv[0]).map(key => (
                                        <th className='sticky top-0 py-3 px-6 bg-[#1976d2] text-white' key={key}>{key}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>

                                {currentPosts.map((row, index) => (
                                    index % 2 == 0 ?
                                        <tr key={index} className=''>
                                            <td className='bg-white border-r border-dashed border-slate-300 text-center '>{index}</td>
                                            {Object.values(row).map((value, index) => (
                                                <td className='px-6 py-3 bg-white' key={index} > {value}</td>
                                            ))}
                                        </tr>
                                        :
                                        <tr key={index} className=''>
                                            <td className='bg-slate-100 border-r border-dashed border-slate-300 text-center'>{index}</td>
                                            {Object.values(row).map((value, index) => (
                                                <td className='px-6 py-3 bg-slate-100' key={index} > {value}</td>
                                            ))}
                                        </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex h-28 w-full justify-center items-center '>
                    <Pagination
                        onChange={(event, page) => { setCurrentPage(page) }}
                        count={pages.length}
                        color="primary"
                        showFirstButton
                        showLastButton
                        size='large' />
                </div>
            </>

        </>
    )
}
