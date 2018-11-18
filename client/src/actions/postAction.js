const UPDATE_POST =  'UPDATE_POST';
const ADD_POST =  'ADD_POST';
const GET_POST_DETAIL = 'GET_POST_DETAIL';
const GET_POST_COMMENTS = 'GET_POST_COMMENTS';

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

export const getPostDetailsAction = post => ({
  type: GET_POST_DETAIL,
  payload: {
    post: post
  }
});

export const getPostCommentsAction = postComments => ({
  type: GET_POST_COMMENTS,
  payload: {
    postComments: postComments
  }
});
