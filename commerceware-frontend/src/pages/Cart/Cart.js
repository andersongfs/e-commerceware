import React, { Component } from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { Table, Divider, Tag } from "antd";
import { columns } from "./CartTableConfig";

// import { Container } from './styles';
const _cart = [
  {
    product: { title: "celular", price: 10, promotion: "THREE_BY_10" },
    quantity: 3
  },
  {
    product: { title: "burguer", price: 10, promotion: "THREE_BY_10" },
    quantity: 2
  }
];

class Cart extends Component {
  render() {
    const products = Object.values(this.props.cart.products);
    console.log(products);
    return (
      <>
        <h1>Cart</h1>
        <Table columns={columns} dataSource={products} pagination={false} />
      </>
    );
  }
}

const mapStateToProps = store => ({
  cart: store.cart,
})

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        promotion: PropTypes.string
      }),
      quantity: PropTypes.number
  })).isRequired,
};



export default connect(mapStateToProps)(Cart)
