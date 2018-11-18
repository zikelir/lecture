import { addCommentApi } from '../services/comment';
import { addCommentAction } from '../actions/commentAction';

export function addComment(post) {
  return (dispatch) => {
    addCommentApi(post).then((result) => {
      dispatch(addCommentAction(result));
    }).catch((error) => {
      console.log(error, 'errr');
      return error;
    });
  }
}

// export function increasePost(post) {
//   return (dispatch) => {
//     const score = post.voteScore;
//     post.voteScore = score + 1;
//     updatePostApi(post, 'upVote').then((result) => {
//       dispatch(updatePost(result));
//     }).catch((error) => {
//       console.log(error, 'errr');
//       return error;
//     });
//   }
// }

// export function decreasePost(post) {
//   return (dispatch) => {
//     const score = post.voteScore;
//     post.voteScore = score - 1;
//     updatePostApi(post, 'downVote').then((result) => {
//       dispatch(updatePost(result));
//     }).catch((error) => {
//       console.log(error, 'errr');
//       return error;
//     });
//   }
// }




