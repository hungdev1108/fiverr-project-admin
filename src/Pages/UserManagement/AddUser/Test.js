// import { DatePicker, Form, Input, Select } from "antd";
// import { useFormik } from "formik";
// import moment from "moment";
// import React from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { postNguoiDungAction } from "../../../store/actions/UserManagementAction";

// const { Option } = Select;

// function AddUser() {
//   const children = [];

//   const history = useHistory();

//   const dispatch = useDispatch();

//   const handleChangeDatePicker = (value) => {
//     let custombirthday = moment(value).format("DD/MM/YYYY");
//     formik.setFieldValue("birthday", custombirthday);
//   };

//   const handleChangeSelect = (name) => {
//     return (value) => {
//       formik.setFieldValue(name, value);
//     };
//   };

//   const formik = useFormik({
//     initialValues: {
//       id: 0,
//       name: "",
//       email: "",
//       avatar: null,
//       password: "",
//       phone: "",
//       birthday: "",
//       gender: false,
//       role: "ADMIN",
//       skill: [],
//       certification: [],
//     },
//     onSubmit: (values) => {
//       console.log(values);

//       dispatch(postNguoiDungAction(values, history));
//       console.log("values", values);
//     },
//   });

//   return (
//     <div className="container">
//       <h3 className="text-center mb-3">Create Admin Account</h3>
//       <Form
//         onSubmitCapture={formik.handleSubmit}
//         labelCol={{
//           span: 7,
//         }}
//         wrapperCol={{
//           span: 10,
//         }}
//         layout="horizontal"
//       >
//         <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please input your name!" }]}>
//           <Input required onChange={formik.handleChange} type="text " placeholder="Enter your name" />
//         </Form.Item>

//         <Form.Item label="E-mail" name="email" rules={[{ required: true, message: "Please input your email!" }]}>
//           <Input required onChange={formik.handleChange} type="email" placeholder="Enter your email" />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[{ required: true, message: "Please input your password!" }]}
//         >
//           <Input.Password required onChange={formik.handleChange} placeholder="Enter your password" />
//         </Form.Item>

//         <Form.Item
//           label="Phone Number"
//           name="phone"
//           rules={[{ required: true, message: "Please input your phone number!" }]}
//         >
//           <Input required onChange={formik.handleChange} type="text" placeholder="Enter your phone number" />
//         </Form.Item>

//         <Form.Item name="gender" label="Gender" rules={[{ required: true, message: "Please select gender!" }]}>
//           <Select onChange={handleChangeSelect("gender")} placeholder="Select your gender">
//             <Option value={true}>Male</Option>
//             <Option value={false}>Female</Option>
//           </Select>
//         </Form.Item>

//         <Form.Item label="Birthday" name="birthday" rules={[{ required: true }]}>
//           <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
//         </Form.Item>

//         <Form.Item label="Role" name="role">
//           <Input type="text" value="ADMIN" placeholder="ADMIN" disabled />
//         </Form.Item>

//         <Form.Item label="Skill" name="skill" rules={[{ required: true, message: "Please input your skill!" }]}>
//           <Select
//             mode="tags"
//             style={{
//               width: "100%",
//             }}
//             placeholder="Enter your skill"
//             onChange={handleChangeSelect("skill")}
//           >
//             {children}
//           </Select>
//         </Form.Item>

//         <Form.Item
//           label="Certification"
//           name="certification"
//           rules={[{ required: true, message: "Please input your Certification!" }]}
//         >
//           <Select
//             mode="tags"
//             style={{
//               width: "100%",
//             }}
//             placeholder="Enter your certification"
//             onChange={handleChangeSelect("certification")}
//           >
//             {children}
//           </Select>
//         </Form.Item>

//         <div className="d-flex justify-content-center">
//           <button type="submit" className="btn btn-success">
//             Create admin
//           </button>
//           <button type="reset" className="ml-3 btn border">
//             Reset form
//           </button>
//         </div>
//       </Form>
//     </div>
//   );
// }

// export default AddUser;
