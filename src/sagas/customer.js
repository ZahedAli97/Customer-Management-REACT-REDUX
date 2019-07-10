import { put } from "redux-saga/effects";
import {
  get_customer_success,
  get_customer_failure,
  delete_customer,
  submit_customer
} from "../actionCreator/customer";

export function* getCustomersSaga() {
  try {
    const link = yield fetch(" http://localhost:3000/customers");
    const customers = yield link.json();
    console.log(customers);
    yield put(get_customer_success(customers));
  } catch (err) {
    yield put(get_customer_failure(err));
  }
}

// export function* deleteCustomerSaga(action) {
//   //console.log(action);
//   try {
//     yield fetch(`http://localhost:3000/customers/${action.id}`, {
//       method: "DELETE"
//     });
//     yield getCustomersSaga();
//   } catch (err) {}
// }

export function* deleteCustomerSaga(action) {
  //console.log(action);
  try {
    const customerResponse = yield fetch(
      `http://localhost:3000/customers?email=${action.email}`
    );
    const [customer] = yield customerResponse.json(); //array destructuring
    console.log(customer);
    yield fetch(
      `http://localhost:3000/customers/${customer.id}`,

      {
        method: "DELETE"
      }
    );
    yield getCustomersSaga();
  } catch (err) {
    yield put(delete_customer(null));
  }
}

export function* submitCustomerSaga(action) {
  //console.log(action);
  try {
    yield fetch(`http://localhost:3000/customers`, {
      method: "POST",
      body: JSON.stringify(action.customer),
      headers: {
        "Content-Type": "application/json"
        // Noting the db that package is of type json
      }
    });

    yield getCustomersSaga();
  } catch (err) {
    yield put(submit_customer(null));
  }
}
