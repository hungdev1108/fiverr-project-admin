import produce from "immer";
import { SET_MENU_LOAI_CONG_VIEC } from "./../types/JobTypeManagementType";

const stateDefault = {
  menuloaicongviec: [],
};

export const JobTypeManagementReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_MENU_LOAI_CONG_VIEC:
      const nextState = produce(state, (draft) => {
        draft.menuloaicongviec = action.payload;
      });
      return nextState;

    default: {
      return { ...state };
    }
  }
};
