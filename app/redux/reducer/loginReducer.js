import { RETRIEVE_TOKEN, LOGIN, LOGOUT, REGISTER } from "../types/loginType";

const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };


 const loginReducer = (state = initialLoginState, action) => {
    switch( action.type ) {
      case RETRIEVE_TOKEN: 
        return {
          ...state,
          userToken: action.token,
          isLoading: false,
        };
      case LOGIN: 
        return {
          ...state,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case LOGOUT: 
        return {
          ...state,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case REGISTER: 
        return {
          ...state,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
        default:
            return state;
    }
  };
  export default loginReducer