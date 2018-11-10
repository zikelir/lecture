import { REQUEST_ALL_POSTS, RECEIVE_ALL_POSTS } from '../constants/postsConstants';

export const requestAllPosts = allPosts => ({
  type: REQUEST_ALL_POSTS,
  payload: {
    allPosts
  },
});

export const receiveAllPosts = allPosts => ({
  type: RECEIVE_ALL_POSTS,
  payload: {
    allPosts
  },
});
