import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import { useDispatch, useSelector } from "react-redux";
import { setLoader, setTableData } from "./store/TableData";
import type { RootState } from "./store/store";

function App() {
  const dispatch = useDispatch();
  const { currentPage } = useSelector(
    (state: RootState) => state.tableDataSlice
  );

  useEffect(() => {
    const fetchTableData = async (): Promise<void> => {
      dispatch(setLoader(true));
      try {
        const res = await fetch(
          `https://api.artic.edu/api/v1/artworks?page=${currentPage}`
        );
        const result = await res.json();
        dispatch(setTableData(result));
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setLoader(false));
      }
    };

    fetchTableData();
  }, [currentPage]);

  return (
    <>
      <div>
        <Table />
      </div>
    </>
  );
}

export default App;
