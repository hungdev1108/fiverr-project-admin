import { baseService } from "./baseService";

export class JobTypeManagementServices extends baseService {
  constructor() {
    super();
  }


  // API lấy danh sách loại công việc menu
  getDanhSachLoaiCongViecMenu = () => {
    return this.get(`api/loai-cong-viec`);
  };

  // API lấy thông tin loại công việc theo id
  getThongTinLoaiCongViecTheoId = (id) => {
    return this.get(`api/loai-cong-viec/${id}`);
  };

  // API thêm loại công việc menu
  postLoaiCongViecMenu = (infoTypeJob) => {
    return this.post(`api/loai-cong-viec`, infoTypeJob);
  };

  // API xóa loại công việc menu
  deleteLoaiCongViecMenu = (id) => {
    return this.delete(`api/loai-cong-viec/${id}`);
  };

  // API sửa thông tin loại công việc menu
  putThongTinLoaiCongViecMenu = (id, infoTypeJob) => {
    return this.put(`api/loai-cong-viec/${id}`, infoTypeJob);
  };

  /// API lấy danh sách nhóm chi tiết loại công việc
  getChiTietLoaiCongViec = () => {
    return this.get(`api/chi-tiet-loai-cong-viec`);
  };

  /// API thêm nhóm loại chi tiết công việc
  postChiTietLoaiCongViec = (infojobtypedetail) => {
    return this.post(`api/chi-tiet-loai-cong-viec/them-nhom-chi-tiet-loai`, infojobtypedetail);

  // API lấy menu loại công việc
  getMenuLoaiCongViec = () => {
    return this.get(`api/cong-viec/lay-menu-loai-cong-viec`);

  };
}

export const jobTypeManagementServices = new JobTypeManagementServices();
