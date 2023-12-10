import React, { useEffect, useState } from 'react'
import FooterCreateNewFlow from '../compnents/footerCreateNewFlow';
import InputCSV from '../compnents/inputCSV';
import Preprocessing from '../compnents/preprocessing';
import StepperBar from '../compnents/stepper';
import ViewDatasetWarcking from '../compnents/viewDatasetWorking';
import { SnackbarComp } from '../compnents/snackbar'
import DownloadCSV from '../compnents/downloadCSV';



export default function EditDeataSet() {

    const [csv, setcsv] = useState([])
    const [fileName, setFileName] = useState('') 

    const [tempCSV, setTempCSV] = useState(csv)
    const [changeColumnName, setChangeColumnName] = useState([]);
    const [deleteRows, setDeleteRows] = useState([]);
    const [deleteColumns, setDeleteColumns] = useState([]);

    const [barType, setbarType] = useState();
    const [massege, setmassege] = useState();
    const [open, setOpen] = useState(false);
    const [stepnum, setStepnum] = useState(0)
    const steps = [
        'Select Dataset',
        'View Dataset',
        'Edit Dataset',
        'Download Dataset',
    ];

    const changeColumnNameFunction = (colname, newnameC) => {
        console.log(colname, newnameC)
        let newnames = { ...changeColumnName, [colname]: newnameC }
        setChangeColumnName(newnames)
    }

    const DeleteColumnsFunction = (cloumnName) => {
        let deletedCol = [...deleteColumns, cloumnName]
        setDeleteColumns(deletedCol)
    }

    const DeleteRowsFunction = (row) => {
        let rows = [...deleteRows, row]
        setDeleteRows(rows)
    }

    const UndoAllChenges = () => {
        // setTempCSV(csv)
        setChangeColumnName([])
        setDeleteColumns([])
        setDeleteRows([])
    }


    const handleincreas = () => {
        //input
        if (stepnum === 0) {
            if (csv.length > 0) {
                setStepnum(stepnum + 1)
            }
            else {
                setmassege('Please select your CSV file First')
                setbarType('error')
                setOpen(true)
            }
        }
        //View csv
        else if (stepnum === 1) {
            setStepnum(stepnum + 1)
        }
        //Clean csv
        else if (stepnum === 2) {
            setStepnum(stepnum + 1)
        }
        //Download
        else if (stepnum === 3) { }
    }

    const handledecrease = () => {
        if (stepnum === 0) { }
        else {
            setStepnum(stepnum - 1)
        }
    }

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setmassege("Note: All the work will be on your browser. We don't save anything.")
        setbarType('warning')
        setOpen(true)
    }, [])

    return (
        <div className='h-full animate-fade'>
            <>
                <StepperBar steps={steps} stepnum={stepnum}
                    handleincreas={handleincreas} handledecrease={handledecrease} />
                <FooterCreateNewFlow handleincreas={handleincreas} handledecrease={handledecrease} />
            </>

            {stepnum === 0 &&
                <InputCSV csv={csv} setcsv={setcsv} fileName={fileName} setFileName={setFileName} setTempCSV={setTempCSV} />}
            {stepnum === 1 &&
                <ViewDatasetWarcking csv={csv} fileName={fileName} />}
            {stepnum === 2 &&
                <Preprocessing csv={csv} tempCSV={tempCSV} setTempCSV={setTempCSV} changeColumnNameFunction={changeColumnNameFunction} DeleteColumnsFunction={DeleteColumnsFunction} DeleteRowsFunction={DeleteRowsFunction} UndoAllChenges={UndoAllChenges} />}
            {stepnum === 3 &&
                <DownloadCSV tempCSV={tempCSV} />}

            <SnackbarComp handleClose={handleClose} open={open} barType={barType} massege={massege} />

        </div >
    )
}
