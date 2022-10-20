import produce from "immer";
import { SET_DANH_SACH_NGUOI_DUNG, SET_DANH_SACH_NGUOI_DUNG_SEARCH } from "../types/UserManagementType";

const stateDefault = {
  danhSachNguoiDung: [],
};

export const UserManagementReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_NGUOI_DUNG: {
      const nextState = produce(state, (draft) => {
        draft.danhSachNguoiDung = action.danhSachNguoiDung;
      });
      return nextState;
    }

    case SET_DANH_SACH_NGUOI_DUNG_SEARCH: {
      const nextState = produce(state, (draft) => {
        draft.danhSachNguoiDung = action.danhSachNguoiDung;
      });
      return nextState;
    }

    default: {
      return { ...state };
    }
  }
};
