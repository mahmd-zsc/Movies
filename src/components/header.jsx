import React from "react";
import { Link, NavLink } from "react-router-dom";
import WatchedList from "./WatchedList";

function Header() {
  return (
    <>
      <nav class="font-sans flex  text-center flex-row sm:text-left justify-between py-4 px-6 bg-white shadow items-baseline w-full">
        <div class="mb-2 sm:mb-0">
          
          <Link
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
            to="/"
          >
            Home
          </Link>
        </div>
        <div className="flex gap-5">
          <NavLink to="/">Watched List</NavLink>
          <NavLink to="/watched">Watched </NavLink>
          <NavLink to="/add">add</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;
