import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Landing from "./Landing";
import * as serviceWorker from "./serviceWorker";
import { Router } from "@reach/router";
import Layout from "./layout";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Router>
        <App path="/postgresql" />
        <Landing path="landing_page" />
      </Router>
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
