import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Community = () => {
  return (
    <div className="pl-10">
      <h3 className="text-xl font-semibold mb-2">Communities Feed</h3>
      {/* Community 1 */}
      <div className="flex items-center mb-2">
        <img
          src="https://placekitten.com/50/50?image=1"
          alt="image1"
          className="rounded-full mr-2"
          width="40"
          height="40"
        />
        <div>
          <p>Indonesia UI Designer</p>
          <p className="text-gray-500 text-sm">734 members</p>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <img
          src="https://placekitten.com/50/50?image=3"
          alt="image1"
          className="rounded-full mr-2"
          width="40"
          height="40"
        />
        <div>
          <p>Indonesia Ux Resea...</p>
          <p className="text-gray-500 text-sm">125 members</p>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <img
          src="https://placekitten.com/50/50?image=10"
          alt="image1"
          className="rounded-full mr-2"
          width="40"
          height="40"
        />
        <div>
          <p>Prototyping Club</p>
          <p className="text-gray-500 text-sm">891 members</p>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <img
          src="https://placekitten.com/50/50?image=11"
          alt="image1"
          className="rounded-full mr-2"
          width="40"
          height="40"
        />
        <div>
          <p>Indonesia UI Designer</p>
          <p className="text-gray-500 text-sm">241 members</p>
        </div>
      </div>

      {/* Repeat similar structure for other communities */}
      <div className="mt-5 ">
        <p className="flex items-center justify-center text-blue-600">
          Show 5 more{" "}
          <span className="text-gray-500 pt-0.5">
            <IoIosArrowForward />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Community;
