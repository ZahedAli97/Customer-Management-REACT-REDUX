import {
  GET_CUSTOMER,
  DELETE_CUSTOMER,
  CHANGE_NAME,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_FAILURE,
  CHANGE_EMAIL,
  CHANGE_MOBILE,
  CHANGE_INPUT,
  SUBMIT_CUSTOMER
} from "../actionTypes/customer";

const initialState = {
  customers: [],
  isLoading: false,
  name: "",
  email: "",
  mobile: ""
};
export default function customerReducer(prevState = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMER:
      return {
        ...prevState,
        isLoading: true
      };

    case GET_CUSTOMER_SUCCESS:
      console.log(action.customers);
      return { ...prevState, isLoading: false, customers: action.customers };

    case GET_CUSTOMER_FAILURE:
      return { ...prevState, isLoading: false, error: action.error };

    case DELETE_CUSTOMER:
      // const customers = prevState.customers.filter(
      //   c => c.email !== action.email
      // );
      // If prevState is after customers then old customer value will over ride new customers value
      return { ...prevState };

    case SUBMIT_CUSTOMER:
      return { ...prevState };

    case CHANGE_INPUT:
      //[] = computed keys
      return { ...prevState, [action.fieldName]: action.fieldValue };

    default:
      return prevState;
  }
}
