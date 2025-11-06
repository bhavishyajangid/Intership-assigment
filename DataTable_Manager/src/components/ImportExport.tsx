import { type ChangeEvent } from "react";
import { CiExport, CiImport } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setRows } from "../store/AllData";
import { exportCSV, parseCSV } from "../utility/importExport";
import type { RootState } from "../store/store";
const ImportExport = () => {
  const dispatch = useDispatch();
  const { filteredRows } = useSelector(
    (state: RootState) => state.allDataSlice
  );

  const handleImport = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file?.name.endsWith(".csv")) {
      alert("Please upload a valid csv file");
      return;
    }

    try {
      const data = await parseCSV(file);
      console.log(data);
      dispatch(setRows(data));
    } catch (error) {
      console.error(error);
      alert("failed to parse csv");
    }
  };

  const handleExport = () => {
    const visibleRows = filteredRows?.map((row) => {
      const rowObj: any = {};
      Object.keys(row).forEach((key) => {
        if (row[key] !== undefined && key !== "hide") {
          rowObj[key] = row[key];
        }
      });
      return rowObj;
    });

    exportCSV(visibleRows);
  };

  let option = [
    {
      label: "Import",
      icons: <CiImport />,
      handleOption: () => {},
    },
    {
      label: "Export",
      icons: <CiExport />,
      handleOption: handleExport,
    },
  ];
  return (
    <div className=" absolute -bottom- flex gap-5">
      {/* // file choose input  */}
      <input
        className="hidden"
        type="file"
        name="file"
        id="fileupload"
        onChange={(e) => handleImport(e)}
      />

      {/* // import export btn  */}
      {option.map((item) => (
        <label
          htmlFor={`${item.label === "Import" ? "fileupload" : ""}`}
          onClick={() => item.handleOption()}
          className="bg-gray-600  px-5 py-2 rounded-md text-white font-medium flex items-center gap-2 h-10 cursor-pointer "
        >
          {item.label} {item.icons}
        </label>
      ))}
    </div>
  );
};

export default ImportExport;
