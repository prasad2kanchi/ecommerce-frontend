import React, { useState } from "react";
//import Axios from "axios";
import { connect } from "react-redux";
import { getLoginUser } from "./../redux/actions/loginaction";
import { Link, useHistory } from "react-router-dom";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useHistory();
  //Validation
  const validate = () => {
    let emailError = "";
    let passwordError = "";
    if (!email) {
      emailError = "Email Cannot Be Empty";
    }
    if (!password) {
      passwordError = "Password Cannot Be Empty";
    } else if (password.length < 3) {
      passwordError = "Password needs to be 3 characters or more";
    }
    if (emailError || passwordError) {
      setEmailError(emailError);
      setPasswordError(passwordError);
      return false;
    }
    return true;
  };
  // console.log(props.user, "user props");

  //OnFocus
  const emailFous = () => {
    setEmailError(false);
  };
  const passwordFocus = () => {
    setPasswordError(false);
  };
  //Login Submit

  const login = async (e) => {
    e.preventDefault();
    validate();
    await props.onLoginUser(email, password);
    // if (validate) {
    //   alert("Plz Enter the Details");
    // }
  };
  return (
    <div>
      <div className="container login-box">
        <h5 className="pl-5">Signin Here</h5>
        <form>
          <div>
            <input
              type="email"
              name="email"
              className="form-control mt-3"
              placeholder="Enter a Email....."
              onFocus={emailFous}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div
            style={{
              color: "red",
              fontSize: 10,
              fontWeight: "bold",
              outlineColor: "red",
            }}
            className="pl-5"
          >
            {emailError}
          </div>
          <div>
            <input
              type="password"
              name="password"
              className="form-control mt-3"
              placeholder="Enter a Password....."
              value={password}
              onFocus={passwordFocus}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{
              color: "red",
              fontSize: 10,
              fontWeight: "bold",
              outlineColor: "red",
            }}
            className="pl-5"
          >
            {passwordError}
          </div>
          {props?.user?.user?.message && (
            <p
              className="pl-5 mt-2"
              style={{ color: "red", fontWeight: "bold" }}
            >
              {props?.user?.user?.message}
            </p>
          )}
          <button onClick={login} className="form-control btn-danger mt-3">
            Submit
          </button>
          <p
            className="pl-5 mt-2"
            style={{ fontSize: "12px", fontWeight: "bold" }}
          >
            Don't have an account <Link to="/signup">? Signup</Link>
          </p>
        </form>
      </div>
      <span></span>
    </div>
  );
};
var mapStateToProps = (state) => {
  //console.log("state",state)
  return {
    user: state.loginUsers,
  };
};

var mapDispatchToProps = {
  getLoginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
