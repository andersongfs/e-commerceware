import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Button, Input, InputNumber, Select } from "antd";
import api from "../../services/api";

const { Option } = Select;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class ProductShow extends Component {
  state = {
    title: "",
    price: "",
    promotion: "",
    errorMessage: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangePrice = price => {
    this.setState({ price: price });
  };

  onSubmit = async e => {
    e.preventDefault();
    let { title, price, promotion } = this.state;

    if (!title.length) return;
    var config = {
      title: title,
      price: price,
      promotion: promotion
    };
    api
      .post("/products", config)
      .then(response => {
        this.props.history.goBack();
      })
      .catch(error => {
        console.dir(error);
      });
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
              placeholder="title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
              required={true}
              style={{ width: 400 }}
            />
          </Form.Item>
          <Form.Item>
            <InputNumber
              placeholder="price"
              name="price"
              formatter={value =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={value => value.replace(/\$\s?|(,*)/g, "")}
              min={1}
              value={this.state.price}
              onChange={this.onChangePrice}
              style={{ width: 400 }}
            />
          </Form.Item>
          <Form.Item>
            <Select
              showSearch
              placeholder="Select a promotion"
              optionFilterProp="children"
              onChange={this.onSelectChange}
              style={{ width: 400 }}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="THREE_BY_10">Three by only $10,00</Option>
              <Option value="BUY_2_PAY_1">Buy 2 Pay 1</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default withRouter(ProductShow);
