import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [], //apidagi newslarni solish
  newsLoadingStatus: "loaded",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    newsFetching: (state) => {
      state.newsLoadingStatus = "loading";
    },
    newsFetched: (state, action) => {
      state.newsLoadingStatus = "loaded";
      state.news = action.payload;
    },
    newsFetchingError: (state) => {
      state.newsLoadingStatus = "error";
    },
    newsCreated: (state, action) => {
      state.news.push(action.payload);
    },
    removeNews: (state, action) => {
      state.news = state.news.filter((s) => s.id !== action.payload);
    },
  },
});

const { actions, reducer } = newsSlice;
export const {
  newsFetching,
  newsFetched,
  newsFetchingError,
  removeNews,
  newsCreated,
} = actions;

export default reducer;
