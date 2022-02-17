const SET_PROFILE_INFO = 'profile/SET_PROFILE_INFO';

const initialState = {
  profileObj: {
    id: 0,
    nickName: '',
  },
};

export const setProfileInfo = (profileObj) => {
  return {
    type: SET_PROFILE_INFO,
    profileObj,
  };
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE_INFO:
      return { ...state, profileObj: action.profileObj };
    default:
      return state;
  }
}
