import { baseService } from "./baseService";

export class UserManagementServices extends baseService {
  constructor() {
    super();
  }

  // API lấy danh sách người dùng
  getDanhSachNguoiDung = () => {
    return this.get(`api/users`);
  };

  // API thêm người dùng
  postNguoiDung = (formData) => {
    // {
    //     "name": "string",
    //     "email": "string",
    //     "password": "string",
    //     "phone": "string",
    //     "birthday": "string",
    //     "gender": true,
    //     "role": "string",
    //     "skill": [
    //       "string"
    //     ],
    //     "certification": [
    //       "string"
    //     ]
    //   }
    return this.post(`api/users`, formData);
  };

  // API xóa người dùng
  deleteNguoiDung = (id) => {
    return this.delete(`api/users?=${id}`);
  };

  // API phân trang tìm kiếm người dùng (pageIndex, pageSize, keyword)
  getPhanTrangTimkiemNguoiDung = () => {
    return this.get(`api/users/phan-trang-tim-kiem`);
  };

  // API lấy thông tin người dùng theo id
  getThongTinNguoiDungTheoId = (id) => {
    return this.get(`api/users/${id}`);
  };

  // API sửa thông tin của người dùng
  putThongTinNguoiDung = (id, infoUser) => {
    return this.put(`api/users/${id}`, infoUser);
  };

  // API tìm kiếm người dùng theo tên
  getTimKiemNguoiDungTheoTen = (tenNguoiDung) => {
    return this.get(`api/users/search/${tenNguoiDung}`);
  };

  // API upload avatar
  postAvatar = (avatar) => {
    return this.post(`api/users/upload-avatar`, avatar);
  };
}

export const userManagementServices = new UserManagementServices();
