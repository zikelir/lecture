import { REQUEST_POST, RECEIVE_POST } from '../constants/postConstants';

export const requestPost = (post) => ({
  type: REQUEST_POST,
  payload: {
    post,
  },
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  payload: {
    post
  },
});
