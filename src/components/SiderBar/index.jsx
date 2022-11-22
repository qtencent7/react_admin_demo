import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

const { Sider } = Layout;

function SiderBar(props) {
  const { collapse } = props.value;
  return (
    <Sider trigger={null} collapsible collapsed={collapse}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to='/echarts'>Echarts</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to='/slider'>Slider</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to='/gis'>GIS</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          <Link to='/table'>Table</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
          <Link to='/form'>Form</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<UserOutlined />}>
          <Link to='/dragger'>Dragger</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
function mapStateToProps(state) {
  return {
    value: state.layout,
  };
}

export default connect(mapStateToProps)(SiderBar);
