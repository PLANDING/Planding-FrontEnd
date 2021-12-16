const SET_LOGGED_INFO = 'user/SET_LOGGED_INFO'; // 로그인 정보 설정
const SET_USER_INFO = 'user/SET_USER_INFO';
const SET_GA_INFO = 'user/SET_GA_INFO';


const initialState = {
    userObj: {
        id: 0,
        nickName: "",
    },
    gaObj: {
        category: "",
        interests: []
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

export const setUserInfo = (userObj) => {
    return {
        type: SET_USER_INFO,
        userObj
    };
};

export const setGaInfo = (gaObj) => {
    return {
        type: SET_GA_INFO,
        gaObj
    };
};
export default function user(state = initialState, action) {
    switch (action.type) {
        case SET_LOGGED_INFO:
            return {
                ...state,
                userObj: action.userObj,
                isLoggedin: action.isLoggedin
            };
        case SET_USER_INFO:
            return { ...state, userObj: action.userObj };
        case SET_GA_INFO:
            return { ...state, gaObj: action.gaObj };
        default:
            return state;
    }
};