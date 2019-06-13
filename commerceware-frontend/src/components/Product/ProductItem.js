import React, { Component } from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from 'redux'
import * as CartActions from "../../store/actions/cart"

import { Card, Icon, Avatar } from "antd";
const { Meta } = Card;

// import { Container } from './styles';
const LOCAL_STORAGE_CART_KEY = "@commerceware:cart";

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
        actions={[<Icon type="shopping-cart" onClick={() => this.props.addCartItem(product)} />]}
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
  cart: state.cart,
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)