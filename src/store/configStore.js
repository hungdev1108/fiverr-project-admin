import thunk from "redux-thunk";

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { UserManagementReducer } from "./reducers/UserManagementReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";

const rootReducer = combineReducers({
  // State
  UserManagementReducer,
  LoadingReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
