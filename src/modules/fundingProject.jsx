const SET_ENTIRE_PROJECT_ARR = 'fundingProject/SET_ENTIRE_PROJECT_ARR';
const SET_PROJECT_ARR = 'fundingProject/SET_PROJECT_ARR';
const INIT_FILTER_ARR = 'fundingProject/INIT_FILTER_ARR';
const SET_FILTER_CATEGORY = 'fundingProject/SET_FILTER_CATEGORY';
const SET_FILTER_INTEREST = 'fundingProject/SET_FILTER_INTEREST';

const initialState = {
  entireProjectArr: [],
  projectArr: [],
  filterCategoryArr: [],
  filterInterstArr: [],
};

export const initFilterArr = () => {
  return {
    type: INIT_FILTER_ARR,
  };
};
export const setEntireProjectArr = (projectArr) => {
  return {
    type: SET_ENTIRE_PROJECT_ARR,
    projectArr,
  };
};
export const setProjectArr = (projectArr) => {
  return {
    type: SET_PROJECT_ARR,
    projectArr,
  };
};
export const setFilterCategory = (category) => {
  return {
    type: SET_FILTER_CATEGORY,
    category,
  };
};
export const setFilterInterst = (interest) => {
  return {
    type: SET_FILTER_INTEREST,
    interest,
  };
};

const genArr = (arr, value) => {
  if (arr.includes(value)) {
    return arr.filter((e) => e !== value);
  } else {
    return [...arr, value];
  }
};
export default function fundingProject(state = initialState, action) {
  switch (action.type) {
    case SET_ENTIRE_PROJECT_ARR:
      return { ...state, entireProjectArr: action.projectArr, projectArr: action.projectArr };
    case SET_PROJECT_ARR:
      return { ...state, projectArr: action.projectArr };
    case INIT_FILTER_ARR:
      return {
        ...state,
        filterCategoryArr: [],
        filterInterstArr: [],
      };
    case SET_FILTER_CATEGORY:
      return {
        ...state,
        filterCategoryArr: genArr(state.filterCategoryArr, action.category),
      };
    case SET_FILTER_INTEREST:
      return {
        ...state,
        filterInterstArr: genArr(state.filterInterstArr, action.interest),
      };
    default:
      return state;
  }
}
