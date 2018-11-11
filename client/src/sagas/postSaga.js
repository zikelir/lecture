import { put, call, takeLatest } from 'redux-saga/effects';

import { REQUEST_POST } from '../constants/postConstants';
import { receivePost } from '../actions/postAction';
import { fetchPostApi } from '../services/post';


function* fetchPostData() {
  try {
    // call's api
    const post = yield call(fetchPostApi);
    // calls the action
    yield put(receivePost(post));
  } catch (e) {
    console.log(e);
  }
}

export default function* postsSaga() {
  yield takeLatest(REQUEST_POST, fetchPostData);
}