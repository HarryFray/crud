import { combineReducers, createStore, applyMiddleware } from "redux";
import books from "./books";

const logger = (store: any) => (next: any) => (action: any) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

var booksApp = combineReducers({
  books,
});

export default createStore(booksApp, applyMiddleware(logger));
