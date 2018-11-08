import { put, call, takeLatest } from 'redux-saga/effects';

import { REQUEST_ALL_POSTS } from '../constants/postsConstants';
import { receiveAllPosts } from '../actions/postsAction';
import { fetchAllPostsApi } from '../services/posts';


function* fetchAllPostsData() {
  try {
    // call's api
    const allPosts = yield call(fetchAllPostsApi);
    // calls the action
    yield put(receiveAllPosts(allPosts));
  } catch (e) {
    console.log(e);
  }
}

export default function* categoriesSaga() {
  yield takeLatest(REQUEST_ALL_POSTS, fetchAllPostsData);
}