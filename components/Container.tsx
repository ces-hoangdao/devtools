import React from "react";
import { Tool } from "../types";
import Card from "../components/Card";
import { categories } from "../data/categories";
import Footer from "./Footer";
import Link from "next/link";
import Image from "next/image";

const Container = ({
  tools,
  title,
  description,
}: {
  tools: Tool[];
  title: string;
  description?: string;
}) => {
  const indexOfTitle = categories.findIndex((e) => e.name === title);
  const prePage = indexOfTitle === 0 ? "#" : categories[indexOfTitle - 1].page;
  const nextPage =
    indexOfTitle === categories.length - 1
      ? "#"
      : categories[indexOfTitle + 1].page;

  return (
    <>
      {" "}
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-end justify-between">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
                {description}
              </p>
            </div>

            <div className="lg:flex lg:items-center lg:space-x-3">
              <Link href={prePage}>
                <button
                  type="button"
                  disabled={indexOfTitle === 0}
                  className="flex items-center justify-center text-gray-400 disabled:text-gray-400 transition-all duration-200 bg-transparent disabled:bg-gray-300 border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </Link>
              {/*TODO need dropdown link */}
              {/* <>
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
                  className="z-40 hidden bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    {categories.map((category, index) => (
                      <Link key={index} href={category.page}>
                        {category.name}
                      </Link>
                    ))}
                  </ul>
                </div>
              </> */}

              <Link href={nextPage}>
                {" "}
                <button
                  type="button"
                  disabled={indexOfTitle === categories.length - 1}
                  className="flex items-center justify-center text-gray-400 disabled:text-gray-400 transition-all duration-200 bg-transparent disabled:bg-gray-300 border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto my-8 lg:mt-16 lg:grid-cols-3 md:grid-cols-2 lg:max-w-full md:max-w-full">
            {tools &&
              tools.map((tool, index) => {
                return <Card key={index} tool={tool} />;
              })}
          </div>
        </div>
        <section className="pt-10 bg-gray-100 sm:pt-16 lg:pt-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                Built for everyone especially programmers
              </h2>
              <p className="mt-6 text-lg text-gray-900">
                If you know of any interesting and useful tools that haven&#39;t
                been listed above{" "}
                <Link
                  href="/contact"
                  className="ml-2 transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                >
                  send it to me
                </Link>
              </p>
            </div>
          </div>

          <div className="container mx-auto 2xl:px-12">
            <Image
              className="w-full mt-6"
              src="/group-of-people.png"
              alt=""
              width={900}
              height={300}
            />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Container;
