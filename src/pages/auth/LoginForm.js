import React, { PureComponent } from "react";

import { Form, Icon, Input, Button } from "antd";

class LoginForm extends PureComponent {
  state = {
    data: {
      username: "",
      password: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        alert("Received values of form: ", values);
      }
    });
  };

  handleChange = e => {
    this.setState({ ...this.state.data, [e.target.name]: e.target.value });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { data } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} layout={"horizontal"}>
        <h1 style={{ color: "white" }}>{data.username}</h1>
        <Form.Item>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              value={data.username}
              onChange={this.handleChange}
              name="username"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              value={data.password}
              onChange={this.handleChange}
              name="password"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(LoginForm);
