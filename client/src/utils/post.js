import { fetchCategoryPostsApi } from '../services/categoryPostsApi';
import { updatePost } from '../actions/postAction';

export function increatePost(post) {
  console.log(post, 'POST');
  return (dispatch) => {
    post = post.voteScore += 1;
    fetchCategoryPostsApi(post).then(() => {
      dispatch(updatePost(post));
    }).catch((error) => {
      console.log(error);
      return error;
    });
  }
}