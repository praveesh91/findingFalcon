import React from "react";
import { Layout, Menu } from "antd";

import { useHistory, useLocation } from "react-router-dom";
const { Header } = Layout;

const HeaderSection = () => {
  let history = useHistory();
  let location = useLocation();

  const path = location.pathname.split("/")[1];
  console.log(path);
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" selectedKeys={[path]}>
        <Menu.Item key="" onClick={() => history.push("/")}>
          Home
        </Menu.Item>
        <Menu.Item key="find" onClick={() => history.push("/find")}>
          Find your falcon
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderSection;
