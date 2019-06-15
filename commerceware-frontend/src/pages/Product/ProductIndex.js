import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import { Table, Button } from "antd";
import { withRouter, Link } from "react-router-dom";
import { columns } from "./ProductIndexConfig";

// import { Container } from './styles';

class ProductIndex extends Component {
  state = {
    data: [],
    loading: true
  };

  editItem = el => e => {
    this.props.history.push({
      pathname: "/products/edit",
      state: {
        promotion: el
      }
    });
  };
  removeItem = el => _ => {
    api
      .delete(`/products/${el._id}`)
      .then(response => {
        this.componentWillMount();
      })
      .catch(error => {
        console.dir(error);
      });
  };

  componentWillMount() {
    api
      .get("/products")
      .then(response => {
        this.setState({ data: response.data, loading: false }, () => {
          console.log("Products loaded");
        });
      })
      .catch(error => {
        console.dir(error);
      });
  }

  render() {
    const { loading, data } = this.state;
    if (!loading) {
      return (
        <>
          <h1>Products List</h1>
          <Link to={"/products/create"}>
            {" "}
            <Button type="primary" size="large" style={{ marginBottom: 10 }}>
              New Product
            </Button>
          </Link>
          <Table columns={columns(this)} dataSource={data} />
        </>
      );
    } else {
      return <>loading...</>;
    }
  }
}

export default withRouter(ProductIndex);
