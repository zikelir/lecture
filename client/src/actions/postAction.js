const UPDATE_POST =  'UPDATE_POST';

export const updatePost = post => ({
  type: UPDATE_POST,
  payload: {
    post: post
  },
});
