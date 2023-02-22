import React from "react";

const ProfileMetrics = () => {
  return (
    <div className="py-[10px] mt-6 border-[rgba(200,200,200,0.1)] border-t-[0.5px] border-b-[0.5px]">
      <div className="flex items-center justify-between text-sm px-[54px]">
        <div className="flex flex-col items-center justify-center metrics-posts">
          <div className="font-semibold">236</div>
          <div className="text-gray-400">posts</div>
        </div>
        <div className="flex flex-col items-center justify-center metrics-followers">
          <div className="font-semibold">43.7K</div>
          <div className="text-gray-400">followers</div>
        </div>
        <div className="flex flex-col items-center justify-center metrics-following">
          <div className="font-semibold">420</div>
          <div className="text-gray-400">following</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMetrics;
