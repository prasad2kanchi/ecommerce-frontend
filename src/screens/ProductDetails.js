import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { generatePublicUrl } from "../urlConfig";
import { connect } from "react-redux";
import { getLoginUser } from "../redux/actions/loginaction";
import { BsArrowLeft } from "react-icons/bs";
import { postCartItems } from "../redux/actions/cartaction";

const ProductDetails = (props) => {
  const [productName, setProductName] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPicture, setProductPicture] = useState("");
  const [qty, setQty] = useState("");

  let history = useHistory();
  useEffect(() => {
    let id = window.location.pathname.slice(1);
    id = id.split("/")[1];
    //console.log("Propsaa", id);
    const product = props.productNames.productNames.filter((productind) => {
      // console.log("ind", productind._id);
      return productind._id === id;
    });
    //if (product) productData(product[0]);

    const productId = id.substring(id.lastIndexOf("/") + 1);
    ///console.log("aaa", productId);
    productData(productId);
  }, []);

  const productData = (id) => {
    //console.log("abbbbb", id);
    Axios.get(`http://localhost:5000/api/getoneproduct/${id.toString()}`)
      .then((res) => {
        //console.log(res.data);
        const details = res.data[0];
        //console.log(details);
        setProductName(details.productName);
        setProductBrand(details.productBrand);
        setproductPrice(details.productPrice);
        setProductDescription(details.productDescription);
        setProductPicture(details.productPicture);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let imageUrl = "";
  if (productPicture[0]) imageUrl = generatePublicUrl(productPicture[0].img);

  const AddTocart = () => {
    let id = window.location.pathname.slice(1);
    id = id.split("/")[1];
    // props.postCartItems(props.loginUsers.user.details._id, id);
    // history.push("/cart");
    if (!props.loginUsers?.user?.details?._id) {
      history.push("/signin");
    } else {
      props.postCartItems(props.loginUsers.user.details._id, id);
      history.push("/cart");
    }
  };

  return (
    <div>
      <div className="container mt-3 pd1 product-details-container">
        <h5 className="ml-5">
          <Link to="/">
            <BsArrowLeft className="ml-2" />
            <b className="ml-2"> Go Back </b>
          </Link>
        </h5>

        <div className="row">
          <div className="col-sm-6 pd2 mt-2">
            <img src={imageUrl} alt="pad" width="350px" height="300px" />
          </div>
          <div className="col-sm-6 pd3 mt-3">
            <h4>
              NAME :<b>{productName}</b>
            </h4>
            <h4>
              Brand :<b>{productBrand}</b>
            </h4>
            <h4>
              Price : <b>${qty !== "" ? qty * productPrice : productPrice}</b>
            </h4>
            <select onChange={(e) => setQty(e.target.value)} value={qty}>
              <option>Select Qty</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <br />

            {props?.loginUsers?.user?.details?.role === "admin" ? (
              ""
            ) : (
              <button
                className="btn btn-info btn-sm mt-2"
                style={{ marginRight: "10px" }}
                onClick={() => AddTocart()}
              >
                Add To Cart
              </button>
            )}
            <div className="pd4 mt-4">
              <h5>About Item</h5>
              <ul>
                <li>{productDescription}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
var mapStateToProps = (state) => {
  return {
    productNames: state.products,
    loginUsers: state.loginUsers,
    postCartReducers: state.postCartReducers,
  };
};

var mapDispatchToProps = {
  getLoginUser,
  postCartItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
