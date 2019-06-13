import React, { Component } from "react";
import { Table, Divider, Tag } from "antd";
import { columns } from "./CartTableConfig";

// import { Container } from './styles';
const _cart = [
  {
    product: { title: "celular", price: 10, promotion: "THREE_BY_10" },
    qtt: 3
  },
  {
    product: { title: "burguer", price: 10, promotion: "THREE_BY_10" },
    qtt: 2
  }
];
export default class Cart extends Component {
  render() {
    return (
      <>
        <h1>Cart</h1>
        <Table columns={columns} dataSource={_cart} pagination={false} />
      </>
    );
  }
}
