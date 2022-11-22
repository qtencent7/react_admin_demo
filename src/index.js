import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from "./store/index";

import App from "./App";
import Echarts from "./views/Echarts";
import Slider from "./views/Slider";
import Gis from "./views/Gis";
import TableView from "./views/Table";
import FormView from "./views/Form";
import Drag from './views/Drag';

import "antd/dist/antd.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="echarts" element={<Echarts />} />
          <Route path="slider" element={<Slider />} />
          <Route path="gis" element={<Gis />} />
          <Route path="table" element={<TableView />} />
          <Route path="form" element={<FormView />} />
          <Route path="dragger" element={<Drag />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
