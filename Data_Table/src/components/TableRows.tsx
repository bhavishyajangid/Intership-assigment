import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { OverlayPanel } from "primereact/overlaypanel";
import { ProgressSpinner } from "primereact/progressspinner";
import type { RefObject } from "react";
import { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setExtraSelectedRow, setSelectedRow } from "../store/TableData";
import { sortFiled, tableHeaderFieldArray } from "../utility/fun";

type props = {
  op: RefObject<OverlayPanel | null>;
};

const TableRows = ({ op }: props) => {
  const dispatch = useDispatch();
  const { tableData, pagination, loader, selectedRow, extraSelectedRow } =
    useSelector((state: RootState) => state.tableDataSlice);

  const renderBody = (rowData: any, field: string) => {
    const value = rowData[field];

    return (
      <div title={value || "N/A"}>{sortFiled(String(value || "N/A"), 20)}</div>
    );
  };

  const handleSelectionChange = (e: any) => {
    const clickedSelection = e.value;

    // Check for rows that may have been newly selected or removed compared to previous selection
    const prev = selectedRow;
    const diffAdded = clickedSelection.filter(
      (row: any) => !prev.some((r: any) => r.id === row.id)
    );

    const diffRemoved = prev.filter(
      (row: any) => !clickedSelection.some((r: any) => r.id === row.id)
    );

    let updated = [...selectedRow];

    if (diffAdded.length > 0) {
      // Add new ones
      updated = [...selectedRow, ...diffAdded];
    } else if (diffRemoved.length > 0) {
      // Remove any deselected ones
      updated = selectedRow.filter(
        (r: any) => !diffRemoved.some((d: any) => d.id === r.id)
      );
    }

    dispatch(setSelectedRow(updated));
  };

  // set the extraselected row in the selected row array 
  useEffect(() => {
    if (
      !extraSelectedRow.startPage ||
      !extraSelectedRow.endPage ||
      extraSelectedRow.count <= 0
    )
      return;
     
      // check how much we need to add 
    const currentPage = pagination?.current_page || 1;
    if (
      currentPage >= extraSelectedRow.startPage &&
      currentPage <= extraSelectedRow.endPage
    ) {

      // take extra row
      const rowtoAdd = tableData.slice(0, extraSelectedRow.count);

      // add them to selected row
      dispatch(setSelectedRow([...selectedRow, ...rowtoAdd]));

      // reset the extraselectedrow obj
      dispatch(
        setExtraSelectedRow({ startPage: null, endPage: null, count: 0 })
      );
    }
  }, [tableData, pagination?.current_page, dispatch]);
  return (
    <div className="min-h-[80vh]">
      {loader ? (
        <div className="w-full h-full flex justify-center items-center">
          {" "}
          <ProgressSpinner style={{ width: "80px", height: "80px" }} />
        </div>
      ) : (
        <DataTable
          value={tableData}
          rows={pagination?.total}
          responsiveLayout="scroll"
          scrollable
          scrollHeight="80vh"
          selection={selectedRow}
          selectionMode="multiple"
          onSelectionChange={(e) => handleSelectionChange(e)}
          dataKey="id"
        >
          <Column selectionMode="multiple"></Column>
          <Column
            header={
              <div
                onClick={(e) => op?.current?.toggle(e)}
                className="cursor-pointer flex justify-center items-center"
              >
                <IoIosArrowDown />
              </div>
            }
            bodyClassName="text-center"
            style={{ width: "3rem" }}
          />

          {tableHeaderFieldArray.map((field) => (
            <Column
              field={field.field}
              header={field.header}
              body={(rowData) => renderBody(rowData, field.field)}
              style={{
                whiteSpace: "nowrap",
                fontSize: "14px",
                color: "gray",
                maxWidth: "",
              }}
            />
          ))}
        </DataTable>
      )}
    </div>
  );
};

export default TableRows;
