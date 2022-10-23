import React, { Fragment, useEffect } from "react";
import { Table } from "antd";
import { UserAddOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteNguoiDungAction } from "../../store/actions/UserManagementAction";
import { Link, NavLink } from "react-router-dom";
import { getChiTietLoaiCongViecAction } from "../../store/actions/JobTypeManagementAction";

function JobTypeDetail() {
  const dispatch = useDispatch();
  const { danhSachChiTietLoaiCongViec } = useSelector((state) => state.JobTypeManagementReducer);

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
      title: "Job Type Code",
      dataIndex: "maLoaiCongviec",
      sorter: (a, b) => a.maLoaiCongviec - b.maLoaiCongviec,
      sortDirections: ["descend"],
      width: "15%",
    },
    {
      title: "Group Name",
      dataIndex: "tenNhom",
      sorter: (a, b) => a.tenNhom.length - b.tenNhom.length,
      sortDirections: ["descend"],
      width: "55%",
    },

    {
      title: "Action",
      dataIndex: "action",
      width: "25%",
      render: (text, jobtypedetail) => {
        return (
          <Fragment>
            <span
              onClick={() => {
                alert("Lỗi API lấy chi tiết công việc theo id");
              }}
            >
              <EditOutlined className="btn btn-primary" />
            </span>
            <span
              to="/"
              style={{ cursor: "pointer" }}
              onClick={() => {
                alert("Không có API xóa nhóm chi tiết công việc");
              }}
            >
              <DeleteOutlined className="ml-3 btn btn-danger" />
            </span>
          </Fragment>
        );
      },
    },
  ];

  const data = danhSachChiTietLoaiCongViec;

  useEffect(() => {
    dispatch(getChiTietLoaiCongViecAction());
  }, []);

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="container">
      <h3 className="text-center">Detailed List Of Job Types</h3>
      <div className="d-flex justify-content-between align-items-center m-0 p-0 pb-3">
        <NavLink to="/admin/listjobtypedetail/add" className="btn btn-primary px-3 d-flex align-items-center">
          <UserAddOutlined />
          <span className="ml-2">Add Job Type Detail</span>
        </NavLink>
      </div>
      <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"id"} />
    </div>
  );
}

export default JobTypeDetail;
