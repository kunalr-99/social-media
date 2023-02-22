import React from "react";
import { BsSearch, BsMessenger, BsPlusCircle } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="text-2xl text-slate-500">
      <div className="flex items-center p-3">
        <span className="flex items-center justify-center flex-1 text-center hover:cursor-pointer nav-item text-slate-800">
          <AiFillHome />
        </span>
        <span className="flex items-center justify-center flex-1 px-2 py-1 text-center hover:cursor-pointer nav-item">
          <BsSearch />
        </span>
        <span className="flex items-center justify-center flex-1 px-2 py-1 text-center hover:cursor-pointer nav-item">
          <BsPlusCircle />
        </span>
        <span className="flex items-center justify-center flex-1 px-2 py-1 text-center hover:cursor-pointer nav-item">
          <BsMessenger />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
