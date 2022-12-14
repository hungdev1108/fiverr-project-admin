import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteLoaiCongViecMenuAction,
  getDanhSachLoaiCongViecMenuAction,
  getThongTinLoaiCongViecTheoIdAction,
} from "../../store/actions/JobTypeManagementAction";
import { UserAddOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import { Table } from "antd";

function JobTypeManagement() {
  const dispatch = useDispatch();
  const { danhSachLoaiCongViec } = useSelector((state) => state.JobTypeManagementReducer);
  //   console.log("danhSachLoaiCongViec", danhSachLoaiCongViec);

  const data = danhSachLoaiCongViec;

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend"],
      //   defaultSortOrder: "descend",
      width: "5%",
    },
    {
      title: "Job Type Name",
      dataIndex: "tenLoaiCongViec",
      sorter: (a, b) => a.tenLoaiCongViec.length - b.tenLoaiCongViec.length,
      sortDirections: ["descend"],
      width: "70%",
    },

    {
      title: "Action",
      dataIndex: "action",
      width: "25%",
      render: (text, jobtype) => {
        return (
          <Fragment>
            <Link to={`/admin/listjobtype/edit/${jobtype.id}`}>
              <EditOutlined className="btn btn-primary" />
            </Link>
            <span
              to="/"
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (window.confirm("Are you sure delete job type " + jobtype.tenLoaiCongViec + "?")) {
                  // Call
                  dispatch(deleteLoaiCongViecMenuAction(jobtype.id));
                }
              }}
            >
              <DeleteOutlined className="ml-3 btn btn-danger" />
            </span>
          </Fragment>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(getDanhSachLoaiCongViecMenuAction());
  }, []);

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="container">
      <h3 className="text-center">Job Type List</h3>
      <div className="d-flex justify-content-between align-items-center m-0 p-0 pb-3">
        <NavLink to="/admin/listjobtype/add" className="btn btn-primary px-3 d-flex align-items-center">
          <UserAddOutlined />
          <span className="ml-2">Add Job Type</span>
        </NavLink>
      </div>
      <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"id"} />
    </div>
  );
}

export default JobTypeManagement;
