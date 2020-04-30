import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

import books from "./books";
import heros from "./heros";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

var booksApp = combineReducers({
  books,
  heros,
});

export default createStore(booksApp, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);
