const SET_PROFILE_INFO = 'profile/SET_PROFILE_INFO';

const initialState = {
  profileObj: {
    id: 0,
    nickName: '',
    github: '',
    site: '',
    level: 0,
    slackId: '',
    Skills: [],
    Interests: [],
    ProfileImg: null,
    Progress: {
      id: 0,
      idea: '',
      isEnd: false,
      createdAt: '',
      Fundings: [],
      Interests: [],
    },
    Completion: {
      id: 0,
      devCurriculum: 0,
      planCurriculum: 0,
      Project: {
        idea: '',
        isEnd: false,
        createdAt: '',
        Fundings: [],
        Interests: [],
      },
    },
    MyProjects: [],
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
