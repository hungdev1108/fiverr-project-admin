import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { deleteJobaction } from "../../store/actions/JobManagementAction";

const { confirm } = Modal;

// Modal.info
// Modal.success
// Modal.error
// Modal.warning

export const SignUpSuccess = (history) => {
  Modal.success({
    title: "Notification!",
    content: "Successful account registration!",
    onOk() {
      history.push(`/signin`);
    },
  });
};

export const SignUpError = (noti) => {
  Modal.error({
    title: "Account registration failed!",
    content: noti,
    onOk() {},
  });
};

// export const ConfirmSignOut = (history) => {
//   confirm({
//     title: "Notification!",
//     content: "Want to sign out of your account??",
//     onOk() {
//       localStorage.removeItem(USER_LOGIN);
//       localStorage.removeItem(TOKEN);
//       history.push("/");
//       window.location.reload();
//     },
//     onCancel() {},
//   });
// };

// export const ConfirmDeleteHiredJob = (id, dispatch) => {
//   confirm({
//     title: "THÔNG BÁO!",
//     content: "BẠN CÓ MUỐN XOÁ CÔNG VIỆC ĐÃ THUÊ?",
//     onOk() {
//       dispatch(deleteHireJobAction(id));
//     },
//     onCancel() {},
//   });
// };

// export const deleteHiredJobSuccess = () => {
//   Modal.success({
//     title: "XOÁ CÔNG VIỆC THÀNH CÔNG!",
//     content: "XOÁ CÔNG VIỆC THÀNH CÔNG!",
//     onOk() {},
//   });
// };

// export const BookingJobSuccess = () => {
//   Modal.success({
//     title: "Notification!",
//     content: "Job hire successful, please check in profile page!",
//     onOk() {
//       window.location.reload();
//     },
//   });
// };

export const CreateAccountSuccess = (history) => {
  Modal.success({
    title: "Notification!",
    content: "Create account admin successful!",
    onOk() {
      history.push("/");
    },
  });
};

export const ConfirmDeleteUserDONE = () => {
  Modal.success({
    title: "Notification!",
    content: "Delete user successfully!",
    onOk() {
      window.location.reload();
    },
  });
};

export const ConfirmUpdate = (history) => {
  Modal.success({
    title: "Notification!",
    content: "Update info user successfully!",
    onOk() {
      history.push("/");
    },
  });
};

// export const ConfirmDeleteUser = () => {
//   Modal.warning({
//     title: "Notification!",
//     content: "Are you sure delete user?",
//     onOk: {},
//   });
// };
export const confirmDelete = (name, id, dispacth) => {
  confirm({
    title: "Notification!",
    content: `Are you sure to delete ${name}`,
    icon: <ExclamationCircleOutlined />,
    onOk() {
      dispacth(deleteJobaction(id));
    },
  });
};

export const signInError = (noti) => {
  Modal.error({
    title: "Login failed!",
    content: noti,
    onOk() {},
  });
};

export const confirmSigninadmin = () => {
  Modal.error({
    title: "Notification!",
    content: "UnAuthorization!!!",
    onOk() {},
  });
};
