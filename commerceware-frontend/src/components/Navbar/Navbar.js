import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
const { Header } = Layout;

// import { Container } from './styles';

class Navbar extends Component {
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
              <Icon type="shopping-cart" />
            </Menu.Item>
          </Menu>
        </Header>
      </>
    );
  }
}
export default withRouter(Navbar);
