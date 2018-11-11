import { all } from 'redux-saga/effects';
import fetchCategoriesApi from './categoriesSaga';
import fetchCategoryPostsApi from './categoryPostsSaga';
import fetchAllPostsApi from './postsSaga';

export default function* rootSaga() {
  yield all([
    fetchCategoriesApi('REQUEST_CATEGORIES'),
    fetchAllPostsApi('REQUEST_ALL_POSTS'),
    fetchCategoryPostsApi('REQUEST_CATEGORY_POSTS'),
  ]);
}