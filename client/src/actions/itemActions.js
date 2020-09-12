import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  GET_ITEM,
} from "./types";
import axios from "axios";

export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios.get("/api/v1/items").then((res) =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    })
  );
};

export const addItem = (item) => (dispatch) => {
  axios.post("/api/v1/create-item", item).then((res) => (dispatch) => ({
    type: ADD_ITEM,
    payload: res.data,
  }));
};

export const deleteItem = (id) => (dispatch) => {
  axios.delete(`/api/v1/delete-item/${id}`).then((res) =>
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
