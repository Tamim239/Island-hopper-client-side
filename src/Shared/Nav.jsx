import { Tooltip } from "react-tooltip";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { UseAuth } from "../Hook/UseAuth";
// import { InfinitySpin } from "react-loader-spinner";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = UseAuth();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("body").setAttribute("class", localTheme);
    // document.body.classList.add(localTheme)
  }, [theme]);

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  console.log(theme);
  // if (loading) {
  //   return (
  //     <div className="flex justify-center h-10 items-center">
  //       <InfinitySpin visible={true} width="200" color="#4fa94d" />
  //     </div>
  //   )
  // }

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold lg:underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allTourists"
          className={({ isActive }) =>
            isActive ? "font-bold lg:underline" : ""
          }
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addTourists"
          className={({ isActive }) =>
            isActive ? "font-bold lg:underline" : ""
          }
        >
          Add Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myList"
          className={({ isActive }) =>
            isActive ? "font-bold lg:underline" : ""
          }
        >
          My List
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="flex items-center justify-between mx-10 ">
      <div onClick={() => setOpen(!open)} className="lg:hidden text-2xl">
        {open ? <IoMdClose /> : <FiMenu />}
      </div>
      <div className="flex items-center gap-3 dark:bg-gray-100 dark:text-gray-800">
        <img src={logo} alt="" className="md:size-10 size-6" />
        <h1 className="md:text-2xl text-base font-bold ">Island Hopper</h1>
      </div>
      <ul
        className={`lg:flex items-center lg:*:pl-6 *:text-base absolute lg:static
      ${
        open
          ? "top-14 w-full md:w-4/5 md:mx-auto bg-black py-2 px-1 text-white *:border-y z-30"
          : "hidden"
      }
      `}
      >
        {navLinks}
      </ul>
      <div className="space-x-3 flex items-center dark:bg-gray-100 dark:text-gray-800">
        {user ? (
          <div id="my-anchor-element">
            <img
              src={user?.photoURL || ""}
              alt=""
              className="size-10 rounded-full object-cover "
            />
            <Tooltip
              anchorSelect="#my-anchor-element"
              content={user?.displayName}
              place="left"
            />
          </div>
        ) : (
          <div>
            <Link
              to="/login"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Login
              </span>
            </Link>
            <Link
              to="/register"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Register
              </span>
            </Link>
          </div>
        )}
        {user && (
          <button
            onClick={() => logOut()}
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Log Out
            </span>
          </button>
        )}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={handleTheme}
            className="theme-controller"
          />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </nav>
  );
};
