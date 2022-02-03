import Axios from "axios";

//Actions & Action Creators
export const GET_ADDTOCART_STARTED = "GET_ADDTOCART_STARTED";
export const GET_ADDTOCART_SUCCESS = "GET_ADDTOCART_SUCCESS";
export const GET_ADDTOCART_FAILED = "GET_ADDTOCART_FAILED";

export function getAddToCartStarted() {
  return {
    type: GET_ADDTOCART_STARTED,
  };
}

export function getAddToCartSuccess(carts) {
  // console.log("aaaaaaaaaaa123", carts);
  return {
    type: GET_ADDTOCART_SUCCESS,
    carts,
  };
}

export function getAddToCartFailed(error) {
  return {
    type: GET_ADDTOCART_FAILED,
    error,
  };
}

//Cart Remove Items

export const REMOVE_CART_ITEMS = "REMOVE_CART_ITEMS";

export function removeCartItems(error) {
  return {
    type: REMOVE_CART_ITEMS,
    error,
  };
}

//Thunk Action
export function getCarts() {
  //console.log("hello", id);
  return (dispatch) => {
    dispatch(getAddToCartStarted());
    Axios.get("http://localhost:5000/api/user/getaddtocart/")
      .then((res) => {
        //console.log("response", res.data);
        dispatch(getAddToCartSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getAddToCartFailed(err));
      });
  };
}

//Actions

export const POST_ADDTOCART_STARTED = "POST_ADDTOCART_STARTED";
export const POST_ADDTOCART_SUCCESS = "POST_ADDTOCART_SUCCESS";
export const POST_ADDTOCART_FAILED = "POST_ADDTOCART_FAILED";

//Action Creators
export function postAddToCartStarted() {
  return {
    type: POST_ADDTOCART_STARTED,
  };
}

export function postAddToCartSuccess(cartData) {
  //console.log("CartData", cartData.data);
  return {
    type: POST_ADDTOCART_SUCCESS,
    payload: cartData.data,
  };
}

export function postAddToCartFailed(error) {
  return {
    type: POST_ADDTOCART_FAILED,
    error,
  };
}

//Thunk Action
export function postCartItems(signup_id, product_id) {
  var cartData = { signup_id, product_id };
  //console.log("create", cartData);
  //console.log(user, JSON.stringify(user), "user");
  return (dispatch) => {
    fetch("http://localhost:5000/api/user/createaddtocart", {
      method: "post",
      body: JSON.stringify(cartData),
      headers: { "Content-Type": "application/json" },
    })
      .then((result) => result.json())
      .then((res) => {
        // console.log(res, "res");
        if (!res) {
          return dispatch({
            type: POST_ADDTOCART_FAILED,
            payload: res,
          });
        } else {
          return dispatch({
            type: POST_ADDTOCART_SUCCESS,
            payload: res,
          });
        }
      })
      .catch((error) => {});
  };
}
