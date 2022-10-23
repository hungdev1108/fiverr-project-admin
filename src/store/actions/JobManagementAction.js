import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { jobManagementServices } from "./../../services/JobManagementServices";
import { SET_JOB_DETAIL, SET_LIST_JOB } from "./../types/JobManagementType";
import { CreateJobSuccess, EditJobSuccess } from "../../components/Notification/Notification";

export const fectchListJobAction = () => {
  return async (dispacth) => {
    try {
      dispacth(displayLoadingAction);
      const result = await jobManagementServices.getDanhSachCongViec();
      dispacth({
        type: SET_LIST_JOB,
        payload: result.data.content,
      });
      dispacth(hideLoadingAction);
    } catch (err) {
      dispacth(hideLoadingAction);
      console.log(err);
    }
  };
};

export const uploadJobAction = (values, history, formData) => {
  return async (dispacth) => {
    try {
      dispacth(displayLoadingAction);
      const result = await jobManagementServices.postCongViec(values);
      const maCongViec = result.data.content.id;
      if (result.data.content) {
        await jobManagementServices.postHinhAnhCongViec(maCongViec, formData);
      }
      CreateJobSuccess(history);
      dispacth(hideLoadingAction);
      dispacth(fectchListJobAction());
    } catch (error) {
      dispacth(hideLoadingAction);
      console.log(error);
    }
  };
};

export const getJobDetailAction = (id) => {
  return async (dispacth) => {
    try {
      dispacth(displayLoadingAction);
      const result = await jobManagementServices.getCongViecTheoId(id);
      dispacth({
        type: SET_JOB_DETAIL,
        payload: result.data.content,
      });
      dispacth(hideLoadingAction);
    } catch (error) {
      dispacth(hideLoadingAction);
    }
  };
};

export const deleteJobaction = (id) => {
  return async (dispacth) => {
    try {
      dispacth(displayLoadingAction);
      await jobManagementServices.deleteCongViec(id);
      dispacth(hideLoadingAction);
      dispacth(fectchListJobAction());
    } catch (error) {
      dispacth(hideLoadingAction);
    }
  };
};

export const fixJobAction = (values, history, formData, jobId) => {
  return async (dispacth) => {
    try {
      dispacth(displayLoadingAction);
      await jobManagementServices.putThongTinCongViec(jobId, values);
      if (formData.get("formFile")) {
        await jobManagementServices.postHinhAnhCongViec(jobId, formData);
      }
      EditJobSuccess(history);
      dispacth(hideLoadingAction);
      dispacth(fectchListJobAction());
    } catch (error) {
      dispacth(hideLoadingAction);
      console.log(error);
    }
  };
};
