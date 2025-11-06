import React from 'react'
import TableHeader from './TableHeader'
import TableRows from './TableRows'
import { DataTable } from 'primereact/datatable'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import { Column } from 'primereact/column'
import { Paginator } from 'primereact/paginator'
import { setCurrentPage } from '../store/TableData'
const tableHeaderFieldArray = [
  { field: "title", header: "Title" },
  { field: "place_of_origin", header: "Place Of Origin" },
  { field: "artist_display", header: "Artist" },
  { field: "inscriptions", header: "Inscriptions" },
  { field: "date_start", header: "Start Date" },
  { field: "date_end", header: "End Date" },
]
const Table = () => {
  const dispatch = useDispatch()
    const {tableData , pagination} = useSelector((state:RootState) => state.tableDataSlice)


    const sortFiled = (value : string , maxlength : number = 15):string=> {
        if(!value) return 'N/A'

        return value.length > maxlength ? value.slice(0 ,maxlength) + '...' : value
    }

    const renderBody = (rowData : any , field : string) => {
      const value  = rowData[field]

      return (
        <div
        title={value || 'N/A'}
        >
       {sortFiled(String(value || 'N/A') , 20)}
        </div>
      )
    }

  return (
    <div>

        <p className='text-gray-500 text-sm font-medium ml-4 py-2'>Selected  : <span className='text-blue-500'>0</span> Rows</p>
        {/* <TableHeader/> */}



<DataTable
value={tableData}
rows={pagination?.total}
responsiveLayout='scroll'
scrollable  
scrollHeight='80vh'
>
    <Column selectionMode='multiple'></Column>

   {
     tableHeaderFieldArray.map((field) => (
       <Column 
       field={field.field} 
       header={field.header} 
       body={(rowData) => renderBody(rowData , field.field)}
       style={{whiteSpace : 'nowrap' , fontSize : "14px" , color : "gray" , maxWidth : ''}}
       />
     ))
   }
</DataTable>

     <div className='flex items-center px-5 justify-between'>
        <p className='text-xs text-gray-500'>Searching <span className='text-gray-800 font-semibold'>1 </span> to <span className='text-gray-800 font-semibold'>12 </span>of <span className='text-gray-800 font-semibold'>130023 </span> entries</p>
     <Paginator
     first={pagination?.current_page}
     rows={pagination?.limit}
     totalRecords={pagination?.total_pages}
     onPageChange={(e) => dispatch(setCurrentPage(e))}
     className="justify-content-start"
/>
     </div>
     </div>
  )
}

export default Table