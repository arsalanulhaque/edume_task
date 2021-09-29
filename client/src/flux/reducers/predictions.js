import {
  PREDICTIONS_FAIL,
  PREDICTIONS_LOADING,
  PREDICTIONS_SUCCESS,
} from "../actions/types";

const defaultState = {
  loading: false,
  payload: {},
};

const predictions = (state = defaultState, action) => {
  switch (action.type) {
    case PREDICTIONS_FAIL:
      return {
        ...state,
      };
    case PREDICTIONS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PREDICTIONS_SUCCESS:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
};

export default predictions;
