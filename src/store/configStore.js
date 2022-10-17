import thunk from "redux-thunk";

import { applyMiddleware, combineReducers, compose, createStore } from "redux";

const rootReducer = combineReducers({
  // State
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
