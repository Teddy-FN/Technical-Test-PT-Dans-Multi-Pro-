import {
  FETCH_DATA_BY_ID_SUCCESS,
  FETCH_DATA_BY_ID_LOADING,
  FETCH_DATA_BY_ID_FAILURE,
} from '../actions/type';

const initialState = {
  isFetching: false,
  errorMessage: '',
  data: [],
};

const dataByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_BY_ID_LOADING:
      return {...state, isFetching: true};
    case FETCH_DATA_BY_ID_FAILURE:
      return {...state, isFetching: false, errorMessage: action.payload};
    case FETCH_DATA_BY_ID_SUCCESS:
      return {...state, isFetching: false, data: action.payload};
    default:
      return state;
  }
};

export default dataByIdReducer;
