import { baseService } from "./baseService";

export class UserManagementServices extends baseService {
  constructor() {
    super();
  }
}

export const userManagementServices = new UserManagementServices();
