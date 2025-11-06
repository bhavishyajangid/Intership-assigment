import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: DataState = {
  column: [],
  additionalColumn: [],
  rows: [],
  filteredRows: [],
  searchval: "",
  searchResult: [],
  rowPerPage: 10,
};

const allDataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {

    setRows : (state , action) => {
      const importedRows = action.payload
      
      state.rows = importedRows
      const columnVal = Object.keys(importedRows[0] || {}).filter(
        key => key !== 'id' && key !== 'hide'
      )
      
  
     state.column = columnVal

     let end = 1 * state.rowPerPage;
     let start = end - state.rowPerPage;
     state.filteredRows = action.payload.slice(start, end);
     localStorage.setItem('allRows' , JSON.stringify(action.payload))
    },
    setAddColumn: (state, action: PayloadAction<string>) => {
      const newColVal = action.payload
      state.column.push(newColVal)
      state.filteredRows = state.filteredRows.map(row => ({
        ...row,
        [newColVal] : row[newColVal] ? row[newColVal] : "-"
      }))

      const allRowsUpdate = state.rows.map(row => ({
        ...row,
        [newColVal] : row[newColVal] ? row[newColVal] : "-"
      }))
     
      state.rows = allRowsUpdate
      localStorage.setItem('allRows' , JSON.stringify(allRowsUpdate))
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
       
       let row =  state.rows.map(row => 
         row.id === id ? {...row , hide : !row.hide} : row
        )
        
        state.rows  = row
        localStorage.setItem('allRows' , JSON.stringify(row))

        state.filteredRows = state.filteredRows.map(row => 
         row.id === id ? {...row , hide : !row.hide} : row
        )


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
  handleHide,
  setRows
} = allDataSlice.actions;

export default allDataSlice;
