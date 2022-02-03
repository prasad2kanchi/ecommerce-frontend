import React from "react";
import AdminOrders from "../../screens/Admin/AdminOrders";
import Header from "../../components/Admin/Header";
import Footer from "../../components/Admin/Footer";


const Adminorderpage = () => {
  return (
    <div>
      <Header />
      <AdminOrders />
      <Footer />
    </div>
  );
};

export default Adminorderpage;
