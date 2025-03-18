import Image from "next/image";
import React from "react";
import {
  DropdownArrow,
  EmailIcon,
  NotificationIcon,
  SearchIcon,
} from "@/constants/SVGCollection/index";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between pt-2">
      <div className="relative w-3/5">
        <div className="absolute top-3 left-2">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="w-full h-12 rounded-full text-base font-semibold bg-white shadow-md text-black/80 px-10 outline-none"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center gap-10">
        <EmailIcon />
        <NotificationIcon />
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 rounded-full border-2 border-gray-200 overflow-hidden">
            <Image
              src={"https://cdn-icons-png.flaticon.com/512/9187/9187604.png"}
              alt=""
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold ">Jane Cooper</p>
            <p className="text-black/60 text-base">jane321@gmail.com</p>
          </div>
          <DropdownArrow />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
