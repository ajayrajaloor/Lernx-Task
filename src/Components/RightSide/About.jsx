import React from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import { IoAddCircleSharp } from "react-icons/io5";

const About = () => {
  const handleEditClick = () => {
    // Define the action you want to take when the edit button is clicked
    console.log("Edit button clicked");
    // Add your logic here
  };
  return (
    <div className="mx-5">
      <div className="flex flex-row justify-between  gap-10 h-48">
        <div className="w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release
        </div>
        <button
          className="border border-gray-200 rounded-full p-1 h-7 bg-blue-500 text-white"
          onClick={handleEditClick}
        >
          <MdOutlineModeEditOutline />
        </button>
      </div>

      <div className="flex flex-col">
        <div>Experience</div>
        <div className="flex flex-row justify-between mt-5">
          <div className="flex flex-row gap-5">
            <div className=" border text-blue-600 text-3xl p-1 bg-slate-300 rounded-full h-10 w-10 justify-center flex items-center">
              <IoBagHandleSharp />
            </div>
            <div>
              <div>Crisis Intervention Specialist</div>
              <div className="text-sm">January 2023 - Present</div>
              <div className="text-xs opacity-80">
                icoderz, Ahamedabad India
              </div>
              <div className="text-sm mt-3 h-24 overflow-hidden">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row">
              <div className=" border text-blue-600  "><IoAddCircleSharp /></div>
              <div><MdOutlineModeEditOutline /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
