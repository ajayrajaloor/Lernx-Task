import React, { useState } from "react";
import AboutComponent from "./About";
import SkillsComponent from "./Skills";
import PostsComponent from "./Posts";
import SpacesComponent from "./Spaces";

const RightDetails = () => {
  const [activeTab, setActiveTab] = useState("about");

  const handleButtonClick = (tab) => {
    setActiveTab(tab);
  };

  const renderComponent = () => {
    switch (activeTab) {
      case "post":
        return <PostsComponent />;
      case "about":
        return <AboutComponent />;
      case "skills":
        return <SkillsComponent />;
      case "spaces":
        return <SpacesComponent />;
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col w-full lg:w-2/3 m-3   pt-5  rounded-lg bg-white h-screen">
      <div className="">
        <div className="flex flex-row gap-[8rem] pl-5">
          <div className={`w-full lg:w-auto ${activeTab === "about" ? 'border-b-2 border-blue-500' : ''}`}>
            <button onClick={() => handleButtonClick("about")}>About</button>
          </div>
          <div className={`w-full lg:w-auto ${activeTab === "skills" ? 'border-b-2 border-blue-500' : ''}`}>
            <button onClick={() => handleButtonClick("skills")}>Skills</button>
          </div>
          <div className={`w-full lg:w-auto ${activeTab === "post" ? 'border-b-2 border-blue-500' : ''}`}>
            <button onClick={() => handleButtonClick("post")}>Posts</button>
          </div>
          <div className={`w-full lg:w-auto ${activeTab === "spaces" ? 'border-b-2  border-blue-500' : ''}`}>
            <button onClick={() => handleButtonClick("spaces")}>Space</button>
          </div>
        </div>
        <hr className="h-px my-4  bg-gray-200 border-0 dark:bg-gray-700"/>

      </div>
      {renderComponent()}
    </div>
  );
};

export default RightDetails;
