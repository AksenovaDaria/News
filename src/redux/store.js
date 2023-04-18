import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";
import * as api from "../API";
import axios from "axios";
import { loadState, saveState } from "./local-storage";
import throttle from "lodash/throttle";

export const configureStore = () => {
  const persistedState = loadState();

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(
      applyMiddleware(thunk.withExtraArgument({ client: axios, api }))
    )
  );

  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 1000)
  );

  return store;
};
