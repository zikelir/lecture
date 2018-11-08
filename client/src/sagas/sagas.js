import { all } from 'redux-saga/effects';
import fetchCategoriesApi from './categoriesSaga';
import fetchAllPostsApi from './postsSaga';

export default function* rootSaga() {
  yield all([
    fetchCategoriesApi('REQUEST_CATEGORIES'),
    fetchAllPostsApi('REQUEST_ALL_POSTS'),
  ]);
}