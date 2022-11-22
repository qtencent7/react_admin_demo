import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from "@reduxjs/toolkit";

import {change_collapse} from '../../store/actions/layout'

import './index.css';

const { Header } = Layout;

function HeaderBar(props) {
  const { collapse} = props.value;
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
      }}
    >
      {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => {
            props.actions.change_collapse()
        },
      })}
    </Header>
  );
}
function mapStateToProps(state) {
  return {
    value: state.layout
  }
}
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ change_collapse}, dispatch)
	};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderBar)
