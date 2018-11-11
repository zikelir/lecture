import { RECEIVE_CATEGORY_POSTS, REQUEST_CATEGORY_POSTS } from '../constants/categoryPostsConstants';
const INITIAL_STATE = {
  categoryPosts: [],
}

export default (state = INITIAL_STATE, action) => {
  console.log(action, 'reducer');
  switch (action.type) {
      case RECEIVE_CATEGORY_POSTS:
      return {
        ...state,
        categoryPosts: action.payload.categoryPosts
      };
    case REQUEST_CATEGORY_POSTS:
      return {
        ...state,
        categoryPosts: action.payload.categoryPosts,
      };
    default:
      return state;
  }
};

