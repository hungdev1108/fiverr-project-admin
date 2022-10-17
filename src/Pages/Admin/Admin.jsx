import React from "react";
import "./Admin.scss";
// import { UploadOutlined } from "@ant-design/icons";
import { Layout, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const menu = (
  <Menu
    items={[
      { key: "1", label: <Link to="/profile">Profile</Link> },
      {
        key: "2",
        label: (
          <a href="/" onClick={() => localStorage.clear()}>
            Logout
          </a>
        ),
      },
    ]}
  />
);

function getItem(label, key, icon, children) {
  return { key, icon, children, label };
}

const items = [
  getItem("User Management", "sub1", <></>, [
    getItem(<Link to="">Add user</Link>, "3"),
    getItem(<Link to="">List user</Link>, "4"),
  ]),
  getItem("Job Management", "sub2", <></>, [getItem(<Link to="">List Job</Link>, "6")]),
  getItem("Job Type Management", "sub3", <></>, [getItem(<Link to="">List Job Type</Link>, "7")]),
  getItem("Service Management", "sub4", <></>, [getItem(<Link to="">List Service</Link>, "8")]),
];

function Admin() {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="d-flex align-items-center justify-content-center">
          <Link to="/" className="logo">
            <img width={150} src={require("../../assets/images/Fiverr-Logo.png")} alt="Logo" />
          </Link>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]} items={items} />
      </Sider>

      <Layout>
        <Header className="site-layout-sub-header-background mb-3" style={{ padding: 0 }}>
          <div className="text-success text-right mr-3 float-right">
            <Dropdown overlay={menu} placement="bottom" arrow trigger={["click"]}>
              <div className="font-weight-bold" role="button">{`Hi! Admin`}</div>
            </Dropdown>
          </div>
        </Header>

        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Content
          </div>
        </Content>

        <Footer
          style={{
            textAlign: "center",
          }}
        >
          ©2022 Created by HungDN_TA
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Admin;
