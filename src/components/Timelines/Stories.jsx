import React from "react";
import { allStories } from "../fakeApi/fakeStories";

const Stories = () => {
  return (
    <div className="flex pt-[90px] pb-7 overflow-scroll story-wrapper">
      {allStories.map((story) => {
        const { imgUrl, username } = story;
        return (
          <>
            <div className="flex flex-col items-center justify-start pl-1 mr-3 story-item">
              <div className="w-[64px] border-[3px] mb-[6px] h-[64px] p-[2px] border-x-yellow-500 border-y-pink-500 rounded-full highlight-image">
                <img
                  className="object-cover w-full h-full rounded-full"
                  src={imgUrl}
                  alt="profile-dp"
                />
              </div>
              <div className="-mt-1 text-xs font-semibold text-gray-200 highlight-name">
                {username}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Stories;
