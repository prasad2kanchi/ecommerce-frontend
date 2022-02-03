import Axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCarts } from "../redux/actions/cartaction";
import { generatePublicUrl } from "../urlConfig";

const AddToCart = (props) => {
  const [qty, setQty] = useState("");

  let amount = 0;

  useEffect(() => {
    handleLoginUser();
  }, []);
  async function handleLoginUser() {
    await props.getCarts(props?.postCartReducers?.cartData?._id);
  }

  let imageUrl = "";
  if (props.cartReducer.carts?.product_id?.productPicture[0])
    imageUrl = generatePublicUrl(
      props.cartReducer.carts?.product_id?.productPicture[0].img
    );

  const deleteAddToCart = async (cart) => {
    console.log("addddddd", props.postCartReducers.cartData?._id);
    await Axios.delete(
      `http://localhost:5000/api/user/deleteaddtocart/${cart}`
    ).then((res) => {
      console.log("aaaaaaa", res.data);

      if (res.data.status === true) {
        props.getCarts();
      }
    });
  };

  if (props.cartReducer?.loading) {
    return (
      <div>
        <h4>Carts</h4>
        <p>Loading.. Please wait</p>
      </div>
    );
  }
  //console.log("aaaaaaaaaabbb", props.postCartReducers.cartData._id);
  console.log("CartLength", props.cartReducer.carts);
  return (
    <div className="">
      <div className="container mt-3 ml-5 add-to-cart-container">
        <div className="" style={{ display: "flex" }}>
          <h4>
            <b>Shopping Cart</b>
          </h4>
          <p style={{ paddingLeft: "200px" }} className="addtocart3">
            <b>Price</b>
          </p>
        </div>
        {props?.cartReducer?.carts?.length === 0 ? (
          <h5
            className="mt-5 text-white p-3 ml-5"
            style={{ backgroundColor: "black", borderRadius: "10px" }}
          >
            <b>
              Your cart is empty{" "}
              <Link to="/shop" style={{ color: "white" }}>
                {" "}
                Go Back
              </Link>
            </b>
          </h5>
        ) : (
          <div className="row">
            <div className="col-md-8">
              <div className="addtocart1"></div>
              {props.cartReducer?.carts?.map((cart, index) => {
                amount = amount + cart.product_id?.productPrice;
                console.log("aaaaaa", cart._id);
                return (
                  <div key={index} className="mt-3">
                    <div className="addtocart2 " style={{ display: "flex" }}>
                      <img
                        src={generatePublicUrl(
                          cart.product_id?.productPicture[0]?.img
                        )}
                        width="250px"
                        height="200px"
                        style={{ borderRadius: "10px" }}
                        alt="img"
                      />

                      <h4 className="mt-3 ml-3 mr-5">
                        <b>{cart.product_id?.productName}</b>
                      </h4>
                      <h4 className="mt-3 ml-3 ">
                        <b>
                          $
                          {qty !== ""
                            ? qty * cart.product_id?.productPrice
                            : cart.product_id?.productPrice}
                        </b>
                      </h4>
                    </div>
                    <div className="text-center">
                      <select
                        className="ml-5 mb-3"
                        onChange={(e) => setQty(e.target.value)}
                        value={qty}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <button
                        className="ml-3 mb-3"
                        onClick={() => deleteAddToCart(cart._id)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="addtocart1"></div>
                  </div>
                );
              })}
              <h4></h4>
            </div>
            <div className="col-md-4">
              <div className="cart9">
                <p className="pl-2">
                  Your order is eligible for FREE Delivery. Select this option
                  at checkout. Details
                </p>
                <div className="container pb-3 bg-dark text-white">
                  <h4>
                    <b style={{ fontSize: "14px" }}>
                      Subtotal ({props.cartReducer?.carts?.length} items):{" "}
                      {qty == "" ? amount : amount * qty}
                    </b>
                  </h4>
                  <Link to="/signin">
                    <button className="btn btn-success">Proceed to Buy</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

var mapStateToProps = (state) => {
  return {
    cartReducer: state.cartReducer,
    postCartReducers: state.postCartReducers,
    loading: state.loading,
  };
};

var mapDispatchToProps = {
  getCarts,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
