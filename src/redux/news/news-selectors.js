export const selectNewsInfo = (state) => ({
  status: state.news.status,
  error: state.news.error,
});

export const getPage = (state) => state.news.page;

export const getApi = (state) => state.news.API;

export const getCall = (state) => state.news.call;

export const getID = (state) => state.news.details;

export const getWord = (state) => state.news.word;

export const selectAllNews = (state) => state.news.list;


