import { combineReducers } from 'redux';
import categoriesReducer  from './categoriesReducer';
import categoryPostsReducer from './categoryPostsReducer';
import postsReducer from './postsReducer';
import postReducer from './postReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
  categoriesReducer,
  postsReducer,
  categoryPostsReducer,
  postReducer,
  commentReducer
});

export default rootReducer;