import { displayLoadingAction, hideLoadingAction } from "../actions/LoadingAction";
import { jobTypeManagementServices } from "./../../services/JobTypeManagementServices";
import { SET_MENU_LOAI_CONG_VIEC } from "./../types/JobTypeManagementType";

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
