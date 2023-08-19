"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Greetings = () => {
  return (
    <section className="pt-10 mt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Hey 👋 I am <br className="block sm:hidden" />
              Hoang
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              I&lsquo;m a full stack developer.
              <br />I am building a product that can solve developer&lsquo;s
              pain. It is has to much tool we need to bookmark. Now we have
              Tools4dev where have all tools helpful developer need.
            </p>

            <p className="mt-4 text-xl text-gray-600 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                <span className="relative"> Have a question? </span>
              </span>
              <br className="block sm:hidden" />

              <Link
                href="/contact"
                title=""
                className="ml-2 transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
              >
                Please Contact with me
              </Link>
            </p>
          </div>

          <div className="relative">
            <Image
              className="relative xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src="/ava.png"
              alt=""
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greetings;
