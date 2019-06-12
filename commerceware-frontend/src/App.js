import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import Home from "./pages/Home/Home";

const { Header, Content, Footer } = Layout;

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Layout>
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                style={{ lineHeight: "64px" }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3" style={{ float: "right" }}>
                  <Icon type="shopping-cart" />
                </Menu.Item>
              </Menu>
            </Header>

            <Content style={{ padding: "0 50px", marginTop: 64 }}>
              {/* <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb> */}
              <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/products" component={} />
                <Route exact path="/products/create" component={} />
                <Route exact path="/products/show" component={} />
                <Route exact path="/products/edit" component={} />
                <Route exact path="/cart" component={} /> */}
              </div>
            </Content>

            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </BrowserRouter>
      </>
    );
  }
}
