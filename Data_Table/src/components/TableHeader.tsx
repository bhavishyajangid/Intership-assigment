import {useSelector } from "react-redux";
import type { RootState } from "../store/store";
const TableHeader = () => {
  const { selectedRow, extraSelectedRow } = useSelector(
    (state: RootState) => state.tableDataSlice
  );
  return (
    <p className="text-gray-500 text-sm font-medium ml-4 py-2">
      Selected :{" "}
      <span className="text-blue-500">
        {selectedRow.length + extraSelectedRow.count}
      </span>{" "}
      Rows
    </p>
  );
};

export default TableHeader;
