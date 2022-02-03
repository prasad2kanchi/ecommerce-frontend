//import Axios from "axios";

export const GET_LOGIN_STARTED = "GET_LOGIN_STARTED";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_FAILED = "GET_LOGIN_FAILED";
export const GET_SIGNOUT = "GET_SIGNOUT";

export function getLoginStatred() {
  return {
    type: GET_LOGIN_STARTED,
  };
}

export function getLoginSuccess(user) {
  console.log("user", user.data);
  return {
    type: GET_LOGIN_SUCCESS,
    payload: user.data,
  };
}

export function getLoginFailed(error) {
  return {
    type: GET_LOGIN_FAILED,
    error,
  };
}

//Thunk Action
export function getLoginUser(email, password) {
  console.log('email', email);
  var user = { email, password };
  //console.log(user, JSON.stringify(user), "user");
  return (dispatch) => {
    fetch("http://localhost:5000/api/signin", {
      method: "post",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    })
      .then((result) => result.json())
      .then((res) => {
        // console.log(res, "res");
        if (!res) {
          return dispatch({
            type: GET_LOGIN_FAILED,
            payload: res,
          });
        } else {
          return dispatch({
            type: GET_LOGIN_SUCCESS,
            payload: res,
          });
        }
      })
      .catch((error) => {});
  };
}

export function getSignOut(error) {
  return {
    type: GET_SIGNOUT,
    error,
  };
}
