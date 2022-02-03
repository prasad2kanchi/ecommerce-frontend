import {
  GET_LOGIN_STARTED,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILED,
  GET_SIGNOUT,
} from "../actions/loginaction";

export var loginUsers = (state = {}, action) => {
  //console.log(action);
  switch (action.type) {
    case GET_LOGIN_STARTED:
      return {
        user: [],
        loading: true,
        error: null,
      };
    case GET_LOGIN_SUCCESS:
      console.log(action, "action");
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    // case GET_LOGIN_FAILED:
    //   return {
    //     loading: false,
    //     error: action.payload.message,
    //     ...state,
    //   };
    case GET_SIGNOUT:
      return {
        ...state,
        user: [],
      };
    default:
      return state;
  }
};
