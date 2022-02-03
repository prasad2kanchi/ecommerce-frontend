import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiFillShopping } from "react-icons/ai";
import { FaFirstOrderAlt } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { BsFillLockFill } from "react-icons/bs";
import { getLoginUser } from "../redux/actions/loginaction";
import { connect } from "react-redux";

const WishList = (props) => {
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
          <Link className="pl-3 ac2">My Wishlist</Link>
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
                <h6>My WishList</h6>
                <div className="wishlist mt-1 mr-1">
                  <div className="">
                    <table className="table-sm table table-striped table-bordered table-hover">
                      <thead>
                        <tr className="wishlist1">
                          <th className="">No</th>
                          <th className="">Product Detail</th>
                          <th className="">Price</th>
                          <th className="">Cart</th>
                          <th className="">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(WishList);
