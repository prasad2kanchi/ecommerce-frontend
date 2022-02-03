import React from "react";
import { Link } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { CgToolbox } from "react-icons/cg";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaHome, FaFirstOrderAlt } from "react-icons/fa";
const AdminOrders = () => {
  return (
    <div>
      <div>
        <div className="container mt-5 admin-orders-container">
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
                    {/*  <li className="mt-1">
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
                    <li className="mt-1 text-white">
                      <Link
                        className="newad3 mt-2 "
                        style={{ color: "white" }}
                        to="/admin/Orders"
                      >
                        <FaFirstOrderAlt /> Orders
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-8 newad4  pt-3 pl-5">
              <h6>My Orders</h6>
              <div className="wishlist">
                <div className="">
                  <table className="table-sm table table-striped table-bordered table-hover">
                    <thead>
                      <tr className="wishlist1">
                        <th className="">No</th>
                        <th className="">Order Date</th>
                        <th className="">Order Id</th>
                        <th className="">Total Amount</th>
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
  );
};

export default AdminOrders;
