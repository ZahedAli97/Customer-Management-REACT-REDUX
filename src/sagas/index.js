import { takeLatest, all } from "redux-saga/effects";
import {
  getCustomersSaga,
  deleteCustomerSaga,
  submitCustomerSaga
} from "./customer";
import {
  GET_CUSTOMER,
  DELETE_CUSTOMER,
  SUBMIT_CUSTOMER
} from "../actionTypes/customer";

export function* getCustomerWatcher() {
  yield all([
    takeLatest(GET_CUSTOMER, getCustomersSaga),
    takeLatest(DELETE_CUSTOMER, deleteCustomerSaga),
    takeLatest(SUBMIT_CUSTOMER, submitCustomerSaga)
  ]);
}
