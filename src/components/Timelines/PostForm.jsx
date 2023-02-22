import React, { useState } from "react";

const PostForm = ({ allPosts, setAllPosts }) => {
  const [postData, setPostData] = useState({
    imgUrl: "",
    caption: "",
    location: "",
  });

  let key, value;
  const inputHandler = (e) => {
    e.preventDefault();
    // console.log(e);
    key = e.target.name;
    value = e.target.value;
    setPostData({
      ...postData,
      [key]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (postData.imgUrl && postData.caption && postData.location) {
      setAllPosts([...allPosts, postData]);
      setPostData({
        imgUrl: "",
        caption: "",
        location: "",
      });
    } else {
      alert("sagle fields tak");
    }
  };
  return (
    <div>
      <form action="#" className="flex flex-col px-4 py-4">
        <label className="mb-2" htmlFor="imgUrl">
          Image Url:
        </label>
        <input
          className="px-3 py-2 bg-gray-900 border-transparent focus:outline-none"
          type="text"
          name="imgUrl"
          value={postData.imgUrl}
          onChange={inputHandler}
        />
        <label className="mb-2" htmlFor="caption">
          Write caption:
        </label>
        <input
          className="px-3 py-2 bg-gray-900 border-transparent focus:outline-none"
          type="text"
          name="caption"
          value={postData.caption}
          onChange={inputHandler}
        />
        <label className="mb-2" htmlFor="location">
          Location:
        </label>
        <input
          className="px-3 py-2 bg-gray-900 border-transparent focus:outline-none"
          type="text"
          name="location"
          value={postData.location}
          onChange={inputHandler}
        />
        <input
          className="w-[200px] mx-auto px-4 py-3 mt-4 text-lg font-bold tracking-wider text-gray-200 bg-blue-800 rounded-lg"
          type="submit"
          value="Post"
          onClick={submitHandler}
        />
      </form>
      {/* {allPosts.map((post) => {
        const { imgUrl, caption, location } = post;
        return (
          <>
            <div>{caption}</div>
            <div>{imgUrl}</div>
            <div className="border-b-4">{location}</div>
          </>
        );
      })} */}
    </div>
  );
};

export default PostForm;
