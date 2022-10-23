import { Form, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import {
  getThongTinLoaiCongViecTheoIdAction,
  putThongTinLoaiCongViecMenu,
} from "../../../store/actions/JobTypeManagementAction";

function EditJobType() {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const history = useHistory();

  const jobTypeId = match.params.id;

  const [form] = Form.useForm();

  let thongTinLoaiCongViec = useSelector((state) => state.JobTypeManagementReducer.thongTinLoaiCongViec);

  useEffect(() => {
    dispatch(getThongTinLoaiCongViecTheoIdAction(jobTypeId));
  }, [jobTypeId]);

  useEffect(() => {
    if (thongTinLoaiCongViec?.tenLoaiCongViec) {
      form.setFieldsValue({ ...thongTinLoaiCongViec });
    }
  }, [thongTinLoaiCongViec?.tenLoaiCongViec]);

  const onFinish = (values) => {
    console.log(values);
    dispatch(putThongTinLoaiCongViecMenu(jobTypeId, values, history));
  };

  return (
    <div className="container">
      <h3 className="text-center mb-3">Edit Job Type</h3>
      <Form
        form={form}
        onFinish={onFinish}
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
      >
        <Form.Item
          label="Job Type Name"
          name="tenLoaiCongViec"
          rules={[
            {
              required: true,
              message: "Please input your job type name!",
              type: "string",
            },
          ]}
        >
          <Input value={thongTinLoaiCongViec?.tenLoaiCongViec} />
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

export default EditJobType;
