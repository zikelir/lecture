const UPDATE_COMMENT = 'UPDATE_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const PUT_COMMENT = 'PUT_COMMENT';
const INITIAL_STATE = {
  post: '',
  postComments: [],
  comment: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
      }
    case ADD_COMMENT:
      return {
        ...state,
      }
    case DELETE_COMMENT:
      return {
        ...state
    }
    case PUT_COMMENT:
      return {
        ...state
    }
    default:
      return state;
  }
};

