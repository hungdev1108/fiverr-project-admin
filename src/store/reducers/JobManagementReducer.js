import produce from "immer";
import { SET_LIST_JOB, SET_JOB_DETAIL } from "../types/JobManagementType";

const stateDefault = {
  listJob: [],
  jobDetail:[]
};

export const JobManagementReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_LIST_JOB: {
      const nextState = produce(state, (draft) => {
        draft.listJob = action.payload;
      });
      return nextState;
    }

    case SET_JOB_DETAIL: {
      const nextState = produce(state, (draft) => {
        draft.jobDetail = action.payload;
      });
      return nextState;
    }

    default: {
      return { ...state };
    }
  }
};
