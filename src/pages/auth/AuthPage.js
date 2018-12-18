import React from "react";

import "./AuthPage.css";

import { Row, Col } from "antd";

import LoginForm from "./LoginForm";

export default function AuthPage(props) {
  return (
    <div>
      <Row id="login-form">
        <Col span={8}>
          <LoginForm />
        </Col>
      </Row>
    </div>
  );
}
