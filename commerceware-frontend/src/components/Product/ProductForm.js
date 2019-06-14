import React, { Component } from "react";
import { Form, Button, Input, Icon, Select } from "antd";
const { Option } = Select;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default class ProductForm extends Component {
  state = {
    title: "",
    price: "",
    promotion: "",
    errorMessage: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();
    let { title, price, promotion } = this.state;
    console.log(title, price, promotion);

    if (!title.length) return;
    //        this.props.loginUser({username, password}, this.props.history)
  };

  onSelectChange = value => {
    console.log(`selected ${value}`);
    console.log(this);
    this.setState({ promotion: value });
  };
  async componentWillMount() {}

  render() {
    return (
      <div className="login-wrapper">
        <Form onSubmit={this.onSubmit} className="login-form">
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
              required={true}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="price"
              name="price"
              value={this.state.price}
              onChange={this.onChange}
            />
          </Form.Item>
          <Form.Item>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a promotion"
              optionFilterProp="children"
              onChange={this.onSelectChange}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="promotion 1">Promotion 1</Option>
              <Option value="promotion 2">Promotion 2</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
