import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Button, Input, InputNumber, Select } from "antd";
import api from "../../services/api";
import apiRequests from "../../services/apiRequests";
import ProductForm from "../../components/Product/ProductForm";

const { Option } = Select;

class ProductCreate extends Component {
  state = {
    title: "",
    price: "",
    promotion: undefined,
    allPromotions: {},
    errorMessage: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangePrice = price => {
    this.setState({ price: price });
  };

  onSubmit = async e => {
    e.preventDefault();
    let { title, price, promotion } = this.state;

    if (!title.length) return;
    if (!price) return;

    var config = {
      title: title,
      price: price,
      promotion: promotion
    };
    api
      .post("/products", config)
      .then(response => {
        this.props.history.goBack();
      })
      .catch(error => {
        console.dir(error);
      });
  };

  onSelectChange = value => {
    if (value === "NO_PROMOTION") {
      this.setState({ promotion: null });
    } else {
      this.setState({ promotion: value });
    }
  };

  componentWillMount() {
    api
      .get("/promotions")
      .then(response => {
        this.setState({ allPromotions: response.data });
      })
      .catch(error => {
        console.dir(error);
      });
  }

  render() {
    return (
      <div className="create-wrapper">
        <ProductForm context={this} />
      </div>
    );
  }
}

export default withRouter(ProductCreate);
