const SET_LOGGED_INFO = 'user/SET_LOGGED_INFO'; // 로그인 정보 설정
const SET_USER_INFO = 'user/SET_USER_INFO'; 


const initialState = {
    userObj: {
        id: 0,
        nickName: "",
      },
    isLoggedin: false,
  };
export const setLoggedInfo = (isLoggedin, userObj) => {
    return {
        type: SET_LOGGED_INFO,
        userObj,
        isLoggedin
    };
};

export const setUserInfo= (userObj) => {
    return {
        type: SET_USER_INFO,
        userObj
    };
};

export default  function user(state = initialState, action) {
    switch (action.type) {
        case SET_LOGGED_INFO:
            return {...state,
                userObj:action.userObj,
                isLoggedin: action.isLoggedin
                };
        case SET_USER_INFO:
            return { ...state,userObj: action.userObj  };
        default:
            return state;
    }
};