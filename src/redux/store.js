import news from "../components/NewsList/news_slice";
import filter from "../components/NewsFilter/filter_slice";
import { configureStore } from "@reduxjs/toolkit";
import stringMiddleware from "../middleware/stringMiddleware";

export const store = configureStore({
  reducer: { news, filter },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});
