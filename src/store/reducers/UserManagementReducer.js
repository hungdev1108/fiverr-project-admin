import produce from "immer";
import {
  SET_DANH_SACH_NGUOI_DUNG,
  SET_DANH_SACH_NGUOI_DUNG_SEARCH,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../types/UserManagementType";

const stateDefault = {
  danhSachNguoiDung: [],
  thongTinNguoiDung: {},
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

    case SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung;
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
