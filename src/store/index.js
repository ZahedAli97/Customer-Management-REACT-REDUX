import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { getCustomerWatcher } from "../sagas";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "../reducers/root";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(getCustomerWatcher);

export default store;
