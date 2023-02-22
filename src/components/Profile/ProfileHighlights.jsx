import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const ProfileHighlights = () => {
  return (
    <div>
      <div className="flex overflow-hidden highlight-wrapper">
        <div className="flex flex-col items-center justify-start pl-1 mr-2 highlight-item">
          <div className="w-[57px] border mb-[6px] h-[56px] border-gray-300 rounded-full highlight-image">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://tse2.mm.bing.net/th?id=OIP.pfHYyzmSuY4x95QhvSZ-CgHaNK&pid=Api&P=0"
              alt="profile-dp"
            />
          </div>
          <div className="text-xs font-semibold text-gray-200 highlight-name">
            Interactio...
          </div>
        </div>
        <div className="flex flex-col items-center justify-start pl-1 mr-2 highlight-item">
          <div className="w-[57px] border mb-[6px] h-[56px] border-gray-300 rounded-full highlight-image">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://tse3.mm.bing.net/th?id=OIP.ZWapT0C-yxhizU8jtvODUAHaE8&pid=Api&P=0"
              alt="profile-dp"
            />
          </div>
          <div className="text-xs font-semibold text-gray-200 highlight-name">
            FamJam...
          </div>
        </div>
        <div className="flex flex-col items-center justify-start pl-1 mr-2 highlight-item">
          <div className="w-[57px] border mb-[6px] h-[56px] border-gray-300 rounded-full highlight-image">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://tse4.mm.bing.net/th?id=OIP.4_CIecEzB426lGqOhRZ0vAHaE7&pid=Api&P=0"
              alt="profile-dp"
            />
          </div>
          <div className="text-xs font-semibold text-gray-200 highlight-name">
            #MFGBYK...
          </div>
        </div>
        <div className="flex flex-col items-center justify-start pl-1 mr-2 highlight-item">
          <div className="w-[57px] border mb-[6px] h-[56px] border-gray-300 rounded-full highlight-image">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://tse4.mm.bing.net/th?id=OIP.cuANn7PBVfGH_OE5qSQtSAHaE7&pid=Api&P=0"
              alt="profile-dp"
            />
          </div>
          <div className="text-xs font-semibold text-gray-200 highlight-name">
            Food💕
          </div>
        </div>
        <div className="flex flex-col items-center justify-start pl-1 mr-2 highlight-item">
          <div className="w-[57px] border mb-[6px] h-[56px] border-gray-300 rounded-full highlight-image">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://tse3.mm.bing.net/th?id=OIP.6halzlZh6-3K7VxfgTnJrQHaEK&pid=Api&P=0"
              alt="profile-dp"
            />
          </div>
          <div className="text-xs font-semibold text-gray-200 highlight-name">
            Car rides...
          </div>
        </div>
        <div className="flex flex-col items-center justify-start pl-1 mr-2 highlight-add">
          <div className="w-[57px] h-[58px] border mb-[0.5px] border-gray-500 text-gray-500 rounded-full obcover fill highlight-image text-[32px] flex items-center justify-center">
            <AiOutlinePlus />
          </div>
          <div className="text-xs font-semibold text-gray-200 highlight-name">
            New
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHighlights;
