import { baseService } from "./baseService";

export class JobManagementServices extends baseService {
  constructor() {
    super();
  }

  // API lấy danh sách công việc
  getDanhSachCongViec = () => {
    return this.get(`api/cong-viec`);
  };

  // API thêm công việc
  postCongViec = (infoJob) => {
    return this.post(`api/cong-viec`, infoJob);
  };

  // API phân trang tìm kiếm công việc
  getPhanTrangTimKiemCongViec = () => {
    return this.get(`api/cong-viec/phan-trang-tim-kiem`);
  };

  // API lấy công việc theo id
  getCongViecTheoId = (id) => {
    return this.get(`api/cong-viec/${id}`);
  };

  // API sửa thông tin công việc
  putThongTinCongViec = (id, infoJob) => {
    return this.put(`api/cong-viec/${id}`, infoJob);
  };

  // API xóa công việc
  deleteCongViec = (id) => {
    return this.delete(`api/cong-viec/${id}`);
  };

  // API upload hình ảnh công việc
  postHinhAnhCongViec = (maCongViec,formData) => {
    return this.post(`api/cong-viec/upload-hinh-cong-viec/${maCongViec}`,formData);
  };
}

export const jobManagementServices = new JobManagementServices();
