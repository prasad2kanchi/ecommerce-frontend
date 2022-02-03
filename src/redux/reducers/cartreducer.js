import {
  GET_ADDTOCART_FAILED,
  GET_ADDTOCART_STARTED,
  GET_ADDTOCART_SUCCESS,
  POST_ADDTOCART_FAILED,
  POST_ADDTOCART_STARTED,
  POST_ADDTOCART_SUCCESS,
  REMOVE_CART_ITEMS,
} from "../actions/cartaction";

export const cartReducer = (state = {}, action) => {
  //console.log(action, "cartReducer");
  switch (action.type) {
    case GET_ADDTOCART_STARTED:
      return {
        carts: [],
        loading: true,
        error: null,
      };
    case GET_ADDTOCART_SUCCESS:
      console.log(action.carts, "action");
      return {
        carts: action.carts,
        loading: false,
        error: null,
      };
    case GET_ADDTOCART_FAILED:
      return {
        carts: [],
        loading: false,
        error: action.error,
      };
    case REMOVE_CART_ITEMS:
      return {
        ...state,
        carts: [],
      };
    default:
      return state;
  }
};

export var postCartReducers = (state = {}, action) => {
  //console.log(action);
  switch (action.type) {
    case POST_ADDTOCART_STARTED:
      return {
        cartData: [],
        loading: true,
        error: null,
      };
    case POST_ADDTOCART_SUCCESS:
      // console.log(action, "action");
      return {
        cartData: action.payload,
        loading: false,
        error: null,
      };
    case POST_ADDTOCART_FAILED:
      return {
        loading: false,
        error: action.payload,
        ...state,
      };
    default:
      return state;
  }
};
