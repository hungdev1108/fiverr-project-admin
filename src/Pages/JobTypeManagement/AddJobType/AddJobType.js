import { Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postLoaiCongViecMenuAction } from "../../../store/actions/JobTypeManagementAction";

function AddJobType() {
  const dispatch = useDispatch();

  const history = useHistory();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);

    dispatch(postLoaiCongViecMenuAction(values, history));
  };

  return (
    <div className="container">
      <h3 className="text-center mb-3">Create Job type</h3>
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
          label="Job type name"
          name="tenLoaiCongViec"
          rules={[
            {
              required: true,
              message: "Please input your job type name!",
              type: "string",
            },
          ]}
        >
          <Input placeholder="Enter your job type name" />
        </Form.Item>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-success">
            Create job type
          </button>
          <button type="reset" className="ml-3 btn border">
            Reset form
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AddJobType;
