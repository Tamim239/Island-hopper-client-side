import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export const CountryCard = () => {
    const {id} = useParams()
    const [countryData, setCountryData] = useState([])
    console.log(id)

  useEffect(()=>{
    axios.get(`http://localhost:5000/double/${id}`)
    .then(data =>{
        console.log(data.data);
        setCountryData(data.data);
    })
  },[id])

  return (
    <div className="p-5">
      <div>

      {countryData?.map((users) => (
        <div
          className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row border my-4"
          key={users?._id}
        >
          <img
            src={users?.photo}
            alt=""
            className="h-60 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-3 dark:bg-gray-50">
            <div className="flex flex-col justify-between p-3 space-y-3">
              <div className="">
                <h2 className="text-4xl font-semibold tracking-wide">
                  {users?.touristName}
                </h2>
                <div className="pl-5">
                  <p className="dark:text-gray-800 text-xl flex justify-between items-center">
                    Country <span className="text-[#1CD8A4]">{users?.countryName}</span>
                  </p>
                  <p className="dark:text-gray-800 text-xl flex justify-between items-center">
                    location <span className="text-[#1CD8A4]">{users?.location}</span>
                  </p>
                  <p className="dark:text-gray-800 text-xl flex justify-between items-center">
                    seasonality <span className="text-[#1CD8A4]">{users?.seasonality}</span>
                  </p>
                  <p className="dark:text-gray-800 text-xl flex justify-between items-center">
                    Average Cost <br />
                    <span className="text-[#1CD8A4]">{users?.averageCost}</span>
                  </p>
                  <p className="text-2xl mt-2">{users?.description}</p>
                </div>
              </div>    
            </div>
            <div className="text-end space-x-4">
            <Link to={`/viewDetails/${users?._id}`}>
            <button type="button" className="self-end btn btn-secondary">
             ViewDetails
            </button>
            </Link>
            </div>
          </div>
        </div>
      ))}
      </div>

    </div>
  )
}
