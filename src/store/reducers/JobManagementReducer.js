import produce from "immer";

const stateDefault = {};

export const JobManagementReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};
