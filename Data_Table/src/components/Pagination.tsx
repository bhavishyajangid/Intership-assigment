import { Paginator } from "primereact/paginator";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import {
    setCurrentPage
} from "../store/TableData";
const Pagination = () => {
    const dispatch = useDispatch();
  const {pagination} =
    useSelector((state: RootState) => state.tableDataSlice);
  return (
     <div className="flex items-center px-5 justify-between">
        <p className="text-xs text-gray-500">
          Searching{" "}
          <span className="text-gray-800 font-semibold">
            {pagination?.current_page}{" "}
          </span>{" "}
          to{" "}
          <span className="text-gray-800 font-semibold">
            {pagination?.total_pages}{" "}
          </span>
          of{" "}
          <span className="text-gray-800 font-semibold">
            {pagination?.total}
          </span>{" "}
          entries
        </p>
        <Paginator
          first={
            pagination?.current_page
              ? (pagination.current_page - 1) * pagination.limit
              : 0
          }
          rows={pagination?.limit}
          totalRecords={pagination?.total}
          onPageChange={(e) => dispatch(setCurrentPage(e.page + 1))}
          className="justify-content-start"
        />
      </div>
  )
}

export default Pagination