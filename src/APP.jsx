import Header from "./components/Header";
import React from "react";
// import RestaurantsHome from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div>
      <Header />
      {/* <RestaurantsHome /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
