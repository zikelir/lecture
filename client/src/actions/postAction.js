const UPDATE_POST =  'UPDATE_POST';
const ADD_POST =  'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const PUT_POST = 'PUT_POST';
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

export const deletePostAction = post => ({
  type: DELETE_POST,
  payload: {
    post: post
  },
});

export const putPostAction = editedPost => ({
  type: PUT_POST,
  payload: {
    editedPost: editedPost
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
