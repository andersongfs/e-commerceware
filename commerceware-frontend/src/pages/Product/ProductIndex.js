import React, { Component } from "react";
import ProductItem from "../../components/Product/ProductItem";
import api from "../../services/api";
import "./styles.css";
import { Table, Divider, Tag } from "antd";
import { columns } from "./ProductIndexConfig";

// import { Container } from './styles';

class ProductIndex extends Component {
  state = {
    data: [],
    loading: true
  };

  componentWillMount() {
    api
      .get("/products")
      .then(response => {
        this.setState({ data: response.data, loading: false }, () => {
          console.log("response");
          console.log(response);
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
          <Table columns={columns} dataSource={data} />
        </>
      );
    } else {
      return <>loading...</>;
    }
  }
}

export default ProductIndex;
