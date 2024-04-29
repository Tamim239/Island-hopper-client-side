import { Helmet } from "react-helmet";
import svg from "../../assets/more/add.svg";
import { UseAuth } from "../../Hook/UseAuth";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export const AddTouristsSport = () => {
  const { user } = UseAuth();

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const touristName = form.tourists_spot_name.value;
    const countryName = form.country_Name.value;
    const photo = form.photo.value;
    const location = form.location.value;
    const averageCost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travel_time.value;
    const totalVisitor = form.totalVisitorsPerYear.value;
    const description = form.description.value;

    const collection = {
      userName,
      userEmail,
      touristName,
      countryName,
      photo,
      location,
      averageCost,
      seasonality,
      travelTime,
      totalVisitor,
      description,
    };
    console.log(collection);
    axios.post("https://island-hopper-server.vercel.app/images", collection).then((data) => {
      console.log(data.data);
      if (data?.data?.insertedId) {
        toast.success("successfully added");
      }
      form.reset();
    });
  };

  return (
    <div>
      <Helmet>
        <title>Island Hopper || add Tourists Spot</title>
      </Helmet>
      <section className=" bg-slate-300 p-6">
        <form
          onSubmit={handleAdd}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md  dark:bg-slate-900 dark:text-gray-100">
            <div className="space-y-4 col-span-full lg:col-span-2">
              <h1 className="text-3xl font-bold">Add Tourists Spot</h1>
              <p className="text-xs md:w-2/3">
                Whether you seek solace in the tranquility of nature or the
                pulsating rhythm of bustling cities, tourism promises an
                unforgettable odyssey filled with moments that linger in your
                heart long after the journey ends.
              </p>
              <img src={svg} alt="" className="h-96" />
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-2  border  p-2">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="tourists_spot_name" className="text-sm">
                  Tourists Spot Name
                </label>
                <input
                  id="tourists_spot_name"
                  type="text"
                  name="tourists_spot_name"
                  placeholder="Enter Tourists Spot Name"
                  className="w-full rounded-md px-2 py-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="country_Name" className="text-sm">
                  Country Name
                </label>
                <label htmlFor="country" className="form-control w-full">
                  <select name="country_Name" className="select select-bordered  dark:text-gray-400">
                    <option selected>
                      Select Country
                    </option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value='Thailand'>Thailand</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Cambodia">Cambodia</option>
                  </select>
                </label>
              </div>
              <div className="col-span-full">
                <label htmlFor="photo" className="text-sm">
                  PhotoURL
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Photo URL"
                  className="w-full rounded-md px-2 py-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="location" className="text-sm">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Location here"
                  className="w-full rounded-md px-2 py-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="average_cost" className="text-sm">
                  Average Cost
                </label>
                <input
                  name="average_cost"
                  type="text"
                  placeholder="Enter Average Cost"
                  className="w-full rounded-md px-2 py-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="seasonality" className="text-sm">
                  Seasonality
                </label>
                <input
                  id="seasonality"
                  name="seasonality"
                  type="text"
                  placeholder="Seasonality here"
                  className="w-full rounded-md px-2 py-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="travel_time" className="text-sm">
                  Travel Time
                </label>
                <input
                  id="travel_time"
                  type="text"
                  name="travel_time"
                  placeholder="Travel Time here"
                  className="w-full rounded-md px-2 py-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="totalVisitorsPerYear" className="text-sm">
                  Total Visitors Per Year
                </label>
                <input
                  id="totalVisitorsPerYear"
                  type="text"
                  name="totalVisitorsPerYear"
                  placeholder="Travel Time here"
                  className="w-full rounded-md px-2 py-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="totalVisitorsPerYear" className="text-sm">
                  Description
                </label>
                <textarea
                  name="description"
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="short description..."
                  className="w-full rounded-md px-2 py-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                ></textarea>
              </div>
              <div className="col-span-full">
                <input
                  type="submit"
                  value="Add"
                  className="w-full btn bg-[#EF4444] border-0 text-white rounded-md px-2 py-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
      <Toaster></Toaster>
    </div>
  );
};
