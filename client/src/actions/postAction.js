// import { REQUEST_POST, RECEIVE_POST } from '../constants/postConstants';
const UPDATE_POST =  'UPDATE_POST';

// export const requestPost = (post) => ({
//   type: REQUEST_POST,
//   payload: {
//     post,
//   },
// });

export const updatePost = post => ({
  type: UPDATE_POST,
  payload: {
    post: post
  },
});
