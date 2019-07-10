import { createStore, applyMiddleware } from "redux";
import customerReducer from "../reducers/customer";
import createSagaMiddleware from "redux-saga";
import { getCustomerWatcher } from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(customerReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(getCustomerWatcher);

export default store;
