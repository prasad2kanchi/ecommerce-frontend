import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Banner = () => {
  return (
    <div>
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
              src="images/banner2.jpg"
              alt="First slide"
              width="100%"
              height="500px"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="images/banner1.jpg"
              alt="Second slide"
              width="100%"
              height="500px"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="images/banner3.jpg"
              alt="Third slide"
              width="100%"
              height="500px"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span style={{ fontSize: "50px", color: "black" }}>
            <AiOutlineArrowLeft />
          </span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span style={{ fontSize: "50px", color: "black" }}>
            <AiOutlineArrowRight />
          </span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Banner;
