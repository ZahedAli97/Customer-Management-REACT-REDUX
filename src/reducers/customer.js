import {
  GET_CUSTOMER,
  DELETE_CUSTOMER,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_FAILURE,
  CHANGE_INPUT,
  SUBMIT_CUSTOMER
} from "../actionTypes/customer";

import produce from "immer";

const initialState = {
  customers: [],
  isLoading: false,
  name: "",
  email: "",
  mobile: ""
};
export default function customerReducer(prevState = initialState, action) {
  return produce(prevState, draft => {
    switch (action.type) {
      case DELETE_CUSTOMER:
      case SUBMIT_CUSTOMER:
      case GET_CUSTOMER:
        draft.isLoading = true;
        break;

      case GET_CUSTOMER_SUCCESS:
        draft.isLoading = false;
        draft.customers = action.customers;
        break;

      case GET_CUSTOMER_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;

      // case SUBMIT_CUSTOMER:
      // break;

      case CHANGE_INPUT:
        //[] = computed keys
        draft[action.fieldName] = action.fieldValue;
        break;
    }
  });
}

// case DELETE_CUSTOMER:
// const customers = prevState.customers.filter(
//   c => c.email !== action.email
// );
// If prevState is after customers then old customer value will over ride new customers value
// break;
