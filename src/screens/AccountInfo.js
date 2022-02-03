import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiFillShopping } from "react-icons/ai";
import { FaFirstOrderAlt } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { BsFillLockFill } from "react-icons/bs";
import Axios from "axios";
import { getLoginUser } from "../redux/actions/loginaction";
import { connect } from "react-redux";


const AccountInfo = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(null)
  const id = window.location.pathname.id;
  //console.log("AccountInfo", props?.loginUsers?.user?.details?.name);

  //console.log(window.location.pathname);

  useEffect(() => {
    const data = props.loginUsers;
    if (!data.user.details) window.location.href = "/";
  }, []);

  useEffect(() => {
    userData();
  }, []);
  const userData = () => {
    Axios.get(
      `http://localhost:5000/api/getoneuserdetails/${props.loginUsers.user.details._id}`
    )
      .then((res) => {
        console.log(res.data);
        const details = res.data[0];
        setName(details.name);
        setEmail(details.email);
        setPhone(details.phone);
        setAddress(details.address);
        //console.log(details);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateprofile = (e) => {
    e.preventDefault();
    let update = {
      name: name,
      email: email,
      address: address,
      phone: phone,
    };
    Axios.put(
      `http://localhost:5000/api/updateuserdetails/${props.loginUsers.user.details._id}`,
      update
    )
      .then((res) => {
        console.log(res);
        alert("Successfully Updated My profile")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mb-5">
      <div className="ac1">
        <Link className="pl-5 ac2" to="/">
          Home
        </Link>
        <Link className="pl-3 ac2">Account Information</Link>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-sm-4 ac3 mt-5 pl-4 pb-5 pt-4">
            <h4>My Account</h4>
            <p>Hello</p>
            <h5>{props?.loginUsers?.user?.details?.name}</h5>
            <div className="ac4"></div>
            <div className="ac5">
              <ul>
                <li className="mt-1">
                  <Link
                    className="ac6"
                    to={`/accountinfo/${props.loginUsers.user.details._id}`}
                  >
                    <AiOutlineUser /> Account Information
                  </Link>
                </li>
                <li className="mt-1">
                  <Link className="ac6" to="/myorder">
                    <FaFirstOrderAlt /> My Order
                  </Link>
                </li>
                {/* <li className="mt-1">
                  <Link className="ac6" to="/shippingDetails">
                    <AiFillShopping /> Shop Detail
                  </Link>
                </li>
                <li className="mt-1">
                  <Link className="ac6" to="/wishlist">
                    <GiSelfLove />
                    My WishList
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-md-8  mt-5 pl-4 pb-5">
            <div className="ac7 pl-3 pt-4">
              <h6>Account Information</h6>
              <form>
                <div>
                  <input
                    type="text"
                    className="form1"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
                <input
                  type="text"
                  className="form1 mt-2"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="form1 mt-2"
                  onChange={(e) => setPhone(e.target.value)}
                  name="phone"
                  value={phone}
                  placeholder="Phone"
                />
                <input
                  type="text"
                  className="form1 mt-2"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  name="address"
                  placeholder="Address"
                />
                <br />
                <button className="btn3 mt-3" onClick={updateprofile}>
                  UpdateProfile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
var mapStateToProps = (state) => {
  return {
    loginUsers: state.loginUsers,
  };
};

var mapDispatchToProps = {
  getLoginUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
