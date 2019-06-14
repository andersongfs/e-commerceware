import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import * as CartActions from "../../store/actions/cart";

import { Table, Divider, Tag } from "antd";
import { columns } from "./CartTableConfig";

class Cart extends Component {
  increaseQuantity = el => _ => {
    this.props.addCartItem(el);
    console.log(`aumentar 1 do item ${el._id}`);
  };

  decreaseQuantity = el => _ => {
    // this.props.increaseQuantity(el)
    // action -> chamar reducer que vai mudar o estado, que volta pra cá no mapStateToProps
    console.log(`Diminuir 1 do item ${el._id}`);
    this.props.decreaseCartItem(el);
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
