import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { DatePicker, Form, Input, InputNumber, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";

const { Option } = Select;

function AddJob() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [imgSrc, setImgSrc] = useState("");

  const onFinish = (values) => {
    values = { ...values };
    console.log(values);
    // dispatch(postNguoiDungAction(values, history));
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

      // formik.setErrors()
    }
  };

  return (
    <div className="AddJob container">
      <h3 className="text-center mb-3">Create new Job</h3>
      <Form
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
              message: "Please input job image",
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
