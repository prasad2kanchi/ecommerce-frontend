import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiFillShopping } from "react-icons/ai";
import { FaFirstOrderAlt } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { BsFillLockFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { getLoginUser } from "../redux/actions/loginaction";
import { connect } from "react-redux";

const ShippingDetails = (props) => {
  const [isAddAddress, setIsAddAddress] = useState(false);
  // const OpenClick = () => {
  //   setOpen(true);
  // };
   const addAddress=()=>{
     setIsAddAddress(!isAddAddress)
   }
  useEffect(() => {
    const data = props.loginUsers;
    if (!data.user.details) window.location.href = "/";
  }, []);
  return (
    <div>
      <div className="mb-5">
        <div className="ac1">
          <Link className="pl-5 ac2" to="/">
            Home
          </Link>
          <Link className="pl-3 ac2">Shop Details</Link>
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
              <div className="shippingd1 pt-4">
                <h5 className="pl-5" style={{fontWeight:"bold"}}>
                  Add a new address
                  <Link
                    style={{ color: "black", paddingLeft: "5px" }}
                  >
                    <GoPlus onClick={addAddress} className="shopaddress"/>{isAddAddress?(<form>
                      <div
                        className="shippingd2"
                        style={{ display: "inline-block" }}
                      >
                        <input
                          type="text"
                          className="shippingd3 mt-2 ml-3"
                          placeholder="Full Name"
                        />
                        <input
                          type="text"
                          className="shippingd3 mt-2 ml-3"
                          placeholder="Mobile Number"
                        />
                        <input
                          type="text"
                          className="shippingd3 mt-2 ml-3"
                          placeholder="Pin code"
                        />
                      </div>
                      <div
                        className="shippingd2 mt-3"
                        style={{ display: "inline-block" }}
                      >
                        <input
                          type="text"
                          className="shippingd3 mt-2 ml-3"
                          placeholder="Flat,house no,building"
                        />
                        <input
                          type="text"
                          className="shippingd3 mt-2 ml-3"
                          placeholder="Area,colonly,street"
                        />
                        <input
                          type="text"
                          className="shippingd3 mt-2 ml-3"
                          placeholder="LandMark "
                        />
                      </div>
                      <div
                        className="shippingd2 mt-3"
                        style={{ display: "inline-block" }}
                      >
                        <select className=" shippingd3 mt-2 ml-3">
                          <option>Select State</option>
                          <option>AndharaPradesh</option>
                          <option>Telagana</option>
                          <option>Karnataka</option>
                        </select>
                        <select className="shippingd3 mt-2 ml-3">
                          <option>Select City</option>
                        </select>
                        <select className="shippingd3 mt-2 ml-3">
                          <option>Select Address</option>
                          <option>Home</option>
                          <option>Office</option>
                        </select>
                      </div>
                      <button className="btn4 mt-3 ml-3">Save Address</button>
                    </form>):null}
                  </Link>
                </h5>
                
              </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ShippingDetails);
