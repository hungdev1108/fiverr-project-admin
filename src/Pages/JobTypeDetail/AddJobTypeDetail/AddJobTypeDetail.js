import { Form, Input, Select } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postChiTietLoaiCongViecAction } from "../../../store/actions/JobTypeManagementAction";

function AddJobTypeDetail() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { danhSachLoaiCongViec } = useSelector((state) => state.JobTypeManagementReducer);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);

    dispatch(postChiTietLoaiCongViecAction(values, history));
  };

  return (
    <div className="container">
      <h3 className="text-center mb-3">Edit Job Type Detail</h3>
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
          label="Job Type Detail Name"
          name="tenChiTiet"
          rules={[
            {
              required: true,
              message: "Please input your name!",
              type: "string",
            },
          ]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          name="maLoaiCongviec"
          label="Job Type Code"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={danhSachLoaiCongViec?.map((loaicongviec) => ({
              label: loaicongviec.tenLoaiCongViec,
              value: loaicongviec.id,
            }))}
            placeholder="Select your Job Type Code"
          ></Select>
        </Form.Item>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-success">
            Update
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AddJobTypeDetail;
