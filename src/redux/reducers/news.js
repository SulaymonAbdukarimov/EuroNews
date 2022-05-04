import { createReducer } from "@reduxjs/toolkit";

import {
  newsFetching,
  newsFetched,
  newsFetchingError,
  removeNews,
  newsCreated,
} from "../actions";

const initialState = {
  news: [], //apidagi newslarni solish
  newsLoadingStatus: "loaded",
};

// WORKS ONLY IN JS

const news = createReducer(
  initialState,
  {
    [newsFetching]: (state) => {
      state.newsLoadingStatus = "loading";
    },
    [newsFetched]: (state, action) => {
      state.newsLoadingStatus = "loaded";
      state.news = action.payload;
    },
    [newsFetchingError]: (state) => {
      state.newsLoadingStatus = "error";
    },
    [newsCreated]: (state, action) => {
      state.news.push(action.payload);
    },
    [removeNews]: (state, action) => {
      state.news = state.news.filter((s) => s.id !== action.payload);
    },
  },
  [],
  (state) => state
);

// WORKS BOTH IN  JS AND TYPESCRIPT

// const news = createReducer(initialState, (builder) => {
//   builder
//     .addCase(newsFetching, (state) => {
//       state.newsLoadingStatus = "loading";
//     })
//     .addCase(newsFetched, (state, action) => {
//       state.newsLoadingStatus = "loaded";
//       state.news = action.payload;
//     })
//     .addCase(newsFetchingError, (state) => {
//       state.newsLoadingStatus = "error";
//     })
//     .addCase(newsCreated, (state, action) => {
//       state.news.push(action.payload);
//     })
//     .addCase(removeNews, (state, action) => {
//       state.news = state.news.filter((s) => s.id !== action.payload);
//     })
//     .addDefaultCase(() => {});
// });

// const news = (state = initialState, action) => {
//   switch (action.type) {
//     case "NEWS_FETCHING":
//       return {
//         ...state,
//         newsLoadingStatus: "loading",
//       };

//     case "NEWS_FETCHED":
//       return {
//         ...state,
//         news: action.payload, //news data berib qoyamiz
//         newsLoadingStatus: "loaded",
//       };

//     case "NEWS_FETCHING_ERROR":
//       return {
//         ...state,
//         newsLoadingStatus: "error",
//       };

//     case "REMOVE_NEWS":
//       return {
//         ...state,
//         news: state.news.filter((s) => s.id !== action.payload),
//       };

//     case "NEWS_CREATED":
//       return {
//         ...state,
//         news: [...state.news, action.payload],
//       };

//     default:
//       return state;
//   }
// };

export default news;
