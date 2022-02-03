import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { CgToolbox } from "react-icons/cg";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { connect } from "react-redux";
import { getLoginUser } from "../../redux/actions/loginaction";
import { FaHome, FaFirstOrderAlt } from "react-icons/fa";
const AdminDashboard = (props) => {
  //console.log("adminprops", props);
  // useEffect(() => {
  //   const data = props.loginUsers;
  //   if (!data.user.details) window.location.href = "/";
  // }, []);
  return (
    <div>
      <div className="container mt-5 admin-dashoard-container">
        <div className="row">
          <div className="col-sm-4">
            <div className="newad1 pl-3 pt-4">
              <img
                src="https://secure.gravatar.com/avatar/053467956553007b62a4cc9eb47ad16d?s=70&d=mm&r=g"
                alt="aa"
                style={{ borderRadius: "10px" }}
              />
              <h5 className="mt-2 text-white">Admin Dashboard</h5>
              <div className="newad2">
                <ul className="mt-2">
                  <li className="mt-1">
                    <Link className="newad3 mt-2" to="/admin/dashboard">
                      <FaHome /> Dashboard
                    </Link>
                  </li>
                  <li className="mt-1">
                    <Link className="newad3 mt-2" to="/admin/create/product">
                      <FiBox /> Create Product
                    </Link>
                  </li>
                  <li className="mt-1">
                    <Link className="newad3 mt-2" to="/admin/mangeproduct">
                      <FiBox /> Manageproduct
                    </Link>
                  </li>
                  {/* <li className="mt-1">
                    <Link className="newad3 mt-2" to="/admin/create/category">
                      <AiOutlineMedicineBox /> Createcategory
                    </Link>
                  </li>
                  <li className="mt-1">
                    <Link className="newad3 mt-2" to="/admin/managecategory">
                      <AiOutlineMedicineBox /> Managecategory
                    </Link>
                  </li>
  */}
                  <li className="mt-1">
                    <Link className="newad3 mt-2" to="/admin/Orders">
                      <FaFirstOrderAlt /> Orders
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-sm-8 newad4 pt-3"
            style={{ borderRadius: "10px" }}
          >
            <div className="row">
              <div className="col-sm-6 mt-2">
                <div className="admin-card pl-2 text-white pt-3">
                  <h5>5</h5>
                  <h6>Registered User</h6>
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <div className="admin-card1 pl-2 text-white pt-3">
                  <h5>20</h5>
                  <h6>Orders</h6>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
