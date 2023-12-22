import { AUTH_KEY_SIGN_UP_PENDING, AUTH_KEY_SIGN_UP_SUCCESS, AUTH_KEY_SIGN_UP_ERROR, AUTH_KEY_SIGN_UP_RESET } from "../types/AuthKeyType";
import { REHYDRATE } from "redux-persist";

const initialState = {
     loading: false,
     authKey: null,
     error: null,
};

export default (state = initialState, action) => {
     switch (action.type) {
          case AUTH_KEY_SIGN_UP_PENDING: return {
               ...state,
               loading: true
          }
          case AUTH_KEY_SIGN_UP_SUCCESS: return {
               ...state,
               loading: false,
               authKey: action.result.data,
               error: null
          }
          case AUTH_KEY_SIGN_UP_ERROR: return {
               ...state,
               loading: false,
               error: action.result
          }

          case AUTH_KEY_SIGN_UP_RESET: return initialState;

          default: {
               return state;
          }

     }
};

