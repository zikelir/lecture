import { REQUEST_POST, RECEIVE_POST } from '../constants/postConstants';

// export const requestPost = (post) => ({
//   type: REQUEST_POST,
//   payload: {
//     post,
//   },
// });

export const updatePost = post => ({
  type: RECEIVE_POST,
  payload: {
    post: post.voteScore += 1
  },
});
