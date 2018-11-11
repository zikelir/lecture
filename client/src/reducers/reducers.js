import { combineReducers } from 'redux';
import categoriesReducer  from './categoriesReducer';
import categoryPostsReducer from './categoryPostsReducer';
import postsReducer from './postsReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  categoriesReducer,
  postsReducer,
  categoryPostsReducer,
  postReducer,
});

export default rootReducer;