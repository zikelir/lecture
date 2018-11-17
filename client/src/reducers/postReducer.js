const UPDATE_POST = 'UPDATE_POST';
const ADD_POST = 'ADD_POST';
const INITIAL_STATE = {
  allPosts: [],
  categoryPosts: [],
  post: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_POST:
      return {
        ...state,
        allPosts: state.allPosts.map(item => {
          if(item.id === action.payload.post.id) {
            return action.payload.post;
          }
        }),
        categoryPosts: state.categoryPosts.map(item => {
          if(item.id === action.payload.post.id) {
            return action.payload.post;
          }
        }),
      }

      case ADD_POST:
      return {
        ...state,
        // allPosts: state.allPosts.push(action.post),
        // categoryPosts: state.categoryPosts.push(action.post),
      }
    default:
      return state;
  }
};

