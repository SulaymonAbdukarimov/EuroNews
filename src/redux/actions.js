import {
  newsFetching,
  newsFetched,
  newsFetchingError,
  removeNews,
} from "../components/NewsList/news_slice";
import {
  filtersFetched,
  filtersFetching,
  filtersFetchingError,
} from "../components/NewsFilter/filter_slice";

export const fetchNews = (request) => (dispatch) => {
  dispatch(newsFetching());
  request("http://localhost:3001/news")
    .then((data) => dispatch(newsFetched(data)))
    .catch(() => dispatch(newsFetchingError()));
};

export const newsDelete = (request, id) => (dispatch) => {
  request(`http://localhost:3001/news/${id}`, "DELETE")
    .then(dispatch(removeNews(id)))
    .catch(() => dispatch(newsFetchingError()));
};

export const fetchFilter = (request) => (dispatch) => {
  dispatch(filtersFetching());
  request("http://localhost:3001/filters")
    .then((data) => dispatch(filtersFetched(data)))
    .catch(dispatch(filtersFetchingError()));
};

// export const newsFetching = createAction("NEWS_FETCHING");
// export const newsFetched = createAction("NEWS_FETCHED");
// export const newsFetchingError = createAction("NEWS_FETCHING_ERROR");
// export const removeNews = createAction("REMOVE_NEWS");
// export const newsCreated = createAction("NEWS_CREATED");
// export const filtersFetching = createAction("FILTERS_FETCHING");
// export const filtersFetched = createAction("FILTERS_FETCHED");
// export const filtersFetchingError = createAction("FILTERS_FETCHING_ERROR");
// export const activeFilterChanged = createAction("ACTIVE_FILTER_CHANGED");
