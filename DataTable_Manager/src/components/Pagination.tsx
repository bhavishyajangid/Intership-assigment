import { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { handlePagination } from '../store/AllData';
import type { RootState } from '../store/store';
const Pagination = () => {

    const dispatch = useDispatch()
    const {searchResult , searchval , rows , rowPerPage} =useSelector((state : RootState) => state.allDataSlice)
    const [currentPage, setCurrentPage] = useState<number>(1);
      const val = searchval.trim() ? searchResult : rows;
      const totalPage = val.length / rowPerPage;
    
      useEffect(() => {
        dispatch(handlePagination({ currentPage, data: val }));
      }, [currentPage]);



  return (
     <div className="flex justify-center items-center mx-auto gap-5 mt-5">
        <div
          onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
          className="text-gray-700 flex gap-1 items-center cursor-pointer"
        >
          <MdKeyboardArrowLeft />
          Prev{" "}
        </div>
        <span className="px-2 py-.5 rounded-full bg-gray-500 text-white">
          {currentPage}
        </span>
        <div
          onClick={() =>
            setCurrentPage((prev) => (prev < totalPage ? prev + 1 : prev))
          }
          className="text-gray-700 flex gap-1 items-center cursor-pointer"
        >
          {" "}
          Next <MdKeyboardArrowRight />{" "}
        </div>
      </div>
  )
}

export default Pagination