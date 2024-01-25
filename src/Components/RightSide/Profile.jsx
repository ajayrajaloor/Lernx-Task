import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import { IoIosPeople } from "react-icons/io";
import { MdAddCircle } from "react-icons/md";
import { GoInfo } from "react-icons/go";
import "./style.css";

const Profile = () => {
  const [enabled, setEnabled] = useState(false);
  const [inputValue, setInputValue] = useState(73);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const resizeChart = () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const myChartRef = chartRef.current.getContext("2d");

      chartInstance.current = new Chart(myChartRef, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: Array(10).fill(35),
              backgroundColor: [
                "rgb(30 64 175)",
                "rgb(30 64 175)",
                "rgb(30 64 175)",
                "rgb(30 64 175)",
                "rgb(200, 200, 200)",
                "rgb(200, 200, 200)",
                "rgb(200, 200, 200)",
                "rgb(200, 200, 200)",
                "rgb(200, 200, 200)",
                "rgb(200, 200, 200)",
              ],
            },
          ],
        },
        options: {
          cutout: "80%",
          responsive: false,
          maintainAspectRatio: false,
        },
      });

      const { width, height } = chartRef.current;
      const ctx = chartRef.current.getContext("2d");
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "black";
      ctx.font = "bold 18px Arial";

      ctx.fillText("350", width / 2, height / 2 - 10);
      ctx.font = "14px Arial";
      ctx.fillText("Sphere Rating", width / 2, height / 2 + 10);
    };

    const updateGradient = () => {
      const gradientColor = `linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899 ${inputValue}%, #d1d5db ${inputValue}%)`;
      document.getElementById("rangeInput").style.background = gradientColor;
    };
    updateGradient();

    window.addEventListener("resize", resizeChart);

    resizeChart();

    return () => {
      window.removeEventListener("resize", resizeChart);

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [inputValue]);

  return (
    <div className="w-full lg:w-1/3 bg-white ">
      <div className="bg-white flex flex-col lg:flex-row justify-center items-center lg:items-start">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU"
          alt=""
          className="rounded-full border absolute top-[8rem] w-44"
        />

        <div className="mt-20 flex flex-col w-full ">
          <div className="flex flex-col items-center">
            <h1 className="md:text-2xl font-medium">Ayaat Khaana</h1>
            <h1>UI/UX Developer</h1>
            <div className="flex flex-row gap-3">
              <IoIosPeople className="mt-0.5" />
              <h1>21 followers</h1>
              <h1>43 following</h1>
            </div>
          </div>

          <div className="mt-3  px-1 lg:w-full">
            <div className="flex flex-row lg:flex-row ">
              <h1 className="text-base  font-medium ">
                Make my profile visible to employers
              </h1>

              <label className="inline-flex  items-center pl-3 cursor-pointer mt-0.5">
                <input  
                  type="checkbox"
                  className="sr-only peer absolute"
                  checked={enabled}
                  readOnly
                />
                <div
                  onClick={() => {
                    setEnabled(!enabled);
                  }}
                  className={`relative w-11 h-6 rounded-full peer ${
                    enabled ? "bg-blue-500" : "bg-gray-200"
                  } peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all blue-checked:bg-green-600`}
                ></div>
              </label>
            </div>

            <h1 className="text-gray-400">
              Your profile and career goals will appear when employers search
              our database for candidates
            </h1>
          </div>

          <div className="mt-8 ">
            <div className="flex justify-between px-1">
              <h1 className="font-medium">Online Links</h1>
              <MdAddCircle className="text-blue-600 text-2xl" />
            </div>
            <h1 className="text-gray-400 px-1">
              Add your online portfolio links to increase your profile strength
            </h1>
          </div>

          <div className="flex flex-row items-center justify-center rounded-md mx-4 mt-8 h-[3.2rem] gap-5 bg-gray-50  ">
            <img
              className="w-8 h-8"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7LSxUieu5R_Gwtf1Tp_-hql6-hrbS3uDfWg&usqp=CAU"
              alt="icon"
            />
            <img
              className="w-8 h-8"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRmTKe43Ed0pAhtBFBmZywfjcPYv945ckJqw&usqp=CAU"
              alt="icon"
            />
            <img
              className="w-8 h-8"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTShdIDM2ge4rp_MI6TmQq94v8uspdqfFGwmJ3mpU1f4o0X-0nPWWBhqbzux36PuyXIatg&usqp=CAU"
              alt="icon"
            />
          </div>

          <div className="relative bg-gray-50 mx-5 rounded-lg flex justify-center flex-col items-center mt-16">
            <div className="mt-[0.8rem] flex gap-4 ">
              <h1>Wheel of opportunities</h1>
              <GoInfo className="text-gray-400 mt-1" />
            </div>
            <div style={{ position: "relative" }}>
              <canvas
                ref={chartRef}
                width="250"
                height="250"
                style={{ zIndex: 1 }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "black",
                  zIndex: 2,
                }}
              >
                <div className="text-5xl text-blue-800">350</div>
                <div className="text-lg">Sphere Rating</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  mt-16 mx-6 mb-20   ">
            <h1 className="text-2xl">Your Ranking</h1>

            <div className="w-full  mt-6 border flex   rounded-2xl border-gray-300  ">
              <input
                id="rangeInput"
                type="range"
                min="0"
                max="100"
                step="1"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full h-6 custom-slider  justify-center"
              />
            </div>
            <div>
                <h1 className="text-sm flex justify-center mt-3 text-gray-500 mx-auto">Hurray! You are in the top <span className="text-xl text-purple-800 ml-2 mt-[-0.3rem]">27%</span></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;