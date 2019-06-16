import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as CartActions from "../../store/actions/cart";

import { Card, Button } from "antd";
const { Meta } = Card;

class ProductItem extends Component {
  handleDescription = () => {
    const { product } = this.props;
    if (product.promotion) {
      return (
        <>
          <div>
            <strong>R$ {product.price} </strong>
          </div>

          <strong>{product.promotion}</strong>
        </>
      );
    } else {
      return (
        <>
          <strong>R$ {product.price} </strong>
        </>
      );
    }
  };

  render() {
    const { product } = this.props;
    return (
      <Card
        style={{ margin: 20 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <Button
            type="primary"
            icon="shopping-cart"
            onClick={() => this.props.addCartItem(product)}
            block
            ghost
          />
        ]}
      >
        <Meta
          // avatar={
          //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          // }
          title={product.title}
          description={this.handleDescription()}
        />
      </Card>
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
)(ProductItem);
