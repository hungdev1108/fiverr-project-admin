import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { jobManagementServices } from "./../../services/JobManagementServices";
import { SET_LIST_JOB } from "./../types/JobManagementType";

export const fectchListJobAction = () => {
  return async (dispacth) => {
    try {
      dispacth(displayLoadingAction);
      const result = await jobManagementServices.getDanhSachCongViec();
      dispacth({
        type: SET_LIST_JOB,
        payload: result.data.content,
      });
      dispacth(hideLoadingAction)
    } catch (err) {
      dispacth(hideLoadingAction);
      console.log(err);
    }
  };
};

export const deleteJobaction = (id)=>{
  return async (dispacth)=>{
    try {
      dispacth(displayLoadingAction)
      await jobManagementServices.deleteCongViec(id);
      dispacth(hideLoadingAction)
      dispacth(fectchListJobAction)
    } catch (error) {
      dispacth(hideLoadingAction)
    }
  }
}