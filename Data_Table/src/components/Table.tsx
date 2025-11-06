import React from 'react'
import TableHeader from './TableHeader'
import TableRows from './TableRows'
import { DataTable } from 'primereact/datatable'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import { Column } from 'primereact/column'
const tableHeaderFieldArray = [
  { field: "title", header: "Title" },
  { field: "place_of_origin", header: "Place Of Origin" },
  { field: "artist_display", header: "Artist" },
  { field: "inscriptions", header: "Inscriptions" },
  { field: "date_start", header: "Start Date" },
  { field: "date_end", header: "End Date" },
]
const Table = () => {
    const {tableData , pagination} = useSelector((state:RootState) => state.tableDataSlice)
  return (
    <>
        <p className='text-gray-500 text-sm font-medium ml-4 py-2'>Selected  : <span className='text-blue-500'>0</span> Rows</p>
        {/* <TableHeader/> */}

<DataTable
value={tableData}
rows={pagination?.total}
responsiveLayout='scroll'
className='overflow-hidden'
>
    <Column selectionMode='multiple'></Column>
   {
       tableHeaderFieldArray.map((field) => (
        <Column 
        field={field.field} 
        header={field.header} 
        body={(rowData ) => rowData[field.field] ? rowData[field.field] : 'N/A'}
        style={{whiteSpace : 'nowrap' , fontSize : "14px" , color : "gray"}}
        >

        </Column>
     ))
   }
</DataTable>

        {/* <TableRows/> */}
        </>
   
  )
}

export default Table