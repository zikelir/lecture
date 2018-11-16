import { updatePostApi } from '../services/post';
import { updatePost } from '../actions/postAction';

export function increatePost(post) {
  console.log(post, 'POST');
  return (dispatch) => {
    const score = post.voteScore;
    post.voteScore = score + 1;
    console.log(post, 'AFTER ASSING');
    updatePostApi(post).then((result) => {
      console.log(result, 'RES');
      dispatch(updatePost(result));
    }).catch((error) => {
      console.log(error, 'errr');
      return error;
    });
  }
}