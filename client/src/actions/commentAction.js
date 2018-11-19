const UPDATE_COMMENT =  'UPDATE_COMMENT';
const ADD_COMMENT =  'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const PUT_COMMENT = 'PUT_COMMENT';

export const updateCommentAction = comment => ({
  type: UPDATE_COMMENT,
  payload: {
    comment: comment
  },
});

export const addCommentAction = comment => ({
  type: ADD_COMMENT,
  payload: {
    comment: comment
  },
});


export const deleteCommentAction = comment => ({
  type: DELETE_COMMENT,
  payload: {
    comment: comment
  },
});

export const putCommentAction = comment => ({
  type: PUT_COMMENT,
  payload: {
    comment: comment
  },
});

