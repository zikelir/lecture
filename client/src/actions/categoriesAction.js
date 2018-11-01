import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from '../constants/categoriesConstants';

export const requestCategories = () => ({ type: REQUEST_CATEGORIES });
export const receiveCategories = categories => ({ type: RECEIVE_CATEGORIES, categories });

// request apenas pega a action
// receive passa a action e data