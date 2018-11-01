import { all } from 'redux-saga/effects';
import fetchCategoriesApi from './categoriesSaga';
// import { FETCH_CATEGORIES } from '../constants/categoriesConstants';

export default function* rootSaga() {
  yield all([
    fetchCategoriesApi('REQUEST_CATEGORIES'),
  ]);
}