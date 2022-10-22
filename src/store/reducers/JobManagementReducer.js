import produce from "immer";
import { SET_LIST_JOB } from "../types/JobManagementType";

const stateDefault = {
  listJob: [],
};

export const JobManagementReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_LIST_JOB:
      const nextState = produce(state, (draft) => {
        draft.listJob = action.payload;
      });
      return nextState;

    default: {
      return { ...state };
    }
  }
};
