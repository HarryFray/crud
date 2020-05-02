import { put, takeEvery, all, take } from "redux-saga/effects";
import axios from "axios";
import { Book } from "../CrudRedux";

function* helloSaga() {}

// Our worker Saga: will perform the async increment task
export function* bookAdded(props: any) {
  var x = yield axios({
    method: "GET",
    url: "https://superhero-search.p.rapidapi.com/",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "superhero-search.p.rapidapi.com",
      "x-rapidapi-key": "2c8ac659b2msha43d5c1f7714711p1b871cjsn1a8e0e0c2a28",
    },
    params: {
      hero: props.payload.author,
    },
  });

  if (typeof x.data === "string") {
  } else {
    // console.log(x.data.images.sm);
    yield put({ type: "ADD_HERO", payload: x.data.images.xs });
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each ADD_BOOK
export function* watchAddBook() {
  yield takeEvery("ADD_BOOK", bookAdded);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchAddBook()]);
}
