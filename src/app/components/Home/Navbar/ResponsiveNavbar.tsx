"use client";
import React, { useState } from "react";
import Nav from "./Nav";
// import MobileNav from './MobileNav'

const ResponsiveNavbar = () => {
  // const [showNav,setShowNav] =useState(false);
  // const openNavHandler = () =>setShowNav(true);
  // const closeNavHandler = () =>setShowNav(false);
  return (
    <div>
      <Nav />
      {/* <MobileNav showNav={showNav} closeNav={closeNavHandler}/> */}
    </div>
  );
};

export default ResponsiveNavbar;
