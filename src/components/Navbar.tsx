import React from "react";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-14 px-14  bg-[#212121] sticky top-0  ">
      <div className="flex items-center gap-8 text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
        <Link to="/">
          <div className=" flex items-center gap-1">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-medium">YouTube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center ">
        <form action="">
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
            <div className="flex gap-4 items-center pr-5">
              <div>
                {" "}
                <AiOutlineSearch className="text-xl" />
              </div>
            </div>
            <input
              type="text"
              className="w-96 bg-zinc-900 focus:outline-none border-none"
            />
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800">
              <AiOutlineSearch className="text-xl" />
              <AiOutlineClose className="text-xl cursor-pointer" />
            </button>
          </div>
        </form>
      </div>
      <div>
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default Navbar;
