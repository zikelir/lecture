import { put, call, takeLatest } from 'redux-saga/effects';

import { REQUEST_CATEGORIES } from '../constants/categoriesConstants';
import { receiveCategories } from '../actions/categoriesAction';
import { fetchCategoriesApi } from '../services/categories';


function* fetchCategoriesData(action) {
  try {
    // call's api
    const categories = yield call(fetchCategoriesApi);
    // calls the action
    yield put(receiveCategories(categories));
  } catch (e) {
    console.log(e);
  }
}

export default function* categoriesSaga() {
  console.log('render saga');

  yield takeLatest(REQUEST_CATEGORIES, fetchCategoriesData);
}