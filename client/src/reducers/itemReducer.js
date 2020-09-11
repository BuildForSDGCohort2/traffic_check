import { v3 as uuidv3 } from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";
const initialState = {
  items: [
    { id: uuidv3, name: "car" },
    { id: uuidv3, name: "bus" },
    { id: uuidv3, name: "cycle" },
    { id: uuidv3, name: "atielo" },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
