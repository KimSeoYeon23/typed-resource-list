import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { SET_RESOURCE_ID, SET_URL, SET_IMAGE, SET_IMAGE_NAME } from "./ActionTypes";

const initialState = {
  resource: {
    id: '',
    url: '',
    image: '',
    imageName: '',
  }
};

export const urlReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_RESOURCE_ID:
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
    case SET_IMAGE:
      return {
        ...state,
        resource: {
          ...state.resource,
          image: action.payload,
        }
      }
    case SET_IMAGE_NAME:
      return {
        ...state,
        resource: {
          ...state.resource,
          imageName: action.payload,
        }
      }
    default:
      return state;
  }
}

export const store = createStore(urlReducer, composeWithDevTools());