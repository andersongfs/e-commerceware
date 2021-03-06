import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "antd";
import api from "../../services/api";
import ProductItem from "../../components/Product/ProductItem";

// import { Container } from './styles';

class Home extends Component {
  state = {
    data: [],
    loading: true
  };

  componentWillMount() {
    api
      .get("/products")
      .then(response => {
        this.setState({ data: response.data, loading: false }, () => {});
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
            <Row type="flex" justify="start">
              {data.map(item => {
                return (
                  <Col key={item._id} span={6}>
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

export default withRouter(Home);
