import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
//import { PersistGate } from "redux-persist/integration/react";
import "babel-polyfill";
import 'antd/dist/antd.css';
import "./components/style/margins.scss"
import "./components/style/paddings.scss"
import "./components/style/utils.scss";
import "./index.scss"

import Store from "./app/Store";

// import App from "./app/App";
import Router from "./app/routes/Routes";

// To Use React Router with Redux,
// a configured router is required.
render(
  <Provider store={Store}>
      <Router />
  </Provider>,
    document.getElementById("container"),
);
