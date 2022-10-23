import { Table } from "antd";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { fectchListJobAction } from "../../store/actions/JobManagementAction";
import { BookTwoTone, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { confirmDelete } from "../../components/Notification/Notification";
// const { Search } = Input;

function JobManagement() {
  const dispatch = useDispatch();
  const listJob = useSelector((state) => state.JobManagementReducer.listJob);

  const columns = [
    {
      title: <span className="font-semibold uppercase">Id</span>,
      dataIndex: "id",
      value: (text, object) => <span>{text}</span>,
      sorter: (a, b) => a.id - b.id,
      defaultSortOrder: "descend",
      sortDirections: ["descend"],
      width: "7%",
    },
    {
      title: <span className="font-semibold">Image</span>,
      dataIndex: "hinhAnh",
      render: (text, job, index) => (
        <div style={{ height: 100 }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={text}
            alt={job.tenCongViec}
            onError={(e) => {
              e.target.onError = null;
              e.target.src = `https://picsum.photos/id/${index}/70/70`;
            }}
          />
        </div>
      ),
      width: "15%",
      align: "center",
    },
    {
      title: <span className="font-semibold">Name</span>,
      dataIndex: "tenCongViec",
      sorter: (a, b) => {
        let nameJobA = a.tenCongViec.toLowerCase().trim();
        let nameJobB = b.tenCongViec.toLowerCase().trim();
        return nameJobA > nameJobB;
      },
      sortDirections: ["descend"],
      width: "30%",
    },
    {
      title: <span className="font-semibold">Description</span>,
      dataIndex: "moTa",
      render: (text, job) => (
        <>{job.moTa.length > 50 ? job.moTa.substr(0, 100) + "..." : job.moTa}</>
      ),
      width: "30%",
    },
    {
      title: <span className="font-semibold">Action</span>,
      dataIndex: "action",
      render: (text, job) => (
        <Fragment>
          <Link key={1} to={`/admin/listjob/edit/${job.id}`}>
            <EditOutlined className="btn btn-primary" />
          </Link>
          <span
            key={2}
            style={{ cursor: "pointer" }}
            onClick={() => {
              confirmDelete(`this job: ${job.tenCongViec}`, job.id, dispatch);
            }}
          >
            <DeleteOutlined className="ml-3 btn btn-danger" />
          </span>
        </Fragment>
      ),
    },
  ];

  useEffect(() => {
    dispatch(fectchListJobAction());
  }, []);

  return (
    <div className="JobManagement container">
      <h3 className="text-center">List Jobs</h3>
      <div className="d-flex justify-content-between align-items-center m-0 p-0 pb-3">
        <NavLink
          to="/admin/listjob/add"
          className="btn btn-primary px-3 d-flex align-items-center"
        >
          <BookTwoTone />
          <span className="ml-2">Add new Job</span>
        </NavLink>
        {/* <Search
          className="col-4 p-0"
          placeholder="Search"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        /> */}
      </div>
      <Table bordered columns={columns} dataSource={listJob} rowKey={"id"} />
    </div>
  );
}

export default JobManagement;
