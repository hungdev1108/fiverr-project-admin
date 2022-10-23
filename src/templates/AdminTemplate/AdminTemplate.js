import React, { useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import "./AdminTemplate.scss";

import { Dropdown, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { TOKEN, USER_LOGIN } from "../../utils/settings/config";
import { useSelector } from "react-redux";

const { Header, Content, Footer, Sider } = Layout;

const menu = (
  <Menu
    items={[
      //   { key: "1", label: <Link to="/profile">Profile</Link> },
      {
        key: "2",
        label: (
          <a
            href="/"
            onClick={() => {
              const history = useHistory();
              localStorage.clear();
              history.push(`/admin/signin`);
            }}
          >
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
  getItem("User Management", "sub1", <></>, [getItem(<Link to="/admin/listuser">List user</Link>, "3")]),
  getItem("Job Management", "sub2", <></>, [getItem(<Link to="/admin/listjob">List Job</Link>, "4")]),
  getItem("Job Type Management", "sub3", <></>, [
    getItem(<Link to="/admin/listjobtype">List Job Type (Menu)</Link>, "5"),
  ]),
  getItem("Service Management", "sub4", <></>, [getItem(<Link to="/admin/listservice">List Service</Link>, "7")]),
];

function AdminTemplate(props) {
  // path, exact, Component
  const { Component, ...restProps } = props;

  const { userSignin } = useSelector((state) => state.UserManagementReducer);
  console.log(userSignin);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //   Check role account
  if (!localStorage.getItem(TOKEN)) {
    alert("Please signin!");
    return <Redirect to="/admin/signin" />;
  }

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        // props.location, props.history, props.match
        return (
          //   <Fragment>
          //     {/* <Header {...propsRoute} /> */}
          //     <Component {...propsRoute} />
          //     {/* <Footer /> */}
          //   </Fragment>
          <Layout>
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={(broken) => {
                // console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                // console.log(collapsed, type);
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
                    <div className="font-weight-bold" role="button">{`Hi! Admin (${userSignin.user?.name})`}</div>
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
                  <Component {...propsRoute} />
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
      }}
    />
  );
}

export default AdminTemplate;
