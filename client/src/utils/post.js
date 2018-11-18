import { updatePostApi, addPostApi } from '../services/post';
import { getPostByDetailApi,getPostCommentsApi } from '../services/posts';
import { updatePost, addPostAction, getPostDetailsAction, getPostCommentsAction } from '../actions/postAction';

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

export function getPostDetails(id) {
  return (dispatch) => {
    getPostByDetailApi(id).then((result) => {
      console.log(result);
      dispatch(getPostDetailsAction(result));
    }).catch((error) => {
      console.log(error, 'errr');
      return error;
    });
  }
}

export function getPostComments(id) {
  return (dispatch) => {
    getPostCommentsApi(id).then((result) => {
      console.log(result);
      dispatch(getPostCommentsAction(result));
    }).catch((error) => {
      console.log(error, 'errr');
      return error;
    });
  }
}