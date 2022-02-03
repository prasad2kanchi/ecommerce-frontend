import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Homepage from "./containers/Homepage";
import Registerpage from "./containers/Registerpage";
import Loginpage from "./containers/Loginpage";
import AdminLoginpage from "./containers/adminpages/AdminLoginpage";
import Cartpage from "./containers/Cartpage";
import Addproductpage from "./containers/adminpages/Addproductpage";
import Manageproductspage from "./containers/adminpages/Manageproductspage";
import Updateproductpage from "./containers/adminpages/Updateproductpage";
import Shoppage from "./containers/commonpages/Shoppage";
import Productdetailspage from "./containers/Productdetailspage";
import AccountInfopage from "./containers/accountpages.js/AccountInfopage";
import ShippingDetailspage from "./containers/accountpages.js/ShippingDetailspage";
import Wishlistpage from "./containers/accountpages.js/Wishlistpage";
import Orderspage from "./containers/accountpages.js/Orderspage";
import AdminDashboardpage from "./containers/adminpages/AdminDashboardpage";
import Addcategorypage from "./containers/adminpages/Addcategorypage";
import ManageCategorypage from "./containers/adminpages/ManageCategorypage";
import Adminorderpage from "./containers/adminpages/Adminorderpage";
import LandingPage from "./containers/LandingPage";

function App(props) {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/*  <Route path="/home" component={Homepage} />*/}
          <Route path="/shop" component={Shoppage} />
          <Route path="/signup" component={Registerpage} />
          <Route path="/signin" component={Loginpage} />
          <Route path="/cart" component={Cartpage} />
          <Route path="/accountinfo" component={AccountInfopage} />
          <Route path="/shippingDetails" component={ShippingDetailspage} />
          <Route path="/wishlist" component={Wishlistpage} />
          <Route path="/myorder" component={Orderspage} />
          <Route path="/admin/dashboard" component={AdminDashboardpage} />
          <Route path="/admin/login" component={AdminLoginpage} />
          <Route path="/admin/create/product" component={Addproductpage} />
          <Route path="/admin/mangeproduct" component={Manageproductspage} />
          <Route path="/admin/create/category" component={Addcategorypage} />
          <Route path="/admin/managecategory" component={ManageCategorypage} />
          <Route path="/admin/Orders" component={Adminorderpage} />
          <Route
            path="/admin/product/update/:Id"
            component={Updateproductpage}
          />
          <Route path="/productdetails/:Id" component={Productdetailspage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
