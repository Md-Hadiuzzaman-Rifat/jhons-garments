"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Navigation.css";
import { useState } from "react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toggleOpen, setToggleOpen] = useState(false);

  const handleButton = () => {
    setMenuOpen((open)=>!open)
    console.log("Hello World");
  };

  const handleToggle=()=>{
    setToggleOpen((open)=>!open)
    console.log("from");
  }

  return (
    <div className="text-white h-20">
      <nav className="customBlue border-gray-20">
        <div className="max-w-screen-xl flex px-8 flex-wrap items-start justify-between mx-auto p-4">
          <Link href="/">
            <Image
              src="/images/Logo.png"
              className="h-8 m-3"
              width={100}
              height={250}
              alt="Flowbite Logo"
            />
          </Link>
          <button
            onClick={handleToggle}
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div

            className={!toggleOpen?"hidden w-full md:block md:w-auto":"visible w-full md:block md:w-auto"}
            id="navbar-dropdown"
          >
            <ul className="flex sticky md:w-full w-[200px] left-[600px] z-100 flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 bg-[#1d2f40] black md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:customText md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  onClick={handleButton}
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 rounded  md:hover:bg-transparent md:border-0  md:p-0 md:w-auto md:dark:hover:bg-transparent hover:customText"
                >
                  Dropdown{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                onClick={handleButton}
                  id="dropdownNavbar"

                  className={`${!menuOpen? "hidden": "visible"} font-normal bg-white mt-6 divide-y absolute divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        href="#about"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#services"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#work"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Work
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link href="/post" className="links">
                  Post
                </Link>
              </li>
              <li>
                <Link href="/location" className="links">
                  Location
                </Link>
              </li>
              <li>
                <Link href="/form" className="links">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
