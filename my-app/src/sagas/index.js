import { call, put, takeEvery } from "redux-saga/effects";
import { fetchHackerNews } from "../api";

export function* fetchResultsWorker({ pathParams }) {
  const { query = "", tags = "", page = "" } = pathParams;
  try {
    const response = yield call(fetchHackerNews, {
      query,
      tags,
      page
    });
    yield put({ type: "FETCH_SUCCESS", payload: response });
  } catch (e) {
    console.error(e);
    yield put({ type: "FETCH_ERROR", message: e.message });
  }
}

function* sagas() {
  yield takeEvery("FETCH_ACTION", fetchResultsWorker);
}

export default sagas;
