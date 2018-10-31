import { put, takeLatest } from 'redux-saga/effects';

import { fetchCategories } from '../actions/categoriesAction';
import { FETCH_CATEGORIES } from '../constants/categoriesConstants';
import { fetchCategoriesApi } from '../services/categories';


function* fetchCategoriesData() {
  try {
    // call's api
    const categories = yield fetchCategoriesApi();
    // calls the action
    yield put(fetchCategories(categories));
  } catch (e) {
    console.log(e);
  }
}

export default function* categoriesSaga() {
  yield takeLatest(FETCH_CATEGORIES, fetchCategoriesData);
}