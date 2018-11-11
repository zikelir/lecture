import { REQUEST_POST, RECEIVE_POST } from '../constants/postConstants';
const INITIAL_STATE = {
  allPosts: [],
  categoryPosts: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_POST:
      return {
        ...state,
        allPosts: action.payload.allPosts,
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

