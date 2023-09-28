import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { SET_URL_ID, SET_URL } from "./ActionTypes";

const initialState = {
  resource: {
    id: '',
    url: '',
  }
};

export const urlReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_URL_ID:
      return {
        ...state,
        resource: {
          ...state.resource,
          id: action.payload,
        }
      };
    case SET_URL:
      return {
        ...state,
        resource: {
          ...state.resource,
          url: action.payload,
        }
      };
    default:
      return state;
  }
}

export const store = createStore(urlReducer, composeWithDevTools());