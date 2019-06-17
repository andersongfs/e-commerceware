import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import api from "../../services/api";
import ProductForm from "../../components/Product/ProductForm";

class ProductEdit extends Component {
  state = {
    _id: "",
    title: "",
    price: "",
    promotion: undefined,
    allPromotions: {},
    errorMessage: ""
  };

  async componentWillMount() {
    if (this.props.location.state) {
      const productProps = this.props.location.state.product;
      this.loadPromotions();

      this.setState({
        ...this.state,
        _id: productProps._id,
        title: productProps.title,
        price: productProps.price,
        promotion: productProps.promotion
          ? productProps.promotion.id
          : undefined
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangePrice = price => {
    this.setState({ price: price });
  };

  onSubmit = async e => {
    e.preventDefault();
    let { _id, title, price, promotion } = this.state;

    if (!title.length) return;
    if (!price) return;

    var config = {
      title: title,
      price: price,
      promotion: promotion
    };
    api
      .put(`/products/${_id}`, config)
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

  loadPromotions() {
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
      <div className="edit-wrapper">
        <ProductForm context={this} />
      </div>
    );
  }
}

export default withRouter(ProductEdit);
