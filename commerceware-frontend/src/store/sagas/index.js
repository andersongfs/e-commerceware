import { all, takeLatest } from "redux-saga/effects";
import { getDiscount } from "./cart";

export default function* rootSaga() {
  yield all([takeLatest("GET_DISCOUNT_REQUEST", getDiscount)]);
}
