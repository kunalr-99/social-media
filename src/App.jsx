import React from "react";
import Landing from "./components/Landing/Landing";
import Profile from "./components/Profile/Profile";
import GeneralTimeline from "./components/Timelines/GeneralTimeline";

const App = () => {
  return (
    <div className="text-white bg-[rgb(1,1,1)]">
      {/* <Profile /> */}
      <GeneralTimeline />
    </div>
    // <div className="text-slate-800 bg-slate-200">
    //   <Landing />
    // </div>
  );
};

export default App;
