import { RECEIVE_CATEGORIES, REQUEST_CATEGORIES } from '../constants/categoriesConstants';
const INITIAL_STATE = {
  categories: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      };
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      };
    default:
      return state;
  }
};

