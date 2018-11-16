import { updatePostApi } from '../services/post';
import { updatePost } from '../actions/postAction';

export function increasePost(post) {
  return (dispatch) => {
    const score = post.voteScore;
    post.voteScore = score + 1;
    updatePostApi(post, 'upVote').then((result) => {
      console.log(result, 'RES');
      dispatch(updatePost(result));
    }).catch((error) => {
      console.log(error, 'errr');
      return error;
    });
  }
}

export function decreasePost(post) {
  return (dispatch) => {
    const score = post.voteScore;
    post.voteScore = score - 1;
    updatePostApi(post, 'downVote').then((result) => {
      console.log(result, 'RES');
      dispatch(updatePost(result));
    }).catch((error) => {
      console.log(error, 'errr');
      return error;
    });
  }
}