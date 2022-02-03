import Axios from "axios";
//Actions

export const GET_USERID_STARTED = "GET_USERID_ACTION";
export const GET_USERID_SUCCESS = "GET_USERID_SUCCESS";
export const GET_USERID_FAILED = "GET_USERID_FAILED";

export function getUserIdStarted() {
  return {
    type: GET_USERID_STARTED,
  };
}

export function getUserIdSuccess(userId) {
  return {
    type: GET_USERID_SUCCESS,
    userId,
  };
}

export function getUserIdFailed(err) {
  return {
    type: GET_USERID_FAILED,
    err,
  };
}
//Thunk Action
export function getUserId() {
  //console.log("hello", id);
  return (dispatch) => {
    dispatch(getUserIdStarted());
    Axios.get("http://localhost:5000/api/user/getcartuserid")
      .then((res) => {
        //console.log("response", res.data);
        dispatch(getUserIdSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getUserIdFailed(err));
      });
  };
}
