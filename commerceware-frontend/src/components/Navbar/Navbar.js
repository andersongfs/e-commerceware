import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Layout, Menu, Icon, Button, Badge } from "antd";

const { Header } = Layout;

class Navbar extends Component {
  getQttItems = () => {
    const products = Object.values(this.props.cart.products);
    var qtt = products.reduce((sum, product) => {
      return sum + product.quantity;
    }, 0);
    return qtt;
  };

  render() {
    return (
      <>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">
              <Link to={"/"}>
                {" "}
                <Icon type="home" /> <span> Home </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to={"/products"}>
                {" "}
                <Icon type="profile" /> <span> Products </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="3" style={{ float: "right" }}>
              <Link to={"/cart"}>
                <Badge count={this.getQttItems()} overflowCount={10}>
                  {" "}
                  <Button icon="shopping-cart" ghost>
                    My Cart
                  </Button>
                </Badge>
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
      </>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(withRouter(Navbar));
