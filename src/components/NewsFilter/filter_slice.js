import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [], //filterlangan objectlarimiz boladi
  filterLoadingStatus: "loaded",
  activeFilter: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filtersFetching: (state) => {
      state.filterLoadingStatus = "loading";
    },
    filtersFetched: (state, action) => {
      state.filters = action.payload;
      state.filterLoadingStatus = "loaded";
    },
    filtersFetchingError: (state) => {
      state.filterLoadingStatus = "error";
    },
    activeFilterChanged: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

const { actions, reducer } = filterSlice;
export const {
  filtersFetched,
  filtersFetching,
  filtersFetchingError,
  activeFilterChanged,
} = actions;

export default reducer;
