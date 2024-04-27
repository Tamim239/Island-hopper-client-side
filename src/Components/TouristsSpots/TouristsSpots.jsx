import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { UseImages } from "../../Hook/UseImages";
export const TouristsSpots = () => {
  const {data} = UseImages();
console.log(data)
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:w-4/5 mx-auto">
       {
        data?.slice(0,6).map(img =><div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800" key={img?._id}>
        <img
          src={img?.photo}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 hover:scale-105 hover:duration-700 hover:ease-in"
        />
        <div className="flex flex-col justify-between p-3 space-y-3">
          <div className="">
            <h2 className="text-3xl font-semibold tracking-wide">
            {img?.touristName}
            </h2>
            <div className="flex justify-between">
            <p className="dark:text-gray-800 text-xl flex items-center gap-1">
            <CiLocationOn /> {img?.location}
            </p>
            <p className="dark:text-gray-800 text-xl flex items-center gap-1">
            <IoTimeOutline /> {img?.travelTime}
            </p>
            </div>
            <div className="flex gap-4 justify-between">
            <p className="dark:text-gray-800 text-xl">
            seasonality <br />
            <span className="text-[#1CD8A4]">{img?.seasonality}</span>
            </p>
            <p className="dark:text-gray-800 text-xl">
            starting <br />
            <span className="text-[#1CD8A4]">{img?.averageCost}</span>
            </p>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
          >
           View Details
          </button>
        </div>
      </div>)
       }
    </div>
  );
};
