import { addCommentApi, updateCommentApi, deleteCommentApi, putCommentApi } from '../services/comment';
import { addCommentAction, updateCommentAction, deleteCommentAction, putCommentAction } from './commentAction';

export function addComment(comment) {
  return (dispatch) => {
    addCommentApi(comment).then((result) => {
      dispatch(addCommentAction(result));
    }).catch((error) => {
      return error;
    });
  }
}

export function increaseComment(comment) {
  return (dispatch) => {
    const score = comment.voteScore;
    comment.voteScore = score + 1;
    updateCommentApi(comment, 'upVote').then((result) => {
      dispatch(updateCommentAction(result));
    }).catch((error) => {
      return error;
    });
  }
}

export function decreaseComment(comment) {
  return (dispatch) => {
    const score = comment.voteScore;
    comment.voteScore = score - 1;
    updateCommentApi(comment, 'downVote').then((result) => {
      dispatch(updateCommentAction(result));
    }).catch((error) => {
      return error;
    });
  }
}

export function deleteComment(comment) {
  return (dispatch) => {
    deleteCommentApi(comment).then((result) => {
      dispatch(deleteCommentAction(result));
    }).catch((error) => {
      return error;
    });
  }
}

export function putComment(editedComment) {
  return (dispatch) => {
    putCommentApi(editedComment).then((result) => {
      dispatch(putCommentAction(result));
    }).catch((error) => {
      return error;
    });
  }
}
