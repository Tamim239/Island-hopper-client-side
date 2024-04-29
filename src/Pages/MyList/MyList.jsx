import axios from "axios";
import { UseAuth } from "../../Hook/UseAuth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

export const MyList = () => {
  const [usersData, setUsers] = useState([]);
  const { user } = UseAuth();
  useEffect(() => {
    axios
      .get(
        `https://island-hopper-server.vercel.app/myList/${user?.email || {}}`
      )
      .then((data) => {
        setUsers(data.data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://island-hopper-server.vercel.app/singleData/${id}`)
          .then((data) => {
            console.log(data.data);
            if (data.data?.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingUser = usersData.filter((user) => user._id !== id);
              setUsers(remainingUser);
            }
          });
      }
    });
  };

  return (
    <div className="p-5">
      <Helmet>
        <title>Island Hopper || MyList</title>
      </Helmet>
      <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="w-24" />
              </colgroup>
              <thead className="dark:bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">#</th>
                  <th className="p-3">Tourist Name</th>
                  <th className="p-3">Seasonality</th>
                  <th className="p-3">Average Cost</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
              {
          usersData?.map(((users, index) => <tr key={users?._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
          <td className="p-3">
            <p>{index + 1}</p>
          </td>
          <td className="p-3">
            <p>{users?.touristName}</p>
          </td>
          <td className="p-3">
            <p>{users?.seasonality}</p>
          </td>
          <td className="p-3">
            <p>{users?.averageCost}</p>
          </td>
          <td className="p-3 text-right">
            <div className="flex items-center space-x-4 justify-end">
              <Link to={`/updateTourists/${users?._id}`}>
                <button
                  type="button"
                  className="self-end btn btn-secondary"
                >
                  Update
                </button>
              </Link>
              <button
                onClick={() => handleDelete(users?._id)}
                type="button"
                className="self-end btn btn-accent"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>))
        }
                
              </tbody>
            </table>
          </div>
        </div>
        
        
      </div>
      {/* <div>
        {usersData?.map((users) => (
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
                      seasonality{" "}
                      <span className="text-[#1CD8A4]">
                        {users?.seasonality}
                      </span>
                    </p>
                    <p className="dark:text-gray-800 text-xl flex justify-between items-center">
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
              <div className="text-end space-x-4">
                <Link to={`/updateTourists/${users?._id}`}>
                  <button type="button" className="self-end btn btn-secondary">
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(users?._id)}
                  type="button"
                  className="self-end btn btn-accent"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};
