import Navbar from "./navbar/Navbar.jsx";
import Footer from "./footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import React from "react";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
