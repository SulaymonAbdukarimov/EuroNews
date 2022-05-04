import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading.jsx";
import { useEffect } from "react";

import { fetchFilter, activeFilterChanged } from "../redux/actions";

import Error from "./Error";
import classNames from "classnames";
import useHttp from "../hook/useHttp";

function NewsFilter() {
  const { filters, filterLoadingStatus, activeFilter } = useSelector(
    (state) => state.filter
  );

  const dispatch = useDispatch();

  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetchFilter(request));
    //eslint-disable-next-line
  }, []);

  if (filterLoadingStatus === "loading") {
    return <Loading />;
  } else if (filterLoadingStatus === "error") {
    return <Error />;
  }

  const renderFilters = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Filters doesn't found</h5>;
    }
    return arr.map(({ name, className, label }) => {
      const btnClasses = classNames("btn", className, {
        active: name === activeFilter,
      });
      return (
        <button
          key={name}
          id={name}
          className={btnClasses}
          onClick={() => dispatch(activeFilterChanged(name))}
        >
          {label}
        </button>
      );
    });
  };

  const elements = renderFilters(filters);
  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Filter by category</p>
        <div className="btn-group">{elements}</div>
      </div>
    </div>
  );
}

export default NewsFilter;
