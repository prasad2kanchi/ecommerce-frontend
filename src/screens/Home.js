import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <div className="home123">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="images/img3.jpg"
              alt="Third slide"
              width="100%"
              height="600px"
            />
            <div className="carousel-caption">
              <h2>Men Office Wears</h2>
              <Link to="/shop" className="home1">
                Shop Now <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="images/img1.jpg"
              alt="First slide"
              width="100%"
              height="600px"
            />
            <div className="carousel-caption">
              <h2 className="">Classic Women Wears</h2>
              <span className="mb-2"></span>
              <Link to="/shop" className="home1">
                Shop Now <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="images/img2.jpg"
              alt="Second slide"
              width="100%"
              height="600px"
            />
            <div className="carousel-caption">
              <h2>Summer Discount Offer!</h2>
              <Link to="/shop" className="home1">
                Shop Now <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
