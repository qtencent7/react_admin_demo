import { Layout } from "antd";
import React from "react";

import SiderBar from "./components/SiderBar/index";
import HeaderBar from "./components/HeaderBar/index";
import ContentMain from "./components/ContentMain/index";

import "./App.css";


function App() {
  return (
      <Layout className="App">
        <SiderBar />
        <Layout>
          <HeaderBar />
          <ContentMain />
        </Layout>
      </Layout>
  );
}

export default App;
