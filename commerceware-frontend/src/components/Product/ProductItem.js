import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as CartActions from "../../store/actions/cart";

import { Card, Button, Icon } from "antd";
const { Meta } = Card;

class ProductItem extends Component {
  addCartItem = async product => {
    await this.props.addCartItem(product);
    this.props.getDiscountRequest(this.props.cart.products[product._id]);
  };

  handleDescription = () => {
    const { product } = this.props;
    if (product.promotion) {
      return (
        <>
          <div>
            <b>$ {product.price} </b>
          </div>
          <Icon type="tag" style={{ marginRight: 10 }} />
          <b>{product.promotion.name}</b>
        </>
      );
    } else {
      return <b>$ {product.price} </b>;
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy9cWUMYBZHQ4KEnoRksOLiAMXOmfO1hEEQIANvpMQIntpVzFH"
          />
        }
        actions={[
          <Button
            type="primary"
            icon="shopping-cart"
            onClick={() => this.addCartItem(product)}
            block
            ghost
          >
            Buy Now
          </Button>
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

ProductItem.propTypes = {
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
)(ProductItem);
