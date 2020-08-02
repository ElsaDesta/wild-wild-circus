import { FETCH_ACTS } from "./types";
import Axios from "axios";
const apiUrl = "/acts";

//action creators- fetch data from db

export const fetchActs = () => {
  return async (dispatch) => {
    try {
      const response = await Axios.get(apiUrl);
      const data = response.data;
      dispatch({
        type: FETCH_ACTS,
        data,
      });
    } catch (error) {
      throw error;
    }
  };
};
