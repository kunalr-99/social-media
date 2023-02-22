import React from "react";
import { ImLocation } from "react-icons/im";
// import { BsSuitHeart } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { TbBadge } from "react-icons/tb";

const PostCard = () => {
  return (
    <div className="">
      <div className="py-2 rounded-xl">
        <div className="flex px-2 my-4 font-bold">
          <span className="w-[20px] px-6 bg-gray-600 rounded-full mr-2"></span>
          <div>
            <span>Kunal Raut</span>
            <div className="flex items-center mb-2 space-x-1 text-xs">
              <span>
                <ImLocation />
              </span>
              <span>Ulwe, The city of Love</span>
            </div>
          </div>
        </div>

        <div className="px-2 mb-4 text-sm">
          Caption - Lorem ipsum dolor, sit amet consectetur adipisicing elit
          Lorem ipsum dolor, sit amet consectetur adipisicing elit..
        </div>
        <div className="w-full mb-3">
          <img
            className="w-full"
            src="https://tse3.mm.bing.net/th?id=OIP.xRT4Iunhn8opElpH3uZrBAHaGo&pid=Api&P=0"
            alt="caption"
          />
        </div>
        <div className="flex justify-between px-3 text-2xl">
          <span className="flex space-x-5">
            <span>
              <FaRegHeart />
            </span>
            <span>
              <FaRegComment />
            </span>
            <span>
              <FiSend />
            </span>
          </span>
          <span>
            <TbBadge />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
