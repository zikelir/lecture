import { fetchCategoriesApi } from '../services/categories';
import { requestCategories, receiveCategories } from '../actions/categoriesAction';

export function handleInitialData() {
  return (dispatch) => {
    return fetchCategoriesApi().then((result) => {
      console.log(result, 'rest');
    });
    // dispatch(receiveCategories(result));
  }
}