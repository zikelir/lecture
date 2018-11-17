const UPDATE_POST =  'UPDATE_POST';
const ADD_POST =  'ADD_POST';

export const updatePost = post => ({
  type: UPDATE_POST,
  payload: {
    post: post
  },
});

export const addPostAction = post => ({
  type: ADD_POST,
  payload: {
    post: post
  },
});
