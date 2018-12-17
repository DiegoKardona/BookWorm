import React from "react";
import { render } from "react-dom";

import "./styles.css";

/*Importing Ant Design https://ant.design/docs/react/introduce*/
import "antd/dist/antd.css";

/*Importing React Router*/
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

/*Importing my components for route*/
import HomePage from "./pages/home/HomePage";
import AuthPage from "./pages/auth/AuthPage";

function App() {
  return (
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/auth" exact component={AuthPage} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
