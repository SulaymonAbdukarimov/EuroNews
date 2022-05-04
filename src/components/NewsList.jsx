import React from "react";

import useHttp from "../hook/useHttp";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { fetchNews, newsDelete } from "../redux/actions";

import Loading from "./Loading";
import Error from "./Error";
import NewsListItem from "./NewsListItem";
import "./style/news_list.css";
import { createSelector } from "reselect";

function NewsList() {
  const filteredNewsSelected = createSelector(
    (state) => state.filter.activeFilter,
    (state) => state.news.news,
    (filter, news) => {
      if (filter === "all") {
        return news;
      } else {
        return news.filter((s) => s.category === filter);
      }
    }
  );

  const filteredNews = useSelector(filteredNewsSelected);
  const filterLoadingStatus = useSelector((state) => state.filterLoadingStatus);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetchNews(request));
    //eslint-disable-next-line
  }, []);

  const onDelete = useCallback((id) => {
    dispatch(newsDelete(request, id));
    //eslint-disable-next-line
  }, []);

  if (filterLoadingStatus === "loading") {
    return <Loading />;
  } else if (filterLoadingStatus === "error") {
    return <Error />;
  }

  const renderNewsList = (arr) => {
    if (arr.length === 0) {
      return (
        <CSSTransition timeout={500} classNames="item">
          <h4>News doesn't found</h4>
        </CSSTransition>
      );
    }
    return arr
      .map(({ id, ...props }) => {
        return (
          <CSSTransition key={id} timeout={500} classNames="item">
            <NewsListItem id={id} onDelete={() => onDelete(id)} {...props} />
          </CSSTransition>
        );
      })
      .reverse();
  };

  let element = renderNewsList(filteredNews);

  return <TransitionGroup component="ul">{element}</TransitionGroup>;
}

export default NewsList;
