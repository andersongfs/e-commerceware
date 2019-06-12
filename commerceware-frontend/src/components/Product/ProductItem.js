import React, { Component } from "react";
import { Card, Icon, Avatar } from "antd";

const { Meta } = Card;

// import { Container } from './styles';

export default class ProductItem extends Component {
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
          <Icon type="setting" />,
          <Icon type="edit" />,
          <Icon type="ellipsis" />
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
