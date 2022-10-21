import React, { Fragment, useEffect } from "react";
import { Table, Input, Tag } from "antd";
import { UserAddOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNguoiDungAction,
  getDanhSachNguoiDungAction,
  getTimKiemNguoiDungTheoTenAction,
} from "../../store/actions/UserManagementAction";
import { Link, NavLink } from "react-router-dom";

const { Search } = Input;

function UserManagement() {
  const dispatch = useDispatch();
  const { danhSachNguoiDung } = useSelector((state) => state.UserManagementReducer);

  console.log({ danhSachNguoiDung });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend"],
      width: "5%",
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
      sortDirections: ["descend"],
      width: "25%",
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
      width: "15%",
    },
    {
      title: "Role",
      dataIndex: "role",
      width: "5%",
      filters: [
        {
          text: "ADMIN",
          value: "ADMIN",
        },
        {
          text: "USER",
          value: "USER",
        },
      ],
      onFilter: (value, record) => record.role.indexOf(value) === 0,
      //   sorter: (a, b) => a.role.length - b.role.length,
      sortDirections: ["descend"],
      render: (_, { role }) => (
        <Fragment>
          {role === "ADMIN" ? (
            <Tag className="font-weight-bold" color="red" key={role}>
              {role}
            </Tag>
          ) : (
            <Tag className="font-weight-bold" color="blue" key={role}>
              {role}
            </Tag>
          )}
        </Fragment>
      ),
    },
    {
      title: "Skill",
      key: "skill",
      width: "10%",
      dataIndex: "skill",
      render: (_, { skill }) => {
        // console.log(typeof { skill });
        // console.log({ skill });
        if (skill === null || skill.length === 0) {
          return <span>No skill</span>;
        }
        return (
          <Fragment>
            {skill?.map((item, index) => {
              return (
                <Tag className="mb-2" color="geekblue" key={index}>
                  {item.toUpperCase()}
                </Tag>
              );
            })}
          </Fragment>
        );
      },
    },
    {
      title: "Certification",
      key: "certification",
      width: "25%",
      dataIndex: "certification",
      render: (_, { certification }) => {
        if (certification === null) {
          return <span>No certificate</span>;
        }
        if (certification.length === 0) {
          return <span>No certificate</span>;
        }
        return (
          <Fragment>
            {certification?.map((item, index) => {
              return (
                <Tag className="mb-2" color="green" key={index}>
                  {item.toUpperCase()}
                </Tag>
              );
            })}
          </Fragment>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "25%",
      render: (text, user) => {
        return (
          <Fragment>
            <Link to={`/admin/user/edit/${user.id}`}>
              <EditOutlined className="btn btn-primary" />
            </Link>
            <span
              to="/"
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (window.confirm("Are you sure delete user " + user.name + "?")) {
                  // Call
                  dispatch(deleteNguoiDungAction(user.id));
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

  const data = danhSachNguoiDung;

  useEffect(() => {
    dispatch(getDanhSachNguoiDungAction());
  }, []);

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };
  const onSearch = (value) => {
    dispatch(getTimKiemNguoiDungTheoTenAction(value));
  };

  return (
    <div className="container">
      <h3 className="text-center">List User</h3>
      <div className="d-flex justify-content-between align-items-center m-0 p-0 pb-3">
        <NavLink to="/admin/listuser/add" className="btn btn-primary px-3 d-flex align-items-center">
          <UserAddOutlined />
          <span className="ml-2">Add admin</span>
        </NavLink>
        <Search
          className="col-4 p-0"
          placeholder="Search"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </div>
      <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"id"} />
    </div>
  );
}

export default UserManagement;
