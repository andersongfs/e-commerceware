import React, { Component } from "react";
import { Descriptions } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import * as CartActions from "../../store/actions/cart";

class CartResume extends Component {
  fullPrice = () => {
    const products = Object.values(this.props.cart.products);
    var price = products.reduce((sum, product) => {
      return sum + product.price * product.quantity;
    }, 0);
    return price;
  };

  totalDiscount = () => {
    const products = Object.values(this.props.cart.products);
    var discount = products.reduce((sum, product) => {
      return sum + product.discount;
    }, 0);
    return discount;
  };

  render() {
    const fullPrice = this.fullPrice();
    const discount = this.totalDiscount();
    const finalPrice = fullPrice - discount;
    return (
      <>
        <Descriptions
          title="Order Resume"
          border
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label="Full Price">{fullPrice}</Descriptions.Item>

          <Descriptions.Item label="Discount">{discount}</Descriptions.Item>

          <Descriptions.Item label="Final Price">
            {finalPrice}
          </Descriptions.Item>
        </Descriptions>
      </>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartResume);
