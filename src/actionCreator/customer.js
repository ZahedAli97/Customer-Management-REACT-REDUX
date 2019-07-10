import {
  GET_CUSTOMER,
  DELETE_CUSTOMER,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_FAILURE,
  SUBMIT_CUSTOMER,
  CHANGE_INPUT
} from "../actionTypes/customer";

export function get_customer() {
  return { type: GET_CUSTOMER };
}

export function get_customer_success(customers) {
  return { type: GET_CUSTOMER_SUCCESS, customers };
}
export function get_customer_failure(error) {
  return { type: GET_CUSTOMER_FAILURE, error };
}
export function delete_customer(email) {
  return { type: DELETE_CUSTOMER, email };
}

export function change_input(fieldName, fieldValue) {
  return { type: CHANGE_INPUT, fieldName, fieldValue };
}

export function submit_customer(customer) {
  return { type: SUBMIT_CUSTOMER, customer };
}
