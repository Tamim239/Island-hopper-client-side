import { Tooltip } from "react-tooltip";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { UseAuth } from "../Hook/UseAuth";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = UseAuth();

  // console.log(user?.photoURL)
  // console.log(user?.displayName)

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
    <nav className="flex items-center justify-between">
      <div onClick={() => setOpen(!open)} className="lg:hidden text-2xl">
        {open ? <IoMdClose /> : <FiMenu />}
      </div>
      <div className="flex items-center gap-3">
        <img src={logo} alt="" className="md:size-10 size-6" />
        <h1 className="md:text-2xl text-base font-bold">Island Hopper</h1>
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
      <div className="space-x-3 flex items-center">
        {user ? (
          <div id="my-anchor-element">
            <img
              src={user?.photoURL || ''}
              alt=""
              className="size-10 rounded-full object-cover"
            />
            <Tooltip
              anchorSelect="#my-anchor-element"
              content={user?.displayName}
              place="left"
            />
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn">Register</button>
            </Link>
          </div>
        )}
        {
          user && 
        <button onClick={()=> logOut()} className="btn">Log Out</button>
        }
      </div>
    </nav>
  );
};
