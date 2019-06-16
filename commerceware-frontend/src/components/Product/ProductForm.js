import React, { Component } from "react";
import { Form, Button, Input, InputNumber, Select } from "antd";
const { Option } = Select;

export default class ProductForm extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <Form onSubmit={this.props.context.onSubmit} className="login-form">
          <Form.Item label="Title">
            <Input
              placeholder="title"
              name="title"
              value={this.props.context.state.title}
              onChange={this.props.context.onChange}
              required={true}
              style={{ width: 400 }}
            />
          </Form.Item>
          <Form.Item label="Price">
            <InputNumber
              value={this.props.context.state.price}
              placeholder="price"
              min={0}
              max={10}
              step={0.1}
              onChange={this.props.context.onChangePrice}
              required={true}
              style={{ width: 400 }}
            />
          </Form.Item>
          <Form.Item label="Promotion">
            <Select
              showSearch
              placeholder="Select a promotion"
              optionFilterProp="children"
              onChange={this.props.context.onSelectChange}
              value={this.props.context.state.promotion}
              style={{ width: 400 }}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="NO_PROMOTION">None</Option>

              {Object.values(this.props.context.state.allPromotions).map(
                promo => {
                  return (
                    <Option key={promo.id} value={promo.id}>
                      {promo.name}
                    </Option>
                  );
                }
              )}
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
