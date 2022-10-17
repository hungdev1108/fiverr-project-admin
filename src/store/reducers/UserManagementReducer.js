import produce from "immer";

const stateDefault = {};

export const UserManagementReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};
