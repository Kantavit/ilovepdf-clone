import React from "react";
import Image from "next/image";
import { GoDesktopDownload } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <ul
      className="justify-between items-center flex flex-wrap  bg-white w-full shadow-xl top-0 left-0 relative"
      style={{ height: "60px", padding: "0 24px" }}
    >
      <div className="flex items-center">
        <Image
          src="/ilovepdf.svg"
          width={120}
          height={30}
          alt="Picture of the author"
        />
        <li style={{ padding: "0 12px" }} className="laptopLarge:block hidden">
          <a
            className="text-black-500 hover:text-red-600 text-sm pl-7 font-medium"
            href="#"
          >
            MERGE PDF
          </a>
        </li>
        <li style={{ padding: "0 12px" }} className="laptopLarge:block hidden">
          <a
            className="text-black-500 hover:text-red-600 text-sm pl-7 font-medium"
            href="#"
          >
            SPLIT PDF
          </a>
        </li>
        <li style={{ padding: "0 12px" }} className="laptopLarge:block hidden">
          <a
            className="text-black-500 hover:text-red-600 text-sm pl-7 font-medium"
            href="#"
          >
            COMPRESS PDF
          </a>
        </li>
        <li style={{ padding: "0 12px" }} className="laptopLarge:block hidden">
          <a
            className="text-black-500 hover:text-red-600 text-sm pl-7 font-medium"
            href="#"
          >
            CONVERT PDF
          </a>
        </li>
        <li style={{ padding: "0 12px" }} className="laptopLarge:block hidden">
          <a
            className="text-black-500 hover:text-red-600 text-sm pl-7 font-medium"
            href="#"
          >
            ALL PDF TOOLS
          </a>
        </li>
      </div>

      <div className="flex items-center">
        <GoDesktopDownload
          style={{ width: 35, height: 32 }}
          className="mobile:block hidden"
        />
        <button className=" hover:bg-blue-700 text-black font-medium py-2 px-4 rounded text-sm mobile:block hidden">
          Login
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white py-1.5 px-3 rounded mr-4 font-medium text-sm mobile:block hidden">
          Sign up
        </button>
        <RxHamburgerMenu style={{ width: 35, height: 35 }} />
      </div>
    </ul>
  );
}
