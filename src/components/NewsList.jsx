// Vazifa.
// "x" tugmasiga bosilganda ,yangiliklar UIdan o'chish kreak
// Qiyin vazifa
// O'chirilgan yangilik db.json dan ham o'chishi kerak .Method 'Delete'

import React from "react";
import useHttp from "../hook/useHttp";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newsFetching, newsFetched, newsFetchingError } from "../redux/actions";
import Loading from "./Loading";
import Error from "./Error";
import NewsListItem from "./NewsListItem";

function NewsList() {
  const { news, newsLoadingStatus } = useSelector((state) => state);
  const [newsList, setNewsList] = useState([]);

  const dispatch = useDispatch();

  const { request } = useHttp();

  useEffect(() => {
    dispatch(newsFetching());
    request("http://localhost:3001/news")
      .then((data) => dispatch(newsFetched(data)))
      .catch(() => dispatch(newsFetchingError()));
  }, []);

  useEffect(() => {
    if (newsList.length) {
      return newsList.map(({ id, ...props }) => {
        return (
          <NewsListItem key={id} {...props} deleteNewsPost={deleteNewsPost} />
        );
      });
    }
  }, [newsList]);

  function deleteNewsPost(post) {
    const newList = news.filter((item) => item.id !== post.id);
    setNewsList(newList);
  }

  if (newsLoadingStatus === "loading") {
    return <Loading />;
  } else if (newsLoadingStatus === "error") {
    return <Error />;
  }

  const renderNewsList = (arr) => {
    if (arr.length === 0) {
      return <h4 className="text-center mt-5">News doesn't exists</h4>;
    }
    return arr.map(({ id, ...props }) => {
      return (
        <NewsListItem key={id} {...props} deleteNewsPost={deleteNewsPost} />
      );
    });
  };

  let element = renderNewsList(news);

  return <ul>{element}</ul>;
}

export default NewsList;
