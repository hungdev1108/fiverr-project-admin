import { userManagementServices } from "../../services/UserManagementServices";
import { SET_DANH_SACH_NGUOI_DUNG, SET_DANH_SACH_NGUOI_DUNG_SEARCH } from "../types/UserManagementType";
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

export const postNguoiDungAction = (values) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await userManagementServices.postNguoiDung(values);
      alert("SUCCESSFUL!");
      dispatch(hideLoadingAction);
      console.log("result", result);
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
