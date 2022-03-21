const SET_PROJECT_INFO = 'project/SET_PROJECT_INFO';
const SET_MYPROJECT_INFO = 'project/SET_MYPROJECT_INFO';
const SET_CURRICULUM = 'project/SET_CURRICULUM';

const initialState = {
  projectObj: {
    id: 0,
    content: '',
    createdAt: '',
    headline: '',
    idea: '',
    isEnd: false,
    member_dev: -1,
    member_plan: -1,
    Category: { name: '' },
    Comments: [],
    Interests: [],
    Fundings: [],
    User: { id: -1, nickName: '', ProfileImg: null },
  },
  myProjectObj: {
    devCurriculum: 0,
    planCurriculum: 0,
    createdAt: '',
    Project: {
      Fundings: [],
    },
    UserProjects: [],
  },
};

export const setProjectInfo = (projectObj) => {
  return {
    type: SET_PROJECT_INFO,
    projectObj,
  };
};
export const setMyProjectInfo = (myProjectObj) => {
  return {
    type: SET_MYPROJECT_INFO,
    myProjectObj,
  };
};
export const setCurriculum = (curr, currType) => {
  return {
    type: SET_CURRICULUM,
    curr,
    currType,
  };
};

export default function project(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECT_INFO:
      return { ...state, projectObj: action.projectObj };
    case SET_MYPROJECT_INFO:
      return {
        ...state,
        myProjectObj: action.myProjectObj,
      };
    case SET_CURRICULUM:
      return {
        ...state,
        myProjectObj: {
          ...state.myProjectObj,
          [action.currType === 'plan' ? 'planCurriculum' : 'devCurriculum']: action.curr,
        },
      };
    default:
      return state;
  }
}
