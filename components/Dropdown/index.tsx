/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Link from "next/link";
import { categories } from "../../data/categories";

const index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Dropdown button{" "}
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

      <div
        id="dropdown"
        className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </>

    // <div className="dropdown relative flex flex-col w-56">
    //   <div>
    //     <button
    //       type="button"
    //       onClick={() => setIsOpen(true)}
    //       className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    //       id="menu-button"
    //       aria-expanded="true"
    //       aria-haspopup="true"
    //     >
    //       Options
    //       <svg
    //         className="-mr-1 h-5 w-5 text-gray-400"
    //         viewBox="0 0 20 20"
    //         fill="currentColor"
    //         aria-hidden="true"
    //       >
    //         <path
    //           fillRule="evenodd"
    //           d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
    //           clipRule="evenodd"
    //         />
    //       </svg>
    //     </button>
    //   </div>

    //   {isOpen && (
    //     <div
    //       className="absolute flex flex-col right-0 z-10 mt-10 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    //       role="menu"
    //       aria-orientation="vertical"
    //       aria-labelledby="menu-button"
    //       tabIndex={-1}
    //     >
    //       {categories.map((category) => (
    //         <Link
    //           className="py-3 px-3 hover:bg-slate-400 "
    //           role="none"
    //           key={category.page}
    //           href={category.page}
    //         >
    //           {category.name}
    //         </Link>
    //       ))}
    //     </div>
    //   )}
    // </div>
  );
};

export default index;
