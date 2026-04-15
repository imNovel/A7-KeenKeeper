"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FiAlignRight } from "react-icons/fi";
import { ImStatsDots } from "react-icons/im";
import { IoHomeOutline, IoTimeOutline } from "react-icons/io5";

const Navbar = () => {

    const pathName = usePathname();

    const navBtn = <>
    <button><Link className={pathName === '/' ? 'btn text-white bg-green-900' : 'btn bg-white text-gray-400 border-none'} href="/"> <IoHomeOutline />Home</Link></button>
    <button><Link className={pathName === '/timeline' ? 'btn text-white bg-green-900' : 'btn bg-white text-gray-400 border-none'} href="/timeline"><IoTimeOutline />Timeline</Link></button>  
    <button><Link className={pathName === '/stats' ? 'btn text-white bg-green-900' : 'btn bg-white text-gray-400 border-none'} href="/stats"><ImStatsDots />Stats</Link></button>
    </>

    console.log("Path Name:",pathName)
  return (
    <div className="shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <a className="text-2xl font-bold">
            Keen<span className="text-green-900">Keeper</span>
          </a>
        </div>

        <div className="navbar-end">
            <div className="hidden md:flex">
                {navBtn}
        </div>
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <span>
              <FiAlignRight className="h-5 w-5" />
            </span>
          </div>
          <div
            tabIndex="-1"
            className="menu menu-sm dropdown-content right-0 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navBtn}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
