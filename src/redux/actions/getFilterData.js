import axios from 'axios';
import {
  FETCH_DATA_LIST_SUCCESS,
  FETCH_DATA_LIST_LOADING,
  FETCH_DATA_LIST_FAILURE,
} from './type';

export const fethingDataReq = () => {
  return {
    type: FETCH_DATA_LIST_LOADING,
  };
};

export const fethingDataSuccess = payload => {
  return {
    type: FETCH_DATA_LIST_SUCCESS,
    payload: payload,
  };
};
export const fethingDataFail = err => {
  return {
    type: FETCH_DATA_LIST_FAILURE,
    payload: err,
  };
};

export const fetchingDataList = () => {
  return async dispatch => {
    dispatch(fethingDataReq());
    try {
      await axios
        .get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json')
        .then(response => {
          dispatch(fethingDataSuccess(response.data));
        });
    } catch (error) {
      dispatch(fethingDataFail(error));
    }
  };
};
