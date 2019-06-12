import React, { Component } from "react";
import ProductItem from "../../components/CardItem";
import api from "../../services/api";

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
          {data.map(item => {
            return <ProductItem key={item._id} product={item} />;
          })}
        </>
      );
    } else {
      return <>loading...</>;
    }
  }
}

export default ProductIndex;
