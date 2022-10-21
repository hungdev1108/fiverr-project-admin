import { DatePicker, Form, Input, Select } from "antd";
import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postNguoiDungAction } from "../../../store/actions/UserManagementAction";

const { Option } = Select;

function AddUser() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Đây là khi mình push vô data nhé
    // Ví dụ 12/10/2022 thì nó sẽ thành 10/12/2022
    // Nhưng khi em hiển thị bên edit thì chỉ cần format lại DD/MM/YYYY là được
    values.birthday = moment(values.birthday).format("MM/DD/YYYY");
    values = { ...values, role: "ADMIN" };
    console.log(values);
    dispatch(postNguoiDungAction(values, history));
  };

  return (
    <div className="container">
      <h3 className="text-center mb-3">Create Admin Account</h3>
      <Form
        form={form}
        onFinish={onFinish}
        initialValues={{}}
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
              type: "string",
              pattern:
                /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/,
            },
          ]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
            {
              message: "Your phone number is invalid!",
              pattern: /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
            },
          ]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value={true}>Male</Option>
            <Option value={false}>Female</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Birthday"
          name="birthday"
          rules={[{ required: true, message: "Please select your birthday!" }]}
        >
          <DatePicker format={"DD/MM/YYYY"} />
        </Form.Item>

        <Form.Item label="Role">
          <Input type="text" value="ADMIN" placeholder="ADMIN" disabled />
        </Form.Item>

        <Form.Item name="skill" label="Skill">
          <Select mode="tags" placeholder="Select your skills">
            <Option value=""></Option>
            {/* <Option value="CSS">CSS</Option>
            <Option value="JS">JS</Option> */}
          </Select>
        </Form.Item>

        <Form.Item name="certification" label="Certification">
          <Select mode="tags" placeholder="Select your certification">
            <Option value=""></Option>
            {/* <Option value="FSOFT">FSOFT</Option> */}
          </Select>
        </Form.Item>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-success">
            Create admin
          </button>
          <button type="reset" className="ml-3 btn border">
            Reset form
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AddUser;
