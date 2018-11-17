import { updatePostApi, addPostApi } from '../services/post';
import { updatePost, addPostAction } from '../actions/postAction';

export function increasePost(post) {
  return (dispatch) => {
    const score = post.voteScore;
    post.voteScore = score + 1;
    updatePostApi(post, 'upVote').then((result) => {
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
      dispatch(updatePost(result));
    }).catch((error) => {
      console.log(error, 'errr');
      return error;
    });
  }
}

export function addPost(post) {
  return (dispatch) => {
    addPostApi(post).then((result) => {
      dispatch(addPostAction(result));
    }).catch((error) => {
      console.log(error, 'errr');
      return error;
    });
  }
}