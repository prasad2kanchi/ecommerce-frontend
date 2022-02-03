import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Landings/Banner";
import Slidera from "../components/Landings/Slidera";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Slidera />
      <Footer />
    </div>
  );
};

export default LandingPage;
