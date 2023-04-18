export const SET_NEWS = "SET_NEWS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_PAGE = "SET_PAGE";
export const SET_API = "SET_API";
export const SET_CALL = "SET_CALL";
export const SET_ID = "SET_ID";
export const SET_WORD = "SET_WORD";

export const setNews = (news) => ({
  type: SET_NEWS,
  payload: news,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const loadNews =
  (page) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());
    client
      .get(api.requestAll(page))
      .then(({ data }) => {
        dispatch(setNews(data.articles));
        dispatch(setCall(false));
      })
      .catch((err) => dispatch(setError(err.message)));
  };

export const loadNewsWorld =
  (world, t) =>
  (dispatch, _, { client, api }) => {
    client
      .get(api.requestKeyWord(world, t))
      .then(({ data }) => {
        dispatch(setNews(data.articles));

        dispatch(setCall(false));
      })
      .catch((err) => dispatch(setError(err.message)));
  };

export const loadNewsCategory =
  (world, t) =>
  (dispatch, _, { client, api }) => {
    client
      .get(api.requestCategory(world, t))
      .then(({ data }) => {
        dispatch(setNews(data.articles));

        dispatch(setCall(false));
      })
      .catch((err) => dispatch(setError(err.message)));
  };

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const setAPI = (API) => ({
  type: SET_API,
  payload: API,
});

export const setCall = (call) => ({
  type: SET_CALL,
  payload: call,
});

export const setID = (id) => ({
  type: SET_ID,
  payload: id,
});

export const setWord = (word) => ({
  type: SET_WORD,
  payload: word,
});
