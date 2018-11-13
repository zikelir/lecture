import { REQUEST_POST, RECEIVE_POST } from '../constants/postConstants';
const INITIAL_STATE = {
  allPosts: [],
  categoryPosts: [],
  post: ''
}

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case REQUEST_POST:
      return {
        ...state,
        // post: action.payload.post
      };
    case RECEIVE_POST:
      return {
        ...state,
        allPosts: action.payload.allPosts,
      };
    default:
      return state;
  }
};

