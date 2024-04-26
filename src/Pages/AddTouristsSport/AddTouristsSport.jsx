import svg from "../../assets/more/add.svg";

export const AddTouristsSport = () => {
  return (
    <div>
      <section className=" bg-slate-300 p-6 dark:bg-gray-100 dark:text-gray-900">
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md  dark:bg-gray-50">
            <div className="space-y-4 col-span-full lg:col-span-2">
              <h1 className="text-3xl font-bold">Add Tourists Spot</h1>
              <p className="text-xs md:w-2/3">
                Whether you seek solace in the tranquility of nature or the
                pulsating rhythm of bustling cities, tourism promises an
                unforgettable odyssey filled with moments that linger in your
                heart long after the journey ends.
              </p>
              <img src={svg} alt="" className="h-96"/>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-2  border  p-2">
              <div className="col-span-full">
                <label htmlFor="userName" className="text-sm">
                User Name
                </label>
                <input
                  id="userName"
                  type="text"
                  name="userName"
                  placeholder="Enter User Name"
                  className="w-full rounded-md px-2 py-1 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="userEmail" className="text-sm">
                User Email
                </label>
                <input
                  id="userEmail"
                  type="email"
                  name="userEmail"
                  placeholder="Enter email here"
                  className="w-full rounded-md px-2 py-1 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="tourists_spot_name" className="text-sm">
                Tourists Spot Name
                </label>
                <input
                  id="tourists_spot_name"
                  type="text"
                  name="tourists_spot_name"
                  placeholder="Enter Tourists Spot Name"
                  className="w-full rounded-md px-2 py-1 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="country_Name" className="text-sm">
                  Country Name
                </label>
                <input
                  id="country_Name"
                  name="country_Name"
                  type="text"
                  placeholder="Enter Country Name"
                  className="w-full rounded-md px-2 py-1 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="photo" className="text-sm">
                  PhotoURL
                </label>
                <input
                  type="text"
                  placeholder="Enter Photo URL"
                  className="w-full rounded-md px-2 py-1 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
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
                  className="w-full rounded-md px-2 py-1 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
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
                  className="w-full rounded-md px-2 py-1 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
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
                  className="w-full rounded-md px-2 py-1 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
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
                  className="w-full rounded-md px-2 py-1 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
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
                  className="w-full rounded-md px-2 py-1 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
              <label htmlFor="totalVisitorsPerYear" className="text-sm">
                  Description
                </label>
                <textarea name="" id="" cols="30" rows="3" placeholder="short description..."  className="w-full rounded-md px-2 py-1 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>

              </div>
              <div className="col-span-full">
                <input type="submit" value="Add"  className="w-full btn btn-primary rounded-md px-2 py-1 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"/>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};
