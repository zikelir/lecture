import { fetchCategoriesApi } from '../services/categories';
import { receiveCategories } from '../actions/categoriesAction';
import { fetchAllPostsApi } from '../services/posts';
import { receiveAllPosts } from '../actions/postsAction';

export function handleInitialData() {
  return (dispatch) => {
    fetchCategoriesApi().then((result) => {
      const categories = result.categories.map(item => {
        return item.name;
      });
      dispatch(receiveCategories(categories));
    }).catch((error) => {
      console.log(error);
      return error;
    });

    fetchAllPostsApi().then((result) => {
      const allPosts = result.map(item => {
        return item;
      });
      dispatch(receiveAllPosts(allPosts));
    }).catch((error) => {
      console.log(error);
      return error;
    });
  }
}