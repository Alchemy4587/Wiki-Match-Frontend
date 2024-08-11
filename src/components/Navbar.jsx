import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Auth from "./Auth";

<<<<<<< HEAD
function Navbar() {
=======
export default function Navbar() {
>>>>>>> 71007d149ab5f3b0f750979ab32af3faf822ce53
  return (
   <>
    <nav className="bg-nav-color p-4 flex justify-between items-center">
      <img src={logo} alt="Logo" className="h-12 w-25 mr-2" />
      <Auth />
    </nav>
<<<<<<< HEAD
    <hr className="w-full "/>
   </>
  );
}

export default Navbar;
=======
    <hr className="w-full  "/>
   </>
  );
}
>>>>>>> 71007d149ab5f3b0f750979ab32af3faf822ce53
