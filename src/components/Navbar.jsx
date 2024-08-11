import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Auth from "./Auth";

function Navbar() {
  return (
   <>
    <nav className="bg-nav-color p-4 flex justify-between items-center">
      <img src={logo} alt="Logo" className="h-12 w-25 mr-2" />
      <Auth />
    </nav>
    <hr className="w-full  "/>
   </>
  );
}

export default Navbar;
