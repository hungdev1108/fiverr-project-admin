import produce from "immer";

const stateDefault = {};

export const ServiceManagementReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};
