import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./component/redux/State";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App State={store.State} AddPost={store.AddPost} AddMessage = {store.AddMessage} />
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
