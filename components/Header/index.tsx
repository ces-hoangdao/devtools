import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {

  const [isOpen, SetIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let handler = (e: Event) => {
      if (!ref.current?.contains(e.target as Node)) {
        SetIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <header ref={ref} className="pb-6 sticky top-0 z-40  bg-white dark:bg-slate-800  dark:border-gray-800 lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link className="text-base font-medium text-black" href="/">
              <Image src="/logo.png" alt="logo" width={112} height={60} />
            </Link>
          </div>

          <button
            type="button"
            aria-label="menu"
            onClick={() => SetIsOpen(!isOpen)}
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>

            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 dark:text-white"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 dark:text-white"
              href="/about-me"
            >
              About me
            </Link>
            <Link
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 dark:text-white"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 dark:text-white"
              target="_blank"
              href="https://www.paypal.com/paypalme/hoanghelios"
            >
              Buy me a coffee
            </Link>
            <button
              id="theme-toggle"
              aria-label="theme"
              data-tooltip-target="tooltip-toggle"
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-500 inline-flex items-center justify-center dark:text-gray-400 hover:bg-gray-100 w-10 h-10 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
              <svg
                id="theme-toggle-dark-icon"
                className={`${theme === 'dark' ? 'hidden' : ''}  w-4 h-4`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
              </svg>
              <svg
                id="theme-toggle-light-icon"
                className={`${theme === 'dark' ? '' : 'hidden'}  w-4 h-4`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
              </svg>
              <span className="sr-only">Toggle dark mode</span>
            </button>
          </div>
        </nav>
        {isOpen && (
          <nav className="bg-white border border-gray-200 rounded-md shadow-md lg:hidden ">
            <div className="flex flex-col">
              <Link
                className="inline-flex py-2 pl-6 hover:bg-gray-100 text-base font-medium text-black transition-all duration-200 hover:text-gray-500 focus:text-gray-600 dark:text-white"
                href="/"
              >
                Home
              </Link>
              <Link
                className="inline-flex py-2  pl-6  hover:bg-gray-100 text-base font-medium text-black transition-all duration-200 hover:text-gray-500 focus:text-gray-600 dark:text-white"
                href="/about-me"
              >
                About me
              </Link>
              <Link
                className="inline-flex py-2  pl-6  hover:bg-gray-100 text-base font-medium text-black transition-all duration-200 hover:text-gray-500 focus:text-gray-600 dark:text-white"
                href="/contact"
              >
                Contact
              </Link>
              <Link
                className="inline-flex py-2  pl-6  hover:bg-gray-100 text-base font-medium text-black transition-all duration-200 hover:text-gray-500 focus:text-gray-600 dark:text-white"
                target="_blank"
                href="https://www.paypal.com/paypalme/hoanghelios"
              >
                Buy me a coffee
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
