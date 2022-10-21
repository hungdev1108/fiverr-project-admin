import { DatePicker, Form, Input, Select } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import {
  getThongTinNguoiDungTheoIdAction,
  putThongTinNguoiDungAction,
} from "../../../store/actions/UserManagementAction";

const { Option } = Select;

function EditUser() {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const history = useHistory();

  const userId = match.params.id;
  //   console.log("userId", userId);

  const [form] = Form.useForm();

  let thongTinNguoiDung = useSelector((state) => state.UserManagementReducer.thongTinNguoiDung);
  console.log("thongTinNguoiDung", thongTinNguoiDung);

  useEffect(() => {
    dispatch(getThongTinNguoiDungTheoIdAction(userId));
  }, [userId]);

  useEffect(() => {
    if (thongTinNguoiDung?.name) {
      form.setFieldsValue({ ...thongTinNguoiDung, birthday: moment(thongTinNguoiDung?.birthday) });
    }
  }, [thongTinNguoiDung?.name]);

  const onFinish = (values) => {
    values.birthday = moment(values.birthday).format("MM/DD/YYYY");
    values = { ...values, role: "ADMIN" };
    console.log(values);

    dispatch(putThongTinNguoiDungAction(userId, values, history));
  };

  return (
    <div className="container">
      <h3 className="text-center mb-3">Edit Admin Account</h3>
      <Form
        form={form}
        onFinish={onFinish}
        initialValues={
          {
            //   name: thongTinNguoiDung?.name,
            //   email: thongTinNguoiDung?.email,
            //   phone: thongTinNguoiDung?.phone,
            //   birthday: moment(thongTinNguoiDung?.birthday),
            //   role: "ADMIN",
            //   skill: thongTinNguoiDung?.skill,
            //   certification: thongTinNguoiDung?.certification,
          }
        }
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
          <Input value={thongTinNguoiDung?.name} />
        </Form.Item>

        <Form.Item label="E-mail" name="email" rules={[{ required: true, message: "Please input your email!" }]}>
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
              pattern: /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
            },
          ]}
        >
          <Input />
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
            Update
          </button>
          {/* <button type="reset" className="ml-3 btn border">
            Reset form
          </button> */}
        </div>
      </Form>
    </div>
  );
}

export default EditUser;
