import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from '../constants/categoriesConstants';

export const requestCategories = () => {
  return { type: REQUEST_CATEGORIES }
};

export const receiveCategories = categories => {
  return {
    type: RECEIVE_CATEGORIES,
    payload: {
      categories
    }
  }
};

export const receive_error = () => {
  return {
    type: 'RECEIVE_ERROR'
  }
}

// request apenas pega a action
// receive passa a action e data