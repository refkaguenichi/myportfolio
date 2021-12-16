import React from "react";
import { useState } from "react";
import Sidebar from "./../Sidebar/Sidebar";
import Navbar from "./../Navbar/Navbar";

const Appbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} handleOpen={handleOpen} />
      <Navbar handleOpen={handleOpen} />
    </>
  );
};

export default Appbar;
