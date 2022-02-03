import {
  GET_USERID_FAILED,
  GET_USERID_STARTED,
  GET_USERID_SUCCESS,
} from "../actions/getuseridaction";

export const userIdReducer = (state = {}, action) => {
  //console.log(action, "cartReducer");
  switch (action.type) {
    case GET_USERID_STARTED:
      return {
        userId: [],
        loading: true,
        error: null,
      };
    case GET_USERID_SUCCESS:
      console.log(action.carts, "action");
      return {
        userId: action.userId,
        loading: false,
        error: null,
      };
    case GET_USERID_FAILED:
      return {
        userId: [],
        loading: false,
        error: action.error,
      };
    // case REMOVE_CART_ITEMS:
    //   return {
    //     ...state,
    //     carts: [],
    //   };
    default:
      return state;
  }
};
