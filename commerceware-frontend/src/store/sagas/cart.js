import api from "../../services/api";
import { call, put } from "redux-saga/effects";
import { getDiscountSuccess } from "../actions/cart";

export function* getDiscount(action) {
  const { data } = yield call(
    api.get,
    `/purchasediscount/${action.payload.product._id}/${
      action.payload.product.quantity
    }`
  );

  const discount = {
    _id: action.payload.product._id,
    discount: data.discount,
    priceWithDiscount: data.priceWithDiscount
  };

  yield put(getDiscountSuccess(discount));
}
