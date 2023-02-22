import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineExplore, MdOutlineAddBox } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex items-center justify-center flex-1 text-[28px]">
          <AiOutlineHome />
        </div>
        <div className="flex items-center justify-center flex-1 text-[28px]">
          <MdOutlineExplore />
        </div>
        <div className="flex items-center justify-center flex-1 text-[24px]">
          <BsCameraReels />
        </div>
        <div className="flex items-center justify-center flex-1 text-[28px]">
          <MdOutlineAddBox />
        </div>
        <div className="flex items-center justify-center flex-1 text-[28px]">
          <RiMessengerLine />
        </div>
        <div className="flex items-center justify-center flex-1 text-[28px]">
          <img
            className="object-cover w-[30px] h-[30px] rounded-full"
            src="https://tse4.mm.bing.net/th?id=OIP.izScqUc_VJqCQQCI7CcNtwHaGz&pid=Api&P=0"
            alt="profile-dp"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
