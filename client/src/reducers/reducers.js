import { combineReducers } from 'redux';
import categoriesReducer  from './categoriesReducer';
import categoryPostsReducer from './categoryPostsReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  categoriesReducer,
  postsReducer,
  categoryPostsReducer,
});

export default rootReducer;