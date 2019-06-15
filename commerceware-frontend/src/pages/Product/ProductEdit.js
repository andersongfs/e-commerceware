import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Button, Input, InputNumber, Select } from "antd";
import api from "../../services/api";

const { Option } = Select;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class ProductEdit extends Component {
  state = {
    _id: "",
    title: "",
    price: "",
    promotion: undefined,
    errorMessage: ""
  };

  async componentWillMount() {
    if (this.props.location.state) {
      const promotionProps = this.props.location.state.promotion;
      this.setState({
        ...this.state,
        _id: promotionProps._id,
        title: promotionProps.title,
        price: promotionProps.price,
        promotion: promotionProps.promotion
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();
    let { _id, title, price, promotion } = this.state;

    if (!title.length) return;
    if (!price) return;

    var config = {
      title: title,
      price: price,
      promotion: promotion
    };
    api
      .put(`/products/${_id}`, config)
      .then(response => {
        this.props.history.goBack();
      })
      .catch(error => {
        console.dir(error);
      });
  };

  onSelectChange = value => {
    if (value === "NO_PROMOTION") {
      this.setState({ promotion: null });
    } else {
      this.setState({ promotion: value });
    }
  };

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
            <Input
              type="number"
              placeholder="price"
              name="price"
              min={0}
              value={this.state.price}
              onChange={this.onChange}
              required={true}
              style={{ width: 400 }}
            />
          </Form.Item>
          <Form.Item>
            <Select
              showSearch
              placeholder="Select a promotion"
              optionFilterProp="children"
              onChange={this.onSelectChange}
              value={this.state.promotion}
              style={{ width: 400 }}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="NO_PROMOTION">None</Option>
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
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default withRouter(ProductEdit);
