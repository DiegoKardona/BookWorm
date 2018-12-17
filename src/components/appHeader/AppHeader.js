import React from "react";

import "./AppHeader.css";

/*Imporiing Ant Design*/
import { Layout, Menu } from "antd";

/*Importing Ant Design Col and Row*/
import { Row, Col } from "antd";

const { Header } = Layout;

export default function AppHeader() {
  return (
    <Header className="header">
      <Row>
        <Col span={2} offset={10}>
          <Menu.Item key="1">Iniciar sesión</Menu.Item>
        </Col>
      </Row>
    </Header>
  );
}
