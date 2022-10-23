import thunk from "redux-thunk";

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { UserManagementReducer } from "./reducers/UserManagementReducer";
import { JobManagementReducer } from "./reducers/JobManagementReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { JobTypeManagementReducer } from "./reducers/JobTypeManagementReducer";

const rootReducer = combineReducers({
  // State
  UserManagementReducer,
  JobManagementReducer,
  LoadingReducer,
  JobTypeManagementReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
