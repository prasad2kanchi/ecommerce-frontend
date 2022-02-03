import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { CgToolbox } from "react-icons/cg";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const ManageCategory = () => {
  const [names, setNames] = useState([]);

  const FetechData = () => {
    Axios.get("http://localhost:5000/api/getallcategories")
      .then((names) => {
        console.log(names);
        setNames(names.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    FetechData();
  }, []);
  const onDelete = (id) => {
    Axios.delete(
      "http://localhost:5000/api/deleteproduct/" + id
    ).then((response) => FetechData());
  };
  return (
    <div>
      <div>
        <div>
          <div className="container-fluid mb-5 mt-5">
            <div className="row">
              <div className="col-sm-3 mb-3">
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
                          <RiAdminFill /> Dashboard
                        </Link>
                      </li>
                      <li className="mt-1">
                        <Link
                          className="newad3 mt-2"
                          to="/admin/create/product"
                        >
                          <FiBox /> Create Product
                        </Link>
                      </li>
                      <li className="mt-1">
                        <Link className="newad3 mt-2" to="/admin/mangeproduct">
                          <FiBox /> Manageproduct
                        </Link>
                      </li>
                      <li className="mt-1">
                        <Link
                          className="newad3 mt-2"
                          to="/admin/create/category"
                        >
                          <AiOutlineMedicineBox /> Createcategory
                        </Link>
                      </li>
                      <li className="mt-1">
                        <Link
                          className="newad3 mt-2"
                          to="/admin/managecategory"
                        >
                          <AiOutlineMedicineBox /> Managecategory
                        </Link>
                      </li>
                      <li className="mt-1">
                        <Link className="newad3 mt-2" to="/admin/Orders">
                          <CgToolbox /> Orders
                        </Link>
                      </li>
                      <li className="mt-1">
                        <Link className="newad3 mt-2" to="/admin/Users">
                          <AiOutlineUsergroupAdd /> Users
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-9">
                <div className="bg-info p-4 ">
                  <Link className="btn btn-warning" to={`/admin/dashboard`}>
                    <span className="">Admin Home</span>
                  </Link>
                  <h2 className="text-center text-white my-3">
                    Total products
                  </h2>
                  <div className="container p-4 box2">
                    {names.map((name, index) => {
                      return (
                        <div key={index} className="row">
                          <div className="col-sm-4">
                            <h3 className=" text-white text-left">
                              {name.name}
                            </h3>
                          </div>
                          <div className="col-sm-4">
                            <Link
                              className="btn btn-success"
                              to={`/admin/category/update/${name._id}`}
                            >
                              <span className="">Update</span>
                            </Link>
                          </div>
                          <div className="col-sm-4">
                            <button
                              onClick={() => onDelete(name._id)}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      );
                    })}
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

export default ManageCategory;
