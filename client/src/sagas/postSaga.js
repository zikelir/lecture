import { put, call, takeLatest } from 'redux-saga/effects';

import { REQUEST_POST } from '../constants/postConstants';
import { requestPost } from '../actions/postAction';
import { fetchPostApi } from '../services/post';
import requestReducer from '../reducers/postReducer';


function* fetchPostData({post}) {
  console.log(post);

  try {
    // call's api
    yield call(fetchPostApi,post);
    yield put({ type: 'REQUEST_POST', post });

  } catch (e) {
    console.log(e);
  }
}

export default function* postsSaga() {
  yield takeLatest(REQUEST_POST, fetchPostData);
}