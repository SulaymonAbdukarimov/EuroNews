import { createReducer } from "@reduxjs/toolkit";

import {
  filtersFetched,
  filtersFetching,
  filtersFetchingError,
  activeFilterChanged,
} from "../actions";

const initialState = {
  filters: [], //filterlangan objectlarimiz boladi
  filterLoadingStatus: "loaded",
  activeFilter: "all",
};

const filter = createReducer(
  initialState,
  {
    [filtersFetching]: (state) => {
      state.filterLoadingStatus = "loading";
    },
    [filtersFetched]: (state, action) => {
      state.filters = action.payload;
      state.filterLoadingStatus = "loaded";
    },
    [filtersFetchingError]: (state) => {
      state.filterLoadingStatus = "error";
    },
    [activeFilterChanged]: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  [],
  (state) => state
);

// const filter = (state = initialState, action) => {
//   switch (action.type) {
//     case "FILTERS_FETCHING":
//       return {
//         ...state,
//         filterLoadingStatus: "loading",
//       };

//     case "FILTERS_FETCHED":
//       return {
//         ...state,
//         filters: action.payload,
//         filterLoadingStatus: "loaded",
//       };

//     case "FILTERS_FETCHING_ERROR":
//       return {
//         ...state,
//         filterLoadingStatus: "error",
//       };

//     case "ACTIVE_FILTER_CHANGED":
//       return {
//         ...state,
//         activeFilter: action.payload,
//       };

//     default:
//       return state;
//   }
// };

export default filter;
