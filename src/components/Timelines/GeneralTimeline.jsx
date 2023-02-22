import React from "react";
import FollowingFormPosts from "./FollowingFormPosts";
import FollowingPosts from "./FollowingPosts";
import PostForm from "./PostForm";
import Stories from "./Stories";
import TimlineHeader from "./TimlineHeader";

const GeneralTimeline = () => {
  return (
    <div>
      <TimlineHeader />
      <Stories />
      {/* <PostForm /> */}
      {/* <FollowingPosts /> */}
      <FollowingFormPosts />
    </div>
  );
};

export default GeneralTimeline;
