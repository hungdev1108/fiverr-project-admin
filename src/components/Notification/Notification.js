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
      history.push("/admin/listuser");
    },
  });
};

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

export const ConfirmUpdateJobType = (history) => {
  Modal.success({
    title: "Notification!",
    content: "Update job type successfully!",
    onOk() {
      history.push("/admin/listjobtype");
    },
  });
};

export const ConfirmDeleteJobTypeDONE = () => {
  Modal.success({
    title: "Notification!",
    content: "Job type successfully!",
    onOk() {
      window.location.reload();
    },
  });
};

export const CreateJobTypeSuccess = (history) => {
  Modal.success({
    title: "Notification!",
    content: "Create Job type successful!",
    onOk() {
      history.push("/admin/listjobtype");
    },
  });
};

export const CreateJobTypeDetailSuccess = (history) => {
  Modal.success({
    title: "Notification!",
    content: "Create Job type detail successful!",
    onOk() {
      history.push("/admin/listjobtypedetail");
    },
  });
};
