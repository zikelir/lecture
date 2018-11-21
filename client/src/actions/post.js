import { updatePostApi, addPostApi, deletePostApi, putPostApi } from '../services/post';
import { getPostByDetailApi, getPostCommentsApi } from '../services/posts';
import { updatePost, addPostAction, deletePostAction, putPostAction, getPostDetailsAction, getPostCommentsAction } from './postAction';

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

export function deletePost(post) {
  return (dispatch) => {
    deletePostApi(post).then((result) => {
      dispatch(deletePostAction(result));
    }).catch((error) => {
      console.log(error, 'errr');
      return error;
    });
  }
}

export function putPost(editedPost) {
  return (dispatch) => {
    putPostApi(editedPost).then((result) => {
      dispatch(putPostAction(result));
    }).catch((error) => {
      console.log(error, 'errr');
      return error;
    });
  }
}

export function getPostDetails(id) {
  return (dispatch) => {
    getPostByDetailApi(id).then((result) => {
      if (!result.id) {
        dispatch(getPostDetailsAction({error: 'no id'}));
      } else {
        dispatch(getPostDetailsAction(result));
      }
    }).catch((error) => {
      console.log(error);
      return error;
    });
  }
}

export function getPostComments(id) {
  return (dispatch) => {
    getPostCommentsApi(id).then((result) => {
      dispatch(getPostCommentsAction(result));
    }).catch((error) => {
      console.log(error, 'errr');
      return error;
    });
  }
}