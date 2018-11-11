

import { put, call, takeLatest } from 'redux-saga/effects';

import { REQUEST_CATEGORY_POSTS } from '../constants/categoryPostsConstants';
import { receiveCategoryPosts } from '../actions/categoryPostsAction';
import { fetchCategoryPostsApi } from '../services/categoryPostsApi';

function* fetchCategoryPostsData() {
  try {
    // call's api
    const categoryPosts = yield call(fetchCategoryPostsApi);
    console.log(categoryPosts);
    // calls the action
    yield put(receiveCategoryPosts(categoryPosts));
  } catch (e) {
    console.log(e);
  }
}

export default function* categoryPostsSaga() {
  yield takeLatest(REQUEST_CATEGORY_POSTS, fetchCategoryPostsData);
}