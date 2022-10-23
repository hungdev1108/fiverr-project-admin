import produce from "immer";
import {
  SET_DANH_SACH_CHI_TIET_LOAI_CONG_VIEC,
  SET_DANH_SACH_LOAI_CONG_VIEC,
  SET_LOAI_CONG_VIEC_ID,
  SET_MENU_LOAI_CONG_VIEC,
} from "../types/JobTypeManagementType";

const stateDefault = {
  danhSachLoaiCongViec: [],
  thongTinLoaiCongViec: {},
  danhSachChiTietLoaiCongViec: [],
  menuloaicongviec: [],

};

export const JobTypeManagementReducer = (state = stateDefault, action) => {
  switch (action.type) {

    case SET_DANH_SACH_LOAI_CONG_VIEC: {
      const nextState = produce(state, (draft) => {
        draft.danhSachLoaiCongViec = action.danhSachLoaiCongViec;
      });
      return nextState;
    }

    case SET_LOAI_CONG_VIEC_ID: {
      const nextState = produce(state, (draft) => {
        draft.thongTinLoaiCongViec = action.thongTinLoaiCongViec;
      });
      return nextState;
    }

    case SET_DANH_SACH_CHI_TIET_LOAI_CONG_VIEC: {
      const nextState = produce(state, (draft) => {
        draft.danhSachChiTietLoaiCongViec = action.danhSachChiTietLoaiCongViec;
      });
      return nextState;
    }

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
