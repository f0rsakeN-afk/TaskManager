import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.webp";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      let currentDate = new Date();
      let hours = String(currentDate.getHours()).padStart(2, "0");
      let minutes = String(currentDate.getMinutes()).padStart(2, "0");
      let seconds = String(currentDate.getSeconds()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center ">
          <img src={Logo} alt="Logo" className="h-12 invert" />
        </NavLink>
          <span className="ml-2 font-bold text-xl text-white">{currentTime}</span>
      </div>
    </nav>
  );
};

export default Navbar;
