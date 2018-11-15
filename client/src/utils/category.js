import { fetchCategoryPostsApi } from '../services/categoryPostsApi';
import { receiveCategoryPosts } from '../actions/categoryPostsAction';

export function handleCategoryPost() {
  return (dispatch) => {
    fetchCategoryPostsApi().then((result) => {
      // const categoryPosts = result.categories.map(item => {
      //   return item;
      // });
      console.log(result, 'RESSSSS');
      dispatch(receiveCategoryPosts(result));
    }).catch((error) => {
      console.log(error);
      return error;
    });
  }
}