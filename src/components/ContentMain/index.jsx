import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

import './index.css';

const { Content } = Layout;

function ContentMain() {
  return (
    <Content
      className="content"
      style={{
        margin: "24px 16px",
        padding: 24,
      }}
    >
      <Outlet/>
    </Content>
  );
}

export default ContentMain;
