import { RECEIVE_ALL_POSTS, REQUEST_ALL_POSTS } from '../constants/postsConstants';
const INITIAL_STATE = {
  allPosts: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_ALL_POSTS:
      return {
        ...state,
        allPosts: action.payload.allPosts,
      };
    case RECEIVE_ALL_POSTS:
      return {
        ...state,
        allPosts: action.payload.allPosts,
      };
    default:
      return state;
  }
};

