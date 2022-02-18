const SET_INFO = 'register/SET_INFO';
const SET_CHECK_INFO = 'register/SET_CHECK_INFO';

const initialState = {
  registerInfo: {
    email: '',
    pw: '',
    pwCheck: '',
    nickName: '',
    site: '',
    github: '',
  },
  checkInfo: {
    email: false,
    pw: false,
    pwCheck: false,
    nickName: false,
  },
};

export const setRegsiterInfo = (registerInfo) => {
  return {
    type: SET_INFO,
    registerInfo,
  };
};

export const setCheckInfo = (checkInfo) => {
  return {
    type: SET_CHECK_INFO,
    checkInfo,
  };
};
export default function register(state = initialState, action) {
  switch (action.type) {
    case SET_INFO:
      return { ...state, registerInfo: action.registerInfo };
    case SET_CHECK_INFO:
      return { ...state, checkInfo: action.checkInfo };
    default:
      return state;
  }
}
