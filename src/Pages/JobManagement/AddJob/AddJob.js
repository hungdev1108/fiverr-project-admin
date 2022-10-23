import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Input, InputNumber, message, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { uploadJobAction } from "../../../store/actions/JobManagementAction";
import { getMenuLoaiCongViecAction } from "../../../store/actions/JobTypeManagementAction";

function AddJob() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userSignIn = useSelector(
    (state) => state.UserManagementReducer.userSignin.user
  );
  const menuloaicongviec = useSelector(
    (state) => state.JobTypeManagementReducer.menuloaicongviec
  );
  const [JobTypeDetail, setJobTypeDetail] = useState();
  const [imgSrc, setImgSrc] = useState("");
  const [fileImage, setFileImage] = useState();

  const [form] = Form.useForm();
  // let formData = new FormData();

  const onFinish = (values) => {
    values = { ...values, nguoiTao: userSignIn.id };
    const formData = new FormData();
    formData.append("formFile", fileImage, fileImage.name);
    dispatch(uploadJobAction(values, history, formData));
  };

  const handleChangeFile = (e) => {
    //get file from e
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png" ||
      file.type === "image/gif"
    ) {
      //readFile
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result); //base64 img
      };

      setFileImage(file);
      // data.append("file", file, file.name);
    }
  };

  const onChangeJobType = (id) => {
    const jobType = menuloaicongviec.find((item) => item.id === id);
    const jobTypeDetailClone = [];
    jobType?.dsNhomChiTietLoai.map((item1) => {
      return item1?.dsChiTietLoai.map((item2) =>
        jobTypeDetailClone.push(item2)
      );
    });

    setJobTypeDetail(jobTypeDetailClone);
  };

  useEffect(() => {
    dispatch(getMenuLoaiCongViecAction());
  }, []);

  return (
    <div className="AddJob container">
      <h3 className="text-center mb-3">Create new Job</h3>
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
          label="Job name"
          name="tenCongViec"
          rules={[
            {
              required: true,
              message: "Please input job name!",
              type: "string",
              pattern:
                /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/,
            },
          ]}
        >
          <Input placeholder="Enter job" />
        </Form.Item>

        <Form.Item label="JobType">
          <Select
            options={menuloaicongviec?.map((menu) => ({
              label: menu.tenLoaiCongViec,
              value: menu.id,
            }))}
            onChange={onChangeJobType}
          />
        </Form.Item>

        <Form.Item name="maChiTietLoaiCongViec" label="JobTypeDetail">
          <Select
            options={JobTypeDetail?.map((item) => ({
              label: item.tenChiTiet,
              value: item.id,
            }))}
          />
        </Form.Item>

        <Form.Item
          label="Reviews"
          name="danhGia"
          rules={[
            {
              required: true,
              message: "Please rate",
            },
          ]}
        >
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item
          label="Star work"
          name="saoCongViec"
          rules={[
            {
              required: true,
              message: "Please leave star work",
            },
          ]}
        >
          <InputNumber min={1} max={10} />
        </Form.Item>

        <Form.Item
          label="Price"
          name="giaTien"
          rules={[
            {
              required: true,
              message: "Please write the price",
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label="Description"
          name="moTa"
          rules={[
            {
              required: true,
              message: "Please leave a description",
              type: "string",
            },
          ]}
        >
          <TextArea
            placeholder="Leave desription"
            rows={4}
            style={{ resize: "none" }}
          />
        </Form.Item>

        <Form.Item
          label="Short Description"
          name="moTaNgan"
          rules={[
            {
              required: true,
              message: "Please leave a description",
              type: "string",
            },
          ]}
        >
          <Input placeholder="Short Description" />
        </Form.Item>

        <Form.Item
          label="Image"
          name="hinhAnh"
          rules={[
            {
              required: true,
              message: "Please set image",
              type: "file",
            },
          ]}
        >
          <input type="file" onChange={handleChangeFile} accept="image/*" />
          <br />
          <img style={{ width: 150, height: 150 }} src={imgSrc} alt="" />
        </Form.Item>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-success">
            Create new Job
          </button>
          <button type="reset" className="ml-3 btn border">
            Reset form
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AddJob;
