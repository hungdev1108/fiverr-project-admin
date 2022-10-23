import produce from "immer";
import { TOKEN, USER_LOGIN } from "../../utils/settings/config";
import {
  SET_DANH_SACH_NGUOI_DUNG,
  SET_DANH_SACH_NGUOI_DUNG_SEARCH,
  SET_THONG_TIN_NGUOI_DUNG,
  SIGNIN_ACTION,
} from "../types/UserManagementType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  danhSachNguoiDung: [],
  thongTinNguoiDung: {},
  userSignin: user,
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

    case SIGNIN_ACTION: {
      const { infoSignin } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(infoSignin));
      localStorage.setItem(TOKEN, infoSignin.token);
      return { ...state, userSignin: infoSignin };
    }

    default: {
      return { ...state };
    }
  }
};
