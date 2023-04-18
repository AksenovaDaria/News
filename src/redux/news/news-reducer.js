import {
  SET_NEWS,
  SET_LOADING,
  SET_ERROR,
  SET_PAGE,
  SET_API,
  SET_CALL,
  SET_ID,
  SET_WORD,
} from "./news-actions";

const initialState = {
  status: "idle", //loading, received, reject
  error: null,
  list: [],
  API: "all",
  page: 1,
  call: true,
  details: "",
  word: "",
};

export const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };

    case SET_ERROR:
      return {
        ...state,
        status: "rejected",
        error: payload,
      };

    case SET_NEWS:
      return {
        ...state,
        status: "received",
        list: payload,
        error: null,
      };
    case SET_PAGE:
      return {
        ...state,
        page: payload,
      };

    case SET_API:
      return {
        ...state,
        API: payload,
      };
    case SET_CALL:
      return {
        ...state,
        call: payload,
      };
    case SET_ID:
      return {
        ...state,
        details: payload,
      };
    case SET_WORD:
      return {
        ...state,
        word: payload,
      };

    default:
      return state;
  }
};
