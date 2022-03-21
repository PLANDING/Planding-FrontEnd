import { combineReducers } from 'redux';
import profile from './profile';
import project from './project';
import register from './register';
import user from './user';

const rootReducer = combineReducers({
  user,
  profile,
  project,
  register,
});

export default rootReducer;
