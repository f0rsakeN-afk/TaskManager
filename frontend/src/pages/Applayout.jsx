import React from "react";
import Home from "./Home";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div className="min-h-screen bg-[#E8E8E8] pb-2">
      <Navbar />
      <Outlet>
        <Home />
      </Outlet>
    </div>
  );
};

export default Applayout;
