import { Pagination } from '@mui/material';
import React, { useState } from 'react'
import { Table } from './Table';

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

            <Table colNames={csv} rows={currentPosts} />
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
    )
}
