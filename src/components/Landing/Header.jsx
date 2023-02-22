import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    // <div className="flex p-4 text-2xl bg-[#d7c828]">
    <div className="flex p-4 text-2xl bg-[#e6e723]">
      <span className="flex-1 text-slate-700">
        <GiHamburgerMenu />
      </span>
      <span className="flex justify-center flex-1 text-xl font-bold text-red-900">
        Saugarm
      </span>
      <span className="flex justify-end flex-1 text-slate-700">
        <AiOutlineUser />
      </span>
    </div>
  );
};

export default Header;
