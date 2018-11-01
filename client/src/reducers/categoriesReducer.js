import { RECEIVE_CATEGORIES } from '../constants/categoriesConstants';
const INITIAL_STATE = {
  categories: '',
}

export default (state = INITIAL_STATE, { type, categories }) => {
  console.log(categories, type, ' reducer');
  switch (type) {
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categories
      };
    default:
      return state;
  }
};

