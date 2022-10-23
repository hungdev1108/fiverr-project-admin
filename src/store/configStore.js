import thunk from "redux-thunk";

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { UserManagementReducer } from "./reducers/UserManagementReducer";
import { JobManagementReducer } from './reducers/JobManagementReducer'
import { JobTypeManagementReducer } from './reducers/JobTypeManagementReducer'
import { LoadingReducer } from "./reducers/LoadingReducer";

const rootReducer = combineReducers({
  // State
  UserManagementReducer,
  JobManagementReducer,
  JobTypeManagementReducer,
  LoadingReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
