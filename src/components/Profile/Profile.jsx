import React from "react";
import PostGrid from "./PostGrid";
import ProfileMetrics from "./ProfileMetrics";
import Navbar from "./Navbar";
import { AiOutlineSetting } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import ProfileHighlights from "./ProfileHighlights";

const Profile = () => {
  return (
    <div className="">
      <div className="flex py-[8px] px-4 bg-black profile-header">
        <span className="flex items-center justify-start flex-1 text-2xl profile-settings">
          <AiOutlineSetting />
        </span>
        <span className="flex items-center justify-center flex-1 font-semibold text-center profile-username">
          kunalr_99 &nbsp; <BsChevronDown />
        </span>
        <span className="flex items-center justify-end flex-1 text-[28px] profile-account">
          <BiUserPlus />
        </span>
      </div>
      <div className="px-4 pt-[22px] pb-[26px]">
        <div className="flex items-center mb-4 profile-top">
          <div className="w-[76px] h-[76px] -mt-4 mr-7 rounded-full profile-image">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://tse4.mm.bing.net/th?id=OIP.izScqUc_VJqCQQCI7CcNtwHaGz&pid=Api&P=0"
              alt="profile-dp"
            />
          </div>
          <div className="w-[250px] profile-controls">
            <div className="flex mb-[18px] space-x-3">
              <span className="text-xl profile-username">kunalr_99</span>
              <span className="flex items-center justify-start flex-1 text-2xl profile-settings">
                <AiOutlineSetting />
              </span>
            </div>
            <div className="py-[6px] mb-2 text-center text-black bg-[#eee] text-sm font-semibold rounded-lg profile-edit-btn">
              Edit profile
            </div>
            <div className="py-[6px] mb-2 text-center text-black bg-[#eee] text-sm font-semibold rounded-lg profile-ads-btn">
              Ad Tools
            </div>
          </div>
        </div>
        <div className="text-sm leading-[18px] profile-mid">
          <div className="font-semibold profile-name">
            Kunal Raut | Vlogging
          </div>
          <div className="mt-[2px] -mb-[1px] text-gray-400 profile-profession">
            Digital creator
          </div>
          <div className="mb-[2px] profile-bio">
            Plan | Vlog | Edit | Repeat 💫 <br /> Something out of the box🖤
            <br />
            Watch DG Vlog's video to Tung Fort ⭐📢
          </div>
          <div className="flex font-semibold text-blue-100 derline profile-navlink">
            <a href="https://www.youtube.com/watch?v=h35f-x8pRi4">
              youtu.be/h35f-x8pRi4{" "}
            </a>
            <span className="text-lg text-emerald-300">
              <MdVerified />
            </span>
          </div>
        </div>
      </div>
      <ProfileHighlights />
      <ProfileMetrics />
      <PostGrid />
      <div className="fixed bottom-0 w-full py-[10px] bg-black">
        <Navbar />
      </div>
    </div>
  );
};

export default Profile;
