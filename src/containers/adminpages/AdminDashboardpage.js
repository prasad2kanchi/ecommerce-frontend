import React from "react";
import AdminDashboard from "../../screens/Admin/AdminDashboard";
import Footer from "../../components/Admin/Footer";
import Header from "../../components/Admin/Header";

const AdminDashboardpage = () => {
  return (
    <div>
      <Header />
      <AdminDashboard />
      <Footer />
    </div>
  );
};

export default AdminDashboardpage;
