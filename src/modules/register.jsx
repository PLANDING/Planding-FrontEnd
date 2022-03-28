const SET_INFO = 'register/SET_INFO';
const INIT_INFO = 'register/INIT_INFO';
const SET_PREV_INFO = 'register/SET_PREV_INFO';
const SET_CHECK_INFO = 'register/SET_CHECK_INFO';
const RESET_CHECK_INFO = 'register/RESET_CHECK_INFO';
const SET_SKILL_INFO = 'register/SET_SKILL_INFO';
const ADD_SKILL = 'register/ADD_SKILL';
const DEL_SKILL = 'register/DEL_SKILL';
const ADD_INTEREST = 'register/ADD_INTEREST';
const DEL_INTEREST = 'register/DEL_INTEREST';
const initialState = {
  registerInfo: {
    email: '',
    pw: '',
    pwCheck: '',
    nickName: '',
    site: '',
    github: '',
    profileImg: '',
  },
  checkInfo: {
    email: false,
    pw: false,
    pwCheck: false,
    nickName: false,
  },
  skillArr: [],
  interestArr: [],
};

export const initRegsiterInfo = () => {
  return {
    type: INIT_INFO,
  };
};
export const setRegsiterInfo = (registerInfo) => {
  return {
    type: SET_INFO,
    registerInfo,
  };
};
export const setPrevInfo = (prevInfo) => {
  return {
    type: SET_PREV_INFO,
    prevInfo,
  };
};
export const setCheckInfo = (checkInfo) => {
  return {
    type: SET_CHECK_INFO,
    checkInfo,
  };
};
export const resetCheckInfo = () => {
  return {
    type: RESET_CHECK_INFO,
  };
};
export const setSkillArr = (skillArr) => {
  return {
    type: SET_SKILL_INFO,
    skillArr,
  };
};
export const addSkill = (skill) => {
  return {
    type: ADD_SKILL,
    skill,
  };
};
export const delSkill = (index) => {
  return {
    type: DEL_SKILL,
    index,
  };
};
export const addInterest = (interest) => {
  return {
    type: ADD_INTEREST,
    interest,
  };
};
export const delInterest = (index) => {
  return {
    type: DEL_INTEREST,
    index,
  };
};
export default function register(state = initialState, action) {
  switch (action.type) {
    case INIT_INFO:
      return {
        ...state,
        registerInfo: initialState.registerInfo,
        checkInfo: initialState.checkInfo,
        skillArr: [],
        interestArr: [],
      };
    case SET_INFO:
      return { ...state, registerInfo: action.registerInfo };
    case SET_PREV_INFO:
      return {
        ...state,
        registerInfo: { ...action.prevInfo, profileImg: action.prevInfo.ProfileImg?.url },
        skillArr: action.prevInfo.Skills,
        interestArr: action.prevInfo.Interests.map((it) => `${it.category}:${it.name}`),
      };
    case SET_CHECK_INFO:
      return { ...state, checkInfo: action.checkInfo };
    case RESET_CHECK_INFO:
      return { ...state, checkInfo: initialState.checkInfo };
    case SET_SKILL_INFO:
      return { ...state, skillArr: action.skillArr };
    case ADD_SKILL:
      return { ...state, skillArr: [...state.skillArr, { name: action.skill }] };
    case DEL_SKILL:
      return {
        ...state,
        skillArr: state.skillArr.filter((it, idx) => idx != action.index),
      };
    case ADD_INTEREST:
      return { ...state, interestArr: [...state.interestArr, action.interest] };
    case DEL_INTEREST:
      return {
        ...state,
        interestArr: state.interestArr.filter((it, idx) => idx != action.index),
      };
    default:
      return state;
  }
}
