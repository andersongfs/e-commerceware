import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import * as CartActions from "../../store/actions/cart";

import { Table, Button } from "antd";
import { columns } from "./CartTableConfig";
import CartResume from "../../components/Cart/CartResume";

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

  finishOrder = () => {
    this.props.finishOrder();
    this.props.history.push("/");
  };

  render() {
    const products = Object.values(this.props.cart.products);
    const hasItem = Object.keys(this.props.cart.products).length ? true : false;
    return (
      <>
        <h1>Cart</h1>
        <Table
          columns={columns(this)}
          dataSource={products}
          pagination={false}
        />

        <CartResume />

        <Button
          type="primary"
          onClick={() => this.finishOrder()}
          disabled={!hasItem}
          block
        >
          Finish Order
        </Button>
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
  cart: PropTypes.shape({
    products: PropTypes.shape({
      product: PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        promotion: PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string
        })
      }),
      quantity: PropTypes.number
    })
  }).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
