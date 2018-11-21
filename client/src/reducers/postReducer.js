const UPDATE_POST = 'UPDATE_POST';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const PUT_POST = 'PUT_POST';
const GET_POST_DETAIL = 'GET_POST_DETAIL';
const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
const INITIAL_STATE = {
  allPosts: [],
  categoryPosts: [],
  post: '',
  postComments: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_POST:
      return {
        ...state,
        allPosts: state.allPosts.map(item => {
          if (item.id === action.payload.post.id) {
            return action.payload.post;
          } else {
            return item;
          }
        }),
        categoryPosts: state.categoryPosts.map(item => {
          if (item.id === action.payload.post.id) {
            return action.payload.post;
          } else {
            return item;
          }
        }),
      }
    case ADD_POST:
      return {
        ...state
      }
    case DELETE_POST:
      return {
        ...state
      }
    case PUT_POST:
      return {
        ...state
      }
    case GET_POST_DETAIL:
      return {
        ...state,
        post: action.payload.post,
      }
    case GET_POST_COMMENTS:
      return {
        ...state,
        postComments: action.payload.postComments
      }
    default:
      return state;
  }
};

