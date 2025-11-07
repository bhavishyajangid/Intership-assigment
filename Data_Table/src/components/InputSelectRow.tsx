import { OverlayPanel } from "primereact/overlaypanel";
import type { RefObject } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import {
    setExtraSelectedRow,
    setSelectedRow
} from "../store/TableData";

type props = {
    op : RefObject<OverlayPanel | null> 
}
const InputSelectRow = ({op} : props) => {
      const dispatch = useDispatch();
     const { tableData, pagination} =
    useSelector((state: RootState) => state.tableDataSlice);
    const rowSelectInput = useRef<HTMLInputElement>(null);


  const handleSelectedInputRow = () => {
         if (!pagination?.total || !tableData || tableData.length === 0) return;
     
         const count = Number(rowSelectInput.current?.value);
     
         if (!count || count < 1) return;
     
         // if input is short from row limit
         if (count < pagination.limit) {
           const row = tableData.slice(0, count);
           dispatch(setSelectedRow(row));
           op.current?.hide();
           return;
         }
     
         // if input value is bigger than the row limit
         const currentPage = pagination.current_page;
         const remainRow = count - pagination.limit;
         const totalPageNeeded = Math.ceil(remainRow / pagination.limit);
     
         const startPage = currentPage + 1;
         const endPage = currentPage + totalPageNeeded;
     
         // take selecte row 
         const firstPageRows = tableData.slice(0, pagination.limit);
         
         // add them into selectedRow array
         dispatch(setSelectedRow(firstPageRows));
         
         // reset the extraselected row object 
         dispatch(setExtraSelectedRow({ startPage, endPage, count: remainRow }));
         
         op.current?.hide();
       }
  
  return (
     <OverlayPanel ref={op} className=" shadow-sm">
            <div>
              <p className="text-[15px] text-gray-600">Select Multiple Rows</p>
              <p className="text-xs text-gray-400">
                Enter number of row to select across all pages
              </p>
    
              <div className="flex  items-center mt-3 gap-2">
                <input
                  ref={rowSelectInput}
                  min={1}
                  max={pagination?.total}
                  type="number"
                  name=""
                  id=""
                  className="w-48 border border-gray-500 px-3 h-9 rounded-md text-sm outline-none"
                  placeholder="e.g .20"
                />
                <button
                  onClick={() => {
                    handleSelectedInputRow();
                  }}
                  className="bg-blue-500 py-1.5 px-3 text-white rounded-sm text-[15px]"
                >
                  Select
                </button>
              </div>
            </div>
          </OverlayPanel>
    
  )
}

export default InputSelectRow