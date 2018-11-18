// const UPDATE_POST = 'UPDATE_POST';
const ADD_COMMENT = 'ADD_COMMENT';
// const GET_POST_DETAIL = 'GET_POST_DETAIL';
// const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
const INITIAL_STATE = {
  post: '',
  postComments: [],
  comment: '',
}

export default (state = INITIAL_STATE, action) => {
  // console.log(action, 'REDUCER')
  switch (action.type) {
    // case UPDATE_POST:
    //   return {
    //     ...state,
    //     allPosts: state.allPosts.map(item => {
    //       if(item.id === action.payload.post.id) {
    //         return action.payload.post;
    //       }
    //     }),
    //     categoryPosts: state.categoryPosts.map(item => {
    //       if(item.id === action.payload.post.id) {
    //         return action.payload.post;
    //       }
    //     }),
    //   }
    case ADD_COMMENT:
      return {
        ...state,
        postComments: postComments.push(action.payload.comment)
      }
    // case GET_POST_DETAIL:
    //   return {
    //     ...state,
    //     post: action.payload.post,
    //   }
    // case GET_POST_COMMENTS:
    //   return {
    //     ...state,
    //     postComments: action.payload.postComments
    //   }
    default:
      return state;
  }
};

