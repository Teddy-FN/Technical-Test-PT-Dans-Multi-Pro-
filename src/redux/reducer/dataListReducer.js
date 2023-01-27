import {
  FETCH_DATA_LIST_SUCCESS,
  FETCH_DATA_LIST_LOADING,
  FETCH_DATA_LIST_FAILURE,
} from '../actions/type';

const initialState = {
  isFetching: false,
  errorMessage: '',
  data: [],
};

const dataListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_LIST_LOADING:
      return {...state, isFetching: true};
    case FETCH_DATA_LIST_FAILURE:
      return {...state, isFetching: false, errorMessage: action.payload};
    case FETCH_DATA_LIST_SUCCESS:
      return {...state, isFetching: false, data: action.payload};
    default:
      return state;
  }
};

export default dataListReducer;
