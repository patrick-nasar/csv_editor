import React, { useState } from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { PreprocesTable, SearchTable } from './Table';


export default function Preprocessing({ csv, tempCSV, setTempCSV, changeColumnNameFunction }) {

  const [EndofShowenCSV, setEndOfShowenCSV] = useState(100);
  const [TempForShow, setTempForShow] = useState(tempCSV.slice(0, EndofShowenCSV));

  const [viewcsv, setviewcsv] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [columns, setColomns] = useState(Object.keys(tempCSV[0]));
  const [searchResult, setSearchResult] = useState([]);
  const [indResult, setIndResult] = useState([]);
  const [newColumnNames, setNewColumnNames] = useState([]);
  const [viewSearch, setViewSearch] = useState(false);

  const handleScrollInTable = (e) => {
    let nerlyEqual = Math.round(e.target.scrollHeight - e.target.scrollTop) - e.target.clientHeight;
    // const bottom = Math.round(e.target.scrollHeight - e.target.scrollTop) === e.target.clientHeight;

    if (nerlyEqual < 150) {
      if (TempForShow.length !== tempCSV.length) {

        setEndOfShowenCSV(EndofShowenCSV + 100)
        let x = EndofShowenCSV
        setTempForShow(tempCSV.slice(0, x))
      }
    }
  }


  const handleRenameColumn = (colName, index) => {
    let colname = colName;
    let newnameC = newColumnNames[index]

    changeColumnNameFunction(colname, newnameC)

    if (typeof (newnameC) === 'string') {
      tempCSV.forEach((obj) => {
        obj[newnameC] = obj[colname];
        delete obj[colname];
      });
    }
  }

  const handleSearch = () => {

    setviewcsv(false)
    setViewSearch(false)
    let isnum = /^\d+$/.test(searchValue);
    let checkedValue = searchValue
    if (isnum) {
      checkedValue = parseInt(searchValue)
    }

    setSearchResult([]);
    setIndResult([]);
    for (let i = 0; i < columns.length; i++) {
      tempCSV.filter((row, index) => {
        if (row[columns[i]] === checkedValue) {
          setSearchResult(prev => ([...prev, row]));
          setIndResult(prev => ([...prev, index]))
        }
      })
    }
    setViewSearch(true)
  }

  const handleDeleteRowformResulr = (index, indexRow, row) => {
    setSearchResult((prevData) => prevData.filter((_, i) => i !== index));
    setIndResult((prevData) => prevData.filter((_, i) => i !== index))
    setTempCSV((prevData) => prevData.filter((_, i) => i !== indexRow));

    let x = indResult

    for (let i = 0; i < x.length; i++) {
      if (x[i] > x[index]) {
        x[i] = x[i] - 1
      }
      else {
        x[i] = x[i]
      }
    }
  };

  const handleDeleteRow = (index, row) => {
    setTempCSV((prevData) => prevData.filter((_, i) => i !== index));
    setTempForShow((prevData) => prevData.filter((_, i) => i !== index));
    setSearchResult([]);
  };


  const handleDeleteColumn = (column) => {
    setTempCSV((prevData) =>
      prevData.map((row) => {
        const newRow = { ...row };
        delete newRow[column];
        return newRow;
      })
    );

    setTempForShow((prevData) =>
      prevData.map((row) => {
        const newRow = { ...row };
        delete newRow[column];
        return newRow;
      })
    );

    setSearchResult([]);

  };

  return (
    <>
      {/* Undo button */}
      <div className='flex justify-center items-center pb-2 px-20'>
        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden  text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-purple-200 "
          onClick={() => {
            setviewcsv(false)
            setTempCSV(csv)
            setTempForShow(tempCSV.slice(0, EndofShowenCSV))
          }}>
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            Undo All Changes
          </span>
        </button>
      </div>

      {/* Rename column */}
      <div className='md:flex justify-between px-20 py-6 space-x-6'>
        <div className=''>
          <h1 className='text-left font-bold text-lg pb-2'>Rename column </h1>
          <table className=''>
            <tbody >
              {Object.keys(tempCSV[0]).map((key, index) => (
                <tr key={key}>
                  <td className='py-1 ' >
                    <div className='flex items-center'>
                      <div className='h-[6px] w-[6px] bg-[#1976d2] rounded-full mr-2' />
                      <p>
                        {key}
                      </p>
                    </div>
                  </td>
                  <td className='py-1 pl-5'>
                    <input
                      className='h-11 p-2 bg-white bg-opacity-10 border rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-400'
                      type="text"
                      onChange={(e) => {
                        let newArr = [...newColumnNames]
                        newArr[index] = e.target.value
                        setNewColumnNames(newArr)
                      }}
                    />
                  </td>
                  <td className='py-1 '>
                    <button
                      className='px-3'
                      onClick={() => {
                        let colName = key
                        handleRenameColumn(colName, index)
                      }}>Rename</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='w-full h-6 flex justify-center'>
        <hr className='w-1/2 ' />
      </div>

      <div className='flex items-center justify-between px-20 pb-7'>
        <div className='flex items-center'>
          <div className='border border-stone-400 w-fit rounded-lg'>
            <input
              className='h-11 p-2 bg-white bg-opacity-10 rounded-lg focus:outline-none'
              type="text"
              placeholder='Search for any value '
              onChange={e => setSearchValue(e.target.value)} />
            <button
              className='border-l px-3'
              onClick={handleSearch}>
              <SearchOutlinedIcon fontSize='medium' className='mr-1 mb-[2px] text-slate-700' />
              <span className='text-slate-700'>Search</span>
            </button>
          </div>
          {viewSearch &&
            <p className='px-4 text-center text-xl font-bold'>Found <span className=' bg-[#1976d2] py-1 px-2 text-white rounded'>{searchResult.length}</span> Times</p>
          }
        </div>

        {/* show / hide Table */}
        <div className='flex justify-center items-center  space-x-4 p-2'>
          <button
            className='relative inline-flex items-center justify-center p-0.5 overflow-hidden  text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-purple-200'
            onClick={() => {
              setSearchResult([])
              setViewSearch(false)
              setEndOfShowenCSV(100)
              setTempForShow(tempCSV.slice(0, EndofShowenCSV));
              setviewcsv(!viewcsv)
            }}>
            {viewcsv ?
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Hide CSV File</span>
              :
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                View CSV File</span>
            }
          </button>
        </div>

      </div>

      {searchResult.length !== 0 &&
        <SearchTable colNames={tempCSV} rows={searchResult} indResult={indResult} handleDeleteRowformResulr={handleDeleteRowformResulr} />
      }

      {viewcsv &&
        <PreprocesTable colNames={tempCSV} rows={TempForShow} handleScrollInTable={handleScrollInTable} handleDeleteRow={handleDeleteRow} handleDeleteColumn={handleDeleteColumn} />
      }
    </>
  )
}
