const SET_PROJECT_INFO = 'project/SET_PROJECT_INFO'; 


const initialState = {
    projectObj: {
        id: 0,
      },
  };

export const setProjectInfo= (projectObj) => {
    return {
        type: SET_PROJECT_INFO,
        projectObj
    };
};

export default  function project(state = initialState, action) {
    switch (action.type) {
        case SET_PROJECT_INFO:
            return { ...state,projectObj: action.projectObj  };
        default:
            return state;
    }
};