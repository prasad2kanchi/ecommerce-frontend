import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { connect } from "react-redux";
import { getCarts } from "../../redux/actions/cartaction";
import { generatePublicUrl } from "../../urlConfig";

const Slidera = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  let imageUrl = "";
  if (props.cartReducer.carts?.product_id?.productPicture[0])
    imageUrl = generatePublicUrl(
      props.cartReducer.carts?.product_id?.productPicture[0].img
    );

  return (
    <div className="container-fluid mt-3 mb-5 text-center">
      <Carousel
        swipeable={false}
        draggable={false}
        // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        //removeArrowOnDeviceType={["tablet", "mobile"]}
        //removedotListClass={["tablet", "mobile"]}
        //itemClass="carousel-item-padding-40-px"
      >
        <div className="ourcoursescard ml-5">
          <img
            src="https://images.unsplash.com/photo-1587820784436-7a9a0f956db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=926&q=80"
            alt="abc"
            width="350px"
            height="200px"
          />
          <h4 className="pt-4">
            <b>Mac Laptop</b>
          </h4>
        </div>
        <div className="ourcoursescard ml-5">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="abc"
            width="350px"
            height="200px"
          />
          <h4 className="pt-4">
            <b>Dell Laptop</b>
          </h4>
        </div>
        <div className="ourcoursescard ml-5">
          <img
            src="https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
            width="350px"
            height="200px"
            alt="aa"
          />
          <h4 className="pt-4">
            <b>Hp Laptop</b>
          </h4>
        </div>
        <div className="ourcoursescard">
          <img
            src="https://images.unsplash.com/photo-1524141069110-1c85483ef375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            alt="abc"
            width="350px"
            height="200px"
            alt="aaa"
          />
          <h4 className="pt-4">
            <b>Lenvovo Laptop</b>
          </h4>
        </div>
      </Carousel>
      ;
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

export default connect(mapStateToProps, mapDispatchToProps)(Slidera);
