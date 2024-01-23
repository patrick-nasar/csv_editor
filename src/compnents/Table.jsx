import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function Table({ colNames, rows }) {
    return (
        <div className='flex items-center justify-center pt-4'>
            <table className='max-h-[80vh] w-fit max-w-[80%] text-left overflow-scroll block border-b font-[0.9em] font-sans shadow-md rounded-md'>
                <thead className=''>
                    <tr className=''>
                        <th className='sticky top-0 py-3 px-6 bg-[#1976d2]'></th>

                        {Object.keys(colNames[0]).map(key => (
                            <th className='sticky top-0 py-3 px-6 bg-[#1976d2] text-white' key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>

                    {rows.map((row, index) => (
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
    )
}

function SearchTable({ colNames, rows, handleDeleteRowformResulr, indResult }) {
    return (
        <div className='flex justify-center items-center pb-4'>
            <table className='max-h-[80vh] w-fit max-w-[80%] text-left overflow-scroll block border-b font-[0.9em] font-sans shadow-md rounded-md'>
                <thead className=''>
                    <tr className=''>
                        <th className='sticky top-0 py-3 px-6 bg-[#1976d2]'></th>
                        {Object.keys(colNames[0]).map(key => (
                            <th className='sticky top-0 py-3 px-6 bg-[#1976d2] text-white' key={key}>
                                {key}
                            </th>
                        ))}
                        <th className='sticky top-0 py-3 px-6 bg-[#1976d2] text-white'></th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        index % 2 === 0 ?
                            <tr key={index} className=''>
                                <td className='bg-white text-center px-3 border-r border-dashed border-slate-300 '>
                                    {indResult[index]}
                                </td>
                                {Object.values(row).map((value, index) => (
                                    <td className='px-6 py-3 bg-white' key={index} >{value}</td>
                                ))}
                                <td className='px-6 py-3 bg-white'>
                                    <button onClick={() => {
                                        handleDeleteRowformResulr(index, indResult[index], row)
                                    }}>
                                        <DeleteOutlineOutlinedIcon className='text-red-600' />
                                    </button>
                                </td>
                            </tr>
                            :
                            <tr key={index} className=''>
                                <td className='bg-slate-100 text-center px-3  border-r border-dashed border-slate-300 '>
                                    {indResult[index]}
                                </td>
                                {Object.values(row).map((value, index) => (
                                    <td className='px-6 py-3 bg-slate-100' key={index} > {value}</td>
                                ))}
                                <td className='px-6 py-3 bg-slate-100'>
                                    <button onClick={() => {
                                        handleDeleteRowformResulr(index, indResult[index], row)
                                    }}>
                                        <DeleteOutlineOutlinedIcon className='text-red-600' />
                                    </button>
                                </td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}


function PreprocesTable({ colNames, rows, handleScrollInTable, handleDeleteRow, handleDeleteColumn }) {
    return (
        <div className='flex justify-center items-center pb-4'>
            <table
                onScroll={(e) => { handleScrollInTable(e) }
                }
                className='max-h-[80vh] w-fit max-w-[80%] text-left overflow-scroll block border-b font-[0.9em] font-sans shadow-md rounded-md'>
                <thead className=''>
                    <tr className=''>
                        <th className='sticky top-0 py-3 px-6 bg-[#1976d2]'></th>

                        {Object.keys(colNames[0]).map(key => (
                            <th className='sticky top-0 py-3 px-6 bg-[#1976d2] text-white' key={key}>
                                <div className='text-left '>
                                    <button
                                        onClick={() => handleDeleteColumn(key)}>
                                        <DeleteOutlineOutlinedIcon className='' />
                                    </button>
                                </div>

                                {key}
                            </th>
                        ))}
                        <th className='sticky top-0 py-3 px-6 bg-[#1976d2] text-white'></th>
                    </tr>
                </thead>

                <tbody className='w-full'>
                    {rows.map((row, index) => (
                        index % 2 === 0 ?
                            <tr key={index} className=''>
                                <td className='bg-white px-3  border-r border-dashed border-slate-300 text-center'>{index}</td>
                                {Object.values(row).map((value, index) => (
                                    <td className='px-6 py-3 bg-white' key={index} > {value}</td>
                                ))}
                                <td className='px-6 py-3 bg-white'>
                                    <button onClick={() => {
                                        handleDeleteRow(index, row)
                                    }}>
                                        <DeleteOutlineOutlinedIcon className='text-red-600' />
                                    </button>
                                </td>
                            </tr>
                            :
                            <tr key={index} className=''>
                                <td className='bg-slate-100 px-3  border-r border-dashed border-slate-300 text-center '>{index}</td>
                                {Object.values(row).map((value, index) => (
                                    <td className='px-6 py-3 bg-slate-100' key={index} > {value}</td>
                                ))}
                                <td className='px-6 py-3 bg-slate-100'>
                                    <button onClick={() => handleDeleteRow(index, row)}>
                                        <DeleteOutlineOutlinedIcon className='text-red-600' />
                                    </button>
                                </td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div >

    )
}


export { Table, SearchTable, PreprocesTable }