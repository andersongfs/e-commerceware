import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import * as CartActions from "../../store/actions/cart";

import { Table } from "antd";
import { columns } from "./CartTableConfig";

class Cart extends Component {
  increaseQuantity = el => async _ => {
    await this.props.addCartItem(el);
    this.props.getDiscountRequest(this.props.cart.products[el._id]);
  };

  decreaseQuantity = el => async _ => {
    await this.props.decreaseCartItem(el);
    this.props.getDiscountRequest(this.props.cart.products[el._id]);
  };

  removeItem = el => _ => {
    this.props.removeCartItem(el);
  };

  render() {
    const products = Object.values(this.props.cart.products);
    return (
      <>
        <h1>Cart</h1>
        <Table
          columns={columns(this)}
          dataSource={products}
          pagination={false}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

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
    })
  ).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
