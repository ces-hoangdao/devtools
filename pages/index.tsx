import type { NextPage } from 'next';
import { useRef } from 'react';
import CategoryCard from '../components/CategoryCard';
import Banner from '../components/Banner';
import { categories } from '../data/categories';
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../public/lottie/coding.json';
import { Section } from '../components/Section';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  const discover = useRef(null);
  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <main className="dark:bg-slate-800">
      <div className="w-full">
        <div className="py-8 max-w-7xl mx-auto lg:grid grid-cols-5 gap-4 mid:flex md:flex-col ">
          <div className="flex flex-col col-span-3">
            <div className="pt-16 px-4">
              <h1 className="text-[#2A2C31] dark:text-white text-4xl md:text-6xl lg:text-7xl font-montserrat font-extrabold text-center">
                Tools for developer,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500 leading-4">
                  All-in-one-place!
                </span>
              </h1>
              <div className="text-[#2A2C31] dark:text-gray-50 mt-10 text-xl font-[Poppins] font-light ">
                <div>Tired of juggling countless development tools and resources?</div>
                <br />
                <span className="text-transparent bg-clip-text font-semibold text-3xl bg-gradient-to-br from-cyan-500 to-blue-500 leading-4">
                  Tools4dev111
                </span>{' '}
                is a “free all-in-one toolbox” solution created to ease your life by preventing bookmark mess. Designed
                by developers, for developers.
              </div>
              <div className="text-[#2A2C31] dark:text-gray-50 mt-10 text-xl font-[Poppins] font-light">
                * Ok, maybe you need bookmark this website just in case ;)
              </div>
              <button
                type="button"
                aria-label="move to"
                onClick={() => scrollToSection(discover)}
                className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
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
        </div>
        <section className="py-10 bg-gray-100 dark:bg-slate-800 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div ref={discover} className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                Categories
              </h2>
              <p className="max-w-lg mx-auto my-4 text-base leading-relaxed text-gray-600 dark:text-white">
                Discover useful tools that you may not have known.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {categories &&
                categories.map((category, index) => {
                  return <CategoryCard key={index} category={category} />;
                })}
            </div>
          </div>
        </section>
        <Banner />
        <Link
          href="https://www.producthunt.com/posts/tools4dev?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tools4dev"
          target="_blank"
          rel="noreferrer"
          className='flex justify-center'
        >
          <Image
            src="/featureddark.svg"
            alt="Tools4dev - provide&#0032;helpful&#0032;link&#0032; | Product Hunt"
            width="250"
            height="54"
          />
        </Link>
        <Section />
      </div>
    </main>
  );
};

export default Home;
