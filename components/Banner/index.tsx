'use client';
import React from 'react';
import Image from 'next/image';
const index = () => {
  return (
    <section className="py-10 bg-white dark:bg-slate-800 sm:py-16 lg:py-24">
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
              <Image className="relative" src="/girl-working-on-laptop.jpg" alt="" width={450} height={450} />
            </div>
          </div>

          <div className="2xl:pl-16">
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-gray-50 sm:text-4xl lg:text-5xl lg:leading-tight">
              It build for all developer
            </h2>
            <p className="text-xl leading-relaxed text-gray-900 dark:text-gray-50 mt-9">
              Welcome to our all-in-one developer&#39;s paradise! Whether you&#39;re a seasoned coder or just starting
              out on your development journey, we&#39;ve curated a comprehensive list of must-have resources that will
              supercharge your skills and streamline your workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
