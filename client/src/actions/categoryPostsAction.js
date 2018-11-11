import { REQUEST_CATEGORY_POSTS, RECEIVE_CATEGORY_POSTS } from '../constants/categoryPostsConstants';

export const requestCategoryPosts = categoryPosts => ({
  type: REQUEST_CATEGORY_POSTS,
  payload: {
    categoryPosts
  }
});
export const receiveCategoryPosts = categoryPosts => ({
  type: RECEIVE_CATEGORY_POSTS,
  payload: {
    categoryPosts
  }
});

// request apenas pega a action
// receive passa a action e data