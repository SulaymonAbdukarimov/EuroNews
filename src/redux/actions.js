export const newsFetching = () => {
  return {
    type: "NEWS_FETCHING",
  };
};
export const newsFetched = (news) => {
  return {
    type: "NEWS_FETCHED",
    payload: news,
  };
};

export const newsFetchingError = () => {
  return {
    type: "NEWS_FETCHING_ERROR",
  };
};
