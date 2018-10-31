import { FETCH_CATEGORIES } from '../constants/categoriesConstants';

export const categoriesReducer = (state = {}, { type }) => {
  switch (type) {
    case FETCH_CATEGORIES:
      return categories;
    default:
      return state;
  }
};

