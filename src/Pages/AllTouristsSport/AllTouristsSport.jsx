import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export const AllTouristsSport = () => {
  const [usersData, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://island-hopper-server.vercel.app/images").then((data) => {
      setUsers(data.data);
    });
  }, []);

  const handleSort = () => {
    axios.get(`https://island-hopper-server.vercel.app/sorted`).then((data) => {
      console.log(data.data);
      setUsers(data.data);
    });
  };

  return (
    <div className="p-5">
      <Helmet>
        <title>Island Hopper || AllTourists Spot</title>
      </Helmet>
      <div className="text-center  text-black">
        <div className="dropdown dropdown-bottom ">
          <div tabIndex={0} role="button" className="btn border-0  m-1 text-white bg-[#EF4444]">
            Sort
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52 bg-black text-white"
          >
            <li>
              <a onClick={handleSort}>Average Cost</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {usersData?.map((users) => (
          <div
            className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row border my-4 "
            key={users?._id}
          >
            <img
              src={users?.photo}
              alt=""
              className="md:h-72  lg:w-60 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-3 dark:bg-slate-900 dark:text-gray-100 ">
              <div className="flex flex-col justify-between p-3 space-y-3">
                <div>
                  <h2 className="text-4xl font-semibold tracking-wide">
                    {users?.touristName}
                  </h2>
                  <div className="flex justify-between">
                    <p className="dark:text-gray-100 text-xl flex items-center gap-1">
                      <CiLocationOn /> {users?.location}
                    </p>
                    <p className="dark:text-gray-100 text-xl flex items-center gap-1">
                      <IoTimeOutline /> {users?.travelTime}
                    </p>
                  </div>
                  <div className="pl-5">
                    <p className="dark:text-gray-100 text-xl flex justify-between items-center">
                      seasonality{""}
                      <span className="text-[#1CD8A4]">
                        {users?.seasonality}
                      </span>
                    </p>
                    <p className="dark:text-gray-100 text-xl flex justify-between items-center">
                      starting <br />
                      <span className="text-[#1CD8A4]">
                        {users?.averageCost}
                      </span>
                    </p>
                    <p className="flex justify-between items-center text-xl">
                      Average Per Year{" "}
                      <span className="text-[#1CD8A4]">
                        {users?.totalVisitor}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Link to={`/viewDetails/${users?._id}`}>
                  <button type="button" className="self-end btn bg-[#EF4444] border-0 text-white">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
