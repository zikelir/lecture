import { REQUEST_POST, RECEIVE_POST } from '../constants/postConstants';

export const requestAllPosts = post => ({
  type: REQUEST_ALL_POSTS,
  payload: {
    post
  },
});

export const receiveAllPosts = post => ({
  type: RECEIVE_ALL_POSTS,
  payload: {
    post
  },
});
