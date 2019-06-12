import React, { Component } from "react";
import { Row, Col } from "antd";
import api from "../../services/api";
import ProductItem from "../../components/Product/ProductItem";

// import { Container } from './styles';

export default class Home extends Component {
  state = {
    data: [],
    loading: true
  };

  componentWillMount() {
    api
      .get("/products")
      .then(response => {
        this.setState({ data: response.data, loading: false }, () => {
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
          <div>
            <Row>
              {data.map(item => {
                return (
                  <Col span={6}>
                    {" "}
                    <ProductItem key={item._id} product={item} />{" "}
                  </Col>
                );
              })}
            </Row>
          </div>
        </>
      );
    } else {
      return <>loading...</>;
    }
  }
}
