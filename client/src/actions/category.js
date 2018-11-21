import { fetchCategoryPostsApi } from '../services/categoryPostsApi';
import { receiveCategoryPosts } from './categoryPostsAction';

export function handleCategoryPost() {
  return (dispatch) => {
    fetchCategoryPostsApi().then((result) => {
      dispatch(receiveCategoryPosts(result));
    }).catch((error) => {
      console.log(error);
      return error;
    });
  }
}