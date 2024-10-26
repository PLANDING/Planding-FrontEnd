import { combineReducers } from 'redux';
import profile from './profile';
import project from './project';
import register from './register';
import user from './user';
import fundingProject from './fundingProject';

const rootReducer = combineReducers({
  user,
  profile,
  project,
  register,
  fundingProject,
});

export default rootReducer;
