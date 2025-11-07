import { createSlice } from "@reduxjs/toolkit";

const initialState: StoreType = {
  tableData: [],
  pagination: null,
  currentPage: 1,
  loader: false,
  selectedRow: [],
  extraSelectedRow: { startPage: null, endPage: null, count: 0 },
};

const tableDataSlice = createSlice({
  name: "TableData",
  initialState,
  reducers: {
    setTableData: (state, action) => {
      const { pagination, data } = action.payload;
      state.tableData = data;
      state.pagination = pagination;
      state.loader = false;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    setSelectedRow: (state, action) => {
      state.selectedRow = action.payload;
    },
    setExtraSelectedRow: (state, action) => {
      state.extraSelectedRow = action.payload;
    },
  },
});

export const {
  setTableData,
  setCurrentPage,
  setLoader,
  setSelectedRow,
  setExtraSelectedRow,
} = tableDataSlice.actions;
export default tableDataSlice;
