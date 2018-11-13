import { REQUEST_CATEGORIES } from '../constants/categoriesConstants';
import { receiveCategories } from '../actions/categoriesAction';
import { fetchCategoriesApi } from '../services/categories';

export const categoriesThunk = (store) => {
  store.dispatch(receiveCategories());
  return function(dispatch, getState) {
    return fetchCategoriesApi().then((result) => {
      console.log(result);
    });
  }
}

