import React, { Component } from "react";
import { Card, Icon, Avatar } from "antd";

const { Meta } = Card;

// import { Container } from './styles';
const LOCAL_STORAGE_CART_KEY = "@commerceware:cart";

export default class ProductItem extends Component {
  state = {
    cart: new Map()
  };

  mapToObj = inputMap => {
    let obj = {};

    inputMap.forEach(function(value, key) {
      obj[key] = value;
    });

    return obj;
  };

  objToMap = inputObj => {
    let map = new Map();
    inputObj.map(item => {
      console.log(item);
    });

    return map;
  };

  addToCart = () => {
    // TODO: BUGFIX
    // const { product, qtt = 1 } = this.props;
    // if (localStorage.getItem(LOCAL_STORAGE_CART_KEY)) {
    //   console.dir(this.objToMap(localStorage.getItem(LOCAL_STORAGE_CART_KEY)));
    //   let cart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY));
    //   console.dir(cart);
    //   let _cart = cart;
    //   if (_cart && !_cart.has(product._id)) {
    //     _cart.set(product._id, qtt);
    //   } else {
    //     let productCartQuantity = _cart.get(product._id);
    //     _cart.set(product._id, (productCartQuantity += qtt)); //incrementa quantidade
    //   }
    //   localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(_cart));
    // } else {
    //   let map = new Map();
    //   map.set(product._id, qtt);
    //   let mapObj = this.mapToObj(map);
    //   localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(mapObj));
    // }
  };

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
        actions={[<Icon type="shopping-cart" onClick={this.addToCart} />]}
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
