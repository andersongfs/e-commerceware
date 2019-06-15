import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import { Table, Divider, Tag, Button } from "antd";
import { withRouter, Link } from "react-router-dom";
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
          <Link to={"/products/create"}>
            {" "}
            <Button type="primary" size="large" style={{ marginBottom: 10 }}>
              New Product
            </Button>
          </Link>
          <Table columns={columns} dataSource={data} />
        </>
      );
    } else {
      return <>loading...</>;
    }
  }
}

export default ProductIndex;
