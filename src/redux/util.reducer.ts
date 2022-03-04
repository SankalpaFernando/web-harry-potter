import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  isLoading: false,
  searchParam: "",
  pages: {
    currentPage: 1,
    totalPages: 0,
  }
}




export const utilSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {
    setSearchParams: (state, action: PayloadAction<string>) => {
      state.searchParam = action.payload;
    },
    setPages: (state, action: PayloadAction<{ totalPages: number }>) => {
      state.pages = { ...action.payload,currentPage:state.pages.currentPage };
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.pages.currentPage = action.payload;
    }
  },
});

export const { setSearchParams,setPages,setCurrentPage} = utilSlice.actions;

export default utilSlice.reducer;