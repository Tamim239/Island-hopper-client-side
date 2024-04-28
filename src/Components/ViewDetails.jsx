// import axios from "axios"
// import { useEffect } from "react"
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";

export const ViewDetails = () => {
  const loaderData = useLoaderData();

  console.log(loaderData);

  // useEffect(()=>{
  //   axios.get(`http://localhost:5000/images/${id}`)
  //   .then(data => {
  //       console.log(data.data)
  //   })

  // },[id])

  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={loaderData?.photo}
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 bg-gray-600 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl text-white"
              >
                {loaderData?.touristName}
              </a>
              <div className="flex justify-between text-white">
                <p className="dark:text-gray-800 text-xl flex items-center gap-1">
                  <CiLocationOn /> {loaderData?.location}
                </p>
                <p className="dark:text-gray-800 text-xl flex items-center gap-1">
                  <IoTimeOutline /> {loaderData?.travelTime}
                </p>
              </div>
              <div className="flex gap-4 justify-between text-white">
                <p className="dark:text-gray-800 text-xl">
                  seasonality <br />
                  <span className="text-[#1CD8A4]">
                    {loaderData?.seasonality}
                  </span>
                </p>
                <p className="dark:text-gray-800 text-xl">
                  starting <br />
                  <span className="text-[#1CD8A4]">
                    {loaderData?.averageCost}
                  </span>
                </p>
              </div>
              <div className="flex gap-4 justify-between text-white">
                <p className="dark:text-gray-800 text-xl">
                  Total Visitor per Year <br />
                  <span className="text-[#1CD8A4]">
                    {loaderData?.totalVisitor}
                  </span>
                </p>
                <p className="dark:text-gray-800 text-xl">
                  Country<br />
                  <span className="text-[#1CD8A4]">
                    {loaderData?.countryName}
                  </span>
                </p>
              </div>
              <p className="text-xl text-white">{loaderData?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
