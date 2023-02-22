import React, { useState } from "react";
// import { allPosts } from "../fakeApi/fakePosts";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { VscBookmark } from "react-icons/vsc";
import PostForm from "./PostForm";

const FollowingFormPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  return (
    <>
      <div>
        <PostForm allPosts={allPosts} setAllPosts={setAllPosts} />
      </div>
      <div>
        {allPosts.map((postData) => {
          const { username, imgUrl, caption, location } = postData;
          return (
            <div className="text-[15px] py-4 border-b border-[#373737]">
              <div className="flex items-center gap-4 mb-2 ml-[6px] post-head">
                <div className="w-[32px] h-[32px] rounded-full post-userdp">
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src="https://tse4.mm.bing.net/th?id=OIP.izScqUc_VJqCQQCI7CcNtwHaGz&pid=Api&P=0"
                    alt="profile-dp"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <div className="font-semibold mb- post-username">
                      {username || "kunalr_99"}
                    </div>
                    <div className="text-gray-300 post-time">- 1h</div>
                  </div>
                  <div className="text-[12px] post-location">{location}</div>
                </div>
              </div>
              <div className={`bg-black w-full h-[414px] post-image`}>
                <img
                  className="object-cover w-full h-full"
                  src={imgUrl}
                  alt="post-img"
                />
              </div>
              <div className="px-4 pt-4 mb-2 font-bold post-interactions">
                <div className="flex justify-between mb-4 post-interaction-top">
                  <div className="flex space-x-5 interactions-left">
                    <span className="text-2xl like">
                      <FaRegHeart />
                    </span>
                    <span className="text-2xl comment">
                      <FaRegComment />
                    </span>
                    <span className="text-2xl share">
                      <FiSend />
                    </span>
                  </div>
                  <div className="interactions-right">
                    <span className="text-2xl font-extrabold save">
                      <VscBookmark />
                    </span>
                  </div>
                </div>
                <div className="text-sm post-interactions-bottom">
                  3,993 likes
                </div>
              </div>
              <div className="px-4 mb-2 post-caption">
                <span className="mr-2 font-semibold post-username">
                  {username || "luke_coutinho"}
                </span>
                <span>{caption}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FollowingFormPosts;
