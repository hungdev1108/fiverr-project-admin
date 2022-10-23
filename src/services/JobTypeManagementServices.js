import { baseService } from "./baseService";

export class JobTypeManagementServices extends baseService {
  constructor() {
    super();
  }

  // API lấy menu loại công việc
  getMenuLoaiCongViec = () => {
    return this.get(`api/cong-viec/lay-menu-loai-cong-viec`);
  };
}

export const jobTypeManagementServices = new JobTypeManagementServices();
