import Axios from "axios";

//Actions & Action Creators
export const GETPRODUCTS_STARTED = "GETPRODUCTS_STARTED";
export const GETPRODUCTS_SUCCESS = "GETPRODUCTS_SUCCESS";
export const GETPRODUCTS_FAILED = "GETPRODUCTS_FAILED";

export function getProductsStarted() {
  return {
    type: GETPRODUCTS_STARTED,
  };
}

export function getProductsSuccess(productNames) {
  return {
    type: GETPRODUCTS_SUCCESS,
    productNames,
  };
}

export function getProductsFailed(error) {
  return {
    type: GETPRODUCTS_FAILED,
    error,
  };
}

//Thunk Action
export function getProducts() {
  return (dispatch) => {
    dispatch(getProductsStarted());
    Axios.get("http://localhost:5000/api/getproduct")
      //.then(res=>res.json())
      .then((res) => {
        //console.log("res",res.data)
        dispatch(getProductsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getProductsFailed(err));
      });
  };
}
