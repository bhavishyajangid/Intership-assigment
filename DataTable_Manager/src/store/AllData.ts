import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: DataState = {
  column: ["Hide", "Sr", "Name", "Email", "Age", "Role"],
  additionalColumn: [],
  rows: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      age: 25,
      role: "Admin",
      hide: true,
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 3,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 4,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 5,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 6,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 7,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 8,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 9,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 10,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 11,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 12,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 13,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 14,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 15,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 16,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 17,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 18,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 19,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 20,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 21,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 22,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 23,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 24,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 25,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 26,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 27,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 28,
      role: "User",
      hide: true,
    },
    {
      id: 29,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 30,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 31,
      role: "User",
      hide: true,
    },
    {
      id: 32,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
    {
      id: 33,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide: true,
    },
  ],
  filteredRows: [],
  searchval: "",
  searchResult: [],
  rowPerPage: 10,
};

const allDataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    setAddColumn: (state, action: PayloadAction<string>) => {
      state.column.push(action.payload);
      state.additionalColumn.push(action.payload);
    },
    setAdditionalColumn: (state) => {
      state.additionalColumn = [];
    },
    setSort: (state, action: PayloadAction<string>) => {
      if (action.payload == "Asc") {
        state.filteredRows = [...state.filteredRows].sort(
          (a, b) => Number(a.id) - Number(b.id)
        );
      } else {
        state.filteredRows = [...state.filteredRows].sort(
          (a, b) => Number(b.id) - Number(a.id)
        );
      }
    },
    setFilteredRows: (state, action) => {
      state.filteredRows = action.payload;
    },
    handlePagination: (state, action) => {
      let { currentPage, data } = action.payload;
      console.log(data, currentPage);

      if (state.searchval.trim()) {
        state.searchResult = data;
      }

      let end = currentPage * state.rowPerPage;
      let start = end - state.rowPerPage;
      state.filteredRows = data.slice(start, end);
    },
    setSearchVal: (state, action) => {
      state.searchval = action.payload;
    },
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
    handleHide : (state , action) => {
      const id = action.payload
       let index = state.filteredRows.findIndex((item) => item.id === id )
        if(index !== -1){
           state.filteredRows[index].hide = !state.filteredRows[index].hide
        }
    }
  },
});

export const {
  setAddColumn,
  setAdditionalColumn,
  setSort,
  setFilteredRows,
  handlePagination,
  setSearchVal,
  setSearchResult,
  handleHide
} = allDataSlice.actions;

export default allDataSlice;
