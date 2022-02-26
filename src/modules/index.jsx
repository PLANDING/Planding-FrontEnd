import { combineReducers } from 'redux';
import user from './user';
import profile from './profile';
import project from './project';
import register from './register';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user,
  profile,
  project,
  register,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
