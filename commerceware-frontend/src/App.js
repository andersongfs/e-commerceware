import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Layout } from "antd";

import "./App.css";
import store from "./store";

import Home from "./pages/Home/Home";
import ProductIndex from "./pages/Product/ProductIndex";
import Cart from "./pages/Cart/Cart";
import ProductCreate from "./pages/Product/ProductCreate";
import ProductEdit from "./pages/Product/ProductEdit";

const { Content, Footer } = Layout;

export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Layout>
              <Navbar />
              <Content style={{ padding: "0 50px", marginTop: 64 }}>
                {/* <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
                <div
                  style={{ background: "#fff", padding: 24, minHeight: 380 }}
                >
                  <Route exact path="/" component={Home} />
                  <Route exact path="/products" component={ProductIndex} />
                  <Route
                    exact
                    path="/products/create"
                    component={ProductCreate}
                  />
                  {/* <Route exact path="/products/show" component={} /> */}
                  <Route exact path="/products/edit" component={ProductEdit} />
                  <Route exact path="/cart" component={Cart} />
                </div>
              </Content>

              <Footer style={{ textAlign: "center" }}>
                Commerceware ©2019
              </Footer>
            </Layout>
          </BrowserRouter>
        </Provider>
      </>
    );
  }
}
