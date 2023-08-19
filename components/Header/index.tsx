import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-white border-b border-gray-200 ">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 w-full">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <Link className="text-base font-medium text-black" href="/">
              <Image 
                src="/logo.png"
                alt="logo"
                width={150}
                height={150}
              />
            </Link>
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <Link className="text-base font-medium text-black" href="/">
                Home
              </Link>
              <Link
                className="text-base font-medium text-black"
                href="/about-me"
              >
                About me
              </Link>
              <Link
                className="text-base font-medium text-black"
                href="/contact"
              >
                Contact
              </Link>
              <Link
                className="text-base font-medium text-black"
                target="_blank"
                href="https://www.paypal.com/paypalme/hoanghelios"
              >
                Buy me a coffee
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* <nav className="py-4 bg-white lg:hidden">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Menu
            </p>

            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mt-6">
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                title=""
                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
              >
                {" "}
                Features{" "}
              </a>

              <a
                href="#"
                title=""
                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
              >
                {" "}
                Solutions{" "}
              </a>

              <a
                href="#"
                title=""
                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
              >
                {" "}
                Resources{" "}
              </a>

              <a
                href="#"
                title=""
                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
              >
                {" "}
                Pricing{" "}
              </a>
            </div>
          </div>
        </div>
      </nav> */}
    </header>
  );
};


export default Header;

