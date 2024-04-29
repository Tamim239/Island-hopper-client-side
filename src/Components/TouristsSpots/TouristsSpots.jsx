import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export const TouristsSpots = () => {
  const [usersData, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://island-hopper-server.vercel.app/images").then((data) => {
      setUsers(data.data);
    });
  }, []);

  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:w-4/5 mx-auto ">
      <Helmet>
        <title>Island Hopper || Tourists Spot</title>
      </Helmet>
      {usersData?.slice(0, 6).map((img) => (
        <div
          className=" rounded-md shadow-md"
          key={img?._id}
        >
          <img
            src={img?.photo}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72  hover:scale-105 hover:duration-700 hover:ease-in"
          />
          <div className="flex flex-col justify-between p-3 space-y-3 dark:bg-slate-900 dark:text-white">
            <div>
              <h2 className="text-3xl font-semibold tracking-wide">
                {img?.touristName}
              </h2>
              <div className="selector flex justify-between dark:text-white">
                <p className=" text-xl flex items-center gap-1">
                  <CiLocationOn /> {img?.location}
                </p>
                <p className=" text-xl flex items-center gap-1">
                  <IoTimeOutline /> {img?.travelTime}
                </p>
              </div>
              <div className="flex gap-4 justify-between">
                <p className=" text-xl">
                  seasonality <br />
                  <span className="text-[#1CD8A4]">{img?.seasonality}</span>
                </p>
                <p className=" text-xl">
                  starting <br />
                  <span className="text-[#1CD8A4]">{img?.averageCost}</span>
                </p>
              </div>
            </div>
            <Link to={`/viewDetails/${img?._id}`}
              href="#_"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#EF4444] rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#EF4444] group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-[#EF4444] transition-all duration-300 transform group-hover:translate-x-full ease">
                View Details
              </span>
              <span className="relative invisible">View Details</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
