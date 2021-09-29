import {
  PREDICTIONS_FAIL,
  PREDICTIONS_LOADING,
  PREDICTIONS_SUCCESS,
} from "./types";
import axios from "axios";

export const getPredictions = (userInput) => async (dispatch) => {
  try {
    dispatch({
      type: PREDICTIONS_LOADING,
    });

    const body = { keyString: userInput };

    const res = await axios.post("/predictions", body);

    console.log(res.data);

    dispatch({
      type: PREDICTIONS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: PREDICTIONS_FAIL,
    });
  }
};
