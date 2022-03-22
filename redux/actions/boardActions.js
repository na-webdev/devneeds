import { dispatch } from "../store";
import { ADD_NEW_BOARD, ADD_NEW_SET, DELETE_BOARD, DELETE_SET } from "../types";

export function addNewBoard(data) {
  return dispatch({ type: ADD_NEW_BOARD, payload: data });
}

export function deleteBoard(data) {
  return dispatch({ type: DELETE_BOARD, payload: data });
}
export function deleteSet(data) {
  return dispatch({ type: DELETE_SET, payload: data });
}

export function addNewSet(data) {
  return dispatch({ type: ADD_NEW_SET, payload: data });
}
