import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from '../constants/categoriesConstants';

export const requestCategories = categories => ({
  type: REQUEST_CATEGORIES,
  payload: {
    categories
  }
});
export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  payload: {
    categories
  }
});

// request apenas pega a action
// receive passa a action e data