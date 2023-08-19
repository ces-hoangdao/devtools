import type { NextPage } from "next";
import { useRef } from "react";
import Banner from "../components/Banner";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";
import Image from "next/image";
import { categories } from "../data/categories";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../public/lottie/coding.json";

const Home: NextPage = () => {
  const discover = useRef(null);
  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      <main className="h-screen">
        <div className="container max-w-7xl mx-auto">
          <div className="flex py-8">
            <div className="flex flex-col basis-3/5">
              <div className="pt-16">
                <h1 className="text-[#2A2C31] text-4xl md:text-6xl lg:text-7xl font-montserrat font-extrabold text-center">
                  Tools for developer,
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500 leading-4">
                    All-in-one-place!
                  </span>
                </h1>
                <div className="text-[#2A2C31] mt-10 text-xl font-[Poppins] font-light ">
                  <div>
                    Tired of juggling countless development tools and resources?
                  </div>
                  <br />
                  <span className="text-transparent bg-clip-text font-semibold text-3xl bg-gradient-to-br from-cyan-500 to-blue-500 leading-4">
                    Tools4dev
                  </span>{" "}
                  is a “free all-in-one toolbox” solution created to ease your
                  life by preventing bookmark mess. Designed by developers, for
                  developers.
                </div>
                <div className="text-[#2A2C31] mt-10 text-xl font-[Poppins] font-light">
                  * Ok, maybe you need bookmark this website just in case ;)
                </div>
                <button
                  type="button"
                  onClick={() => scrollToSection(discover)}
                  className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Discover now
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <Lottie
              className="basis-2/5"
              animationData={animationData}
              loop={true}
            />
          </div>
          <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                <div className="relative lg:mb-12">
                  <Image
                    className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
                    src="/dots-pattern.svg"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <div className="pl-12 pr-6">
                    <Image
                      className="relative"
                      src="/girl-working-on-laptop.jpg"
                      alt=""
                      width={450}
                      height={450}
                    />
                  </div>
                </div>

                <div className="2xl:pl-16">
                  <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                    It build for all developer
                  </h2>
                  <p className="text-xl leading-relaxed text-gray-900 mt-9">
                    Welcome to our all-in-one developer&#39;s paradise! Whether
                    you&#39;re a seasoned coder or just starting out on your
                    development journey, we&#39;ve curated a comprehensive list
                    of must-have resources that will supercharge your skills and
                    streamline your workflow.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div ref={discover} className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Categories
                </h2>
                <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                  Discover useful tools that you may not have known.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                {categories &&
                  categories.map((category, index) => {
                    return <CategoryCard key={index} category={category} />;
                  })}
              </div>
            </div>
          </section>
          <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
                <div className="pr-12 sm:pr-0">
                  <div className="relative max-w-xs mb-12">
                    <Image
                      className="object-bottom rounded-md"
                      src="/man-eating-noodles.jpg"
                      alt=""
                      width={300}
                      height={300}
                    />

                    <Image
                      className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12"
                      src="/smiling-businessman.jpg"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                    Work effectively.
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-600">
                    Tools4dev is a suite of tools to enhance your web
                    development experience and boost your productivity. Tools
                    for professional web developers. Made to improve and ease
                    your daily development experience.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
