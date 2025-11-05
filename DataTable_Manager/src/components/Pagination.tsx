 import { useEffect, useState, type ChangeEvent } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { handlePagination, setRows } from "../store/AllData";
import type { RootState } from "../store/store";
import { CiImport ,CiExport  } from "react-icons/ci";
import { exportCSV, parseCSV } from "../utility/importExport";
import { filterRow } from "../utility/searchFilterRow";
const Pagination = () => {
  const dispatch = useDispatch()
  const {rows , rowPerPage , searchval , searchResult} = useSelector((state: RootState) => state.allDataSlice)
  const [currentPage , setCurrentPage] = useState<number>(1)
  
  console.log(rows);
  
  const val = searchval.trim() ? searchResult : rows
  const totalPage = val.length / rowPerPage
  
  useEffect(() => {
     dispatch(handlePagination({currentPage , data : val}))
  },[currentPage])


  const handleImport = async(e : ChangeEvent<HTMLInputElement>) => {
     const file = e.target.files[0]

     if(!file.name.endsWith('.csv')){
      alert('Please upload a valid csv file')
      return
     }

     try { 
       const data = await parseCSV(file)
       dispatch(setRows(data))
       localStorage.setItem('allRows' , JSON.stringify(data))
     } catch (error) {
       console.error(error)
       alert('failed to parse csv')
     }


  } 

  const handleExport = () => {
    const visibleRows = filterRow.map((row) => {
       const rowObj : any{}
       Object.keys(row).forEach((key) => {
        if(row[key] !== undefined && key !== 'hide'){
           rowObj[key] = row[key]
        }
       });
       return rowObj
    })

    exportCSV(visibleRows)
  }


   let option = [
     {
       label: "Import",
       icons: <CiImport />,
       handleOption: () => {},
     },{
       label: "Export",
       icons: <CiExport />,
       handleOption: () => {},
     },
   ];

  return (

    <div className=" relative">

<div className=" absolute -bottom- flex gap-5">

      {
        option.map((item) => (
          <div
          onClick={() => item.handleOption}
          className="bg-gray-600  px-5 py-2 rounded-md text-white font-medium flex items-center gap-2 h-10 cursor-pointer "
          >
                {item.label} {item.icons}
    </div>

))
}
</div>

        <div className="flex justify-center items-center mx-auto gap-5 mt-5">
            <div onClick={() => setCurrentPage(prev => prev > 1 ? prev - 1 : prev)}className="text-gray-700 flex gap-1 items-center cursor-pointer" ><MdKeyboardArrowLeft />Prev </div>
            <span className="px-2 py-.5 rounded-full bg-gray-500 text-white">{currentPage}</span>
            <div onClick={() => setCurrentPage(prev => prev < totalPage ? prev+1 : prev)} className="text-gray-700 flex gap-1 items-center cursor-pointer" > Next <MdKeyboardArrowRight /> </div>



        </div>
    

    </div>
  )
}

export default Pagination