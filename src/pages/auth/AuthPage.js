import React from "react";

import "./AuthPage.css";

import { Row, Col } from "antd";

import LoginForm from "./LoginForm";

export default function AuthPage(props) {
  return (
    <Row type="flex" justify="center">
      <Col span={8}>
        <LoginForm />
      </Col>
    </Row>
  );
}
