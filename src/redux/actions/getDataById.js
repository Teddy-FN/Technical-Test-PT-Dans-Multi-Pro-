import axios from 'axios';
import {
  FETCH_DATA_BY_ID_SUCCESS,
  FETCH_DATA_BY_ID_LOADING,
  FETCH_DATA_BY_ID_FAILURE,
} from './type';

export const fethingDataReq = () => {
  return {
    type: FETCH_DATA_BY_ID_LOADING,
  };
};

export const fethingDataSuccess = payload => {
  return {
    type: FETCH_DATA_BY_ID_SUCCESS,
    payload: payload,
  };
};
export const fethingDataFail = err => {
  return {
    type: FETCH_DATA_BY_ID_FAILURE,
    payload: err,
  };
};

export const fetchingDataById = ID => {
  return async dispatch => {
    dispatch(fethingDataReq());
    try {
      await axios
        .get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${ID}`)
        .then(response => {
          dispatch(fethingDataSuccess(response.data));
        });
    } catch (error) {
      dispatch(fethingDataFail(error));
    }
  };
};
