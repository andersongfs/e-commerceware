import api from "./api";

class APIRequests {
  getDiscount = async (productId, quantity) => {
    var config = {
      data: {
        product: productId,
        quantity: quantity
      }
    };
    api
      .post("/purchaseDiscount", config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.dir(error);
      });
  };
}

export default new APIRequests();
