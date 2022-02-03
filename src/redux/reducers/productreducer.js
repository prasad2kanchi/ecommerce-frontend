import {
  GETPRODUCTS_FAILED,
  GETPRODUCTS_STARTED,
  GETPRODUCTS_SUCCESS,
} from "../actions/productaction";

export var products = (state = {}, action) => {
  //console.log(action)
  switch (action.type) {
    case GETPRODUCTS_STARTED:
      return {
        productNames: [],
        loading: true,
        error: null,
      };
    case GETPRODUCTS_SUCCESS:
      return {
        productNames: action.productNames,
        loading: false,
        error: null,
      };
    case GETPRODUCTS_FAILED:
      return {
        productNames: [],
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
