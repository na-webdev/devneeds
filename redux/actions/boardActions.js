import { dispatch } from "../store";
import { ADD_NEW_BOARD } from "../types";

export function addNewBoard(data) {
  return dispatch({ type: ADD_NEW_BOARD, payload: data });
}
