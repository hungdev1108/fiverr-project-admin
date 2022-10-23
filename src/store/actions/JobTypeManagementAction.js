import {
  ConfirmDeleteJobTypeDONE,
  ConfirmUpdateJobType,
  CreateJobTypeDetailSuccess,
  CreateJobTypeSuccess,
} from "../../components/Notification/Notification";
import { jobTypeManagementServices } from "../../services/JobTypeManagementServices";
import {
  SET_DANH_SACH_CHI_TIET_LOAI_CONG_VIEC,
  SET_DANH_SACH_LOAI_CONG_VIEC,
  SET_LOAI_CONG_VIEC_ID,
  SET_MENU_LOAI_CONG_VIEC,
} from "../types/JobTypeManagementType";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const getDanhSachLoaiCongViecMenuAction = () => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await jobTypeManagementServices.getDanhSachLoaiCongViecMenu();
      dispatch({
        type: SET_DANH_SACH_LOAI_CONG_VIEC,
        danhSachLoaiCongViec: result.data.content,
      });
      dispatch(hideLoadingAction);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};

export const getThongTinLoaiCongViecTheoIdAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await jobTypeManagementServices.getThongTinLoaiCongViecTheoId(id);
      dispatch({
        type: SET_LOAI_CONG_VIEC_ID,
        thongTinLoaiCongViec: result.data.content,
      });
      dispatch(hideLoadingAction);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};

export const putThongTinLoaiCongViecMenu = (id, infoTypeJob, history) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await jobTypeManagementServices.putThongTinLoaiCongViecMenu(id, infoTypeJob);
      ConfirmUpdateJobType(history);
      dispatch(hideLoadingAction);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};

export const deleteLoaiCongViecMenuAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await jobTypeManagementServices.deleteLoaiCongViecMenu(id);
      ConfirmDeleteJobTypeDONE();
      getDanhSachLoaiCongViecMenuAction();
      dispatch(hideLoadingAction);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};

export const postLoaiCongViecMenuAction = (values, history) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await jobTypeManagementServices.postLoaiCongViecMenu(values);
      CreateJobTypeSuccess(history);
      dispatch(hideLoadingAction);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};

export const getChiTietLoaiCongViecAction = () => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await jobTypeManagementServices.getChiTietLoaiCongViec();
      dispatch({
        type: SET_DANH_SACH_CHI_TIET_LOAI_CONG_VIEC,
        danhSachChiTietLoaiCongViec: result.data.content,
      });
      dispatch(hideLoadingAction);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};

export const postChiTietLoaiCongViecAction = (values, history) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await jobTypeManagementServices.postChiTietLoaiCongViec(values);
      CreateJobTypeDetailSuccess(history);
      dispatch(hideLoadingAction);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};

export const getMenuLoaiCongViecAction = () => {
  return async (dispacth) => {
    try {
      dispacth(displayLoadingAction);
      const result = await jobTypeManagementServices.getMenuLoaiCongViec();
      dispacth({
        type: SET_MENU_LOAI_CONG_VIEC,
        payload: result.data.content,
      });
      dispacth(hideLoadingAction);  
    } catch (err) {
      dispacth(hideLoadingAction);
      console.log(err);
    }
  };
};
