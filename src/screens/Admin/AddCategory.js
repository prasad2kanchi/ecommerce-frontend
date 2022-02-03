import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { CgToolbox } from "react-icons/cg";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
//import Axios from "axios";

const AddCategory = () => {
  const [values, setValues] = useState({
    name: "",
  });
  let onChange = (e) => {
    console.log(e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    // let newCat = {
    //   name: name,
    // };
    // Axios.post(`http://localhost:5000/api/createcategory/${userId}`);
  };
  return (
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
                      <Link className="newad3 mt-2" to="/admin/create/product">
                        <FiBox /> Create Product
                      </Link>
                    </li>
                    <li className="mt-1">
                      <Link className="newad3 mt-2" to="/admin/mangeproduct">
                        <FiBox /> Manageproduct
                      </Link>
                    </li>
                    <li className="mt-1">
                      <Link className="newad3 mt-2" to="/admin/create/category">
                        <AiOutlineMedicineBox /> Createcategory
                      </Link>
                    </li>
                    <li className="mt-1">
                      <Link className="newad3 mt-2" to="/admin/managecategory">
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
              <div className="bg-info p-4">
                <div className="mb-1 text-light">
                  <center>
                    <h1>Add Categories here!</h1>
                  </center>
                </div>
                <Link
                  to="/admin/dashboard"
                  className="btn btn-md btn-warning mb-3"
                >
                  Admin Home
                </Link>
                <form>
                  <div className="form-group  text-center bg-white rounded">
                    <p className="lead text-dark text-center">
                      Enter the category
                    </p>
                    <input
                      type="text"
                      name="name"
                      className="form-control my-3"
                      autoFocus
                      required
                      placeholder="For Ex. Summer"
                      onChange={onChange}
                    />
                    <button className="btn btn-dark mb-5" onClick={onSubmit}>
                      Create Category
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
