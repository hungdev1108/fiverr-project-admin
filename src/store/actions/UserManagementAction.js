import {
  ConfirmDeleteUser,
  ConfirmDeleteUserDONE,
  CreateAccountSuccess,
} from "../../components/Notification/Notification";
import { userManagementServices } from "../../services/UserManagementServices";
import {
  SET_DANH_SACH_NGUOI_DUNG,
  SET_DANH_SACH_NGUOI_DUNG_SEARCH,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../types/UserManagementType";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const getDanhSachNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await userManagementServices.getDanhSachNguoiDung();
      dispatch({
        type: SET_DANH_SACH_NGUOI_DUNG,
        danhSachNguoiDung: result.data.content,
      });
      dispatch(hideLoadingAction);
      //   console.log(result.data.content);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};

export const postNguoiDungAction = (values, history) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await userManagementServices.postNguoiDung(values);
      CreateAccountSuccess(history);
      dispatch(hideLoadingAction);
      //   console.log("result", result);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};

export const getTimKiemNguoiDungTheoTenAction = (tenNguoiDung) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await userManagementServices.getTimKiemNguoiDungTheoTen(tenNguoiDung);
      dispatch({
        type: SET_DANH_SACH_NGUOI_DUNG_SEARCH,
        danhSachNguoiDung: result.data.content,
      });
      dispatch(hideLoadingAction);
      //   console.log(result.data.content);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};

export const getThongTinNguoiDungTheoIdAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await userManagementServices.getThongTinNguoiDungTheoId(id);
      dispatch({
        type: SET_THONG_TIN_NGUOI_DUNG,
        thongTinNguoiDung: result.data.content,
      });
      dispatch(hideLoadingAction);
      console.log("ACTION", result.data.content);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};

export const deleteNguoiDungAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await userManagementServices.deleteNguoiDung(id);
      ConfirmDeleteUserDONE();
      console.log("result", result);
      getDanhSachNguoiDungAction();
      dispatch(hideLoadingAction);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};
